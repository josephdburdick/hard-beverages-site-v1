/* Author:
	Joe Burdick • JB@SGCAGENCY.COM
*/





$(document).ready(function(){
	//Columns? Si.
	yepnope({
	  test : Modernizr.csscolumns,
	  nope : 'js/libs/jquery.columnizer.js',
	  callback: function(){
	  	$('.col-2').columnize({
			//width:440
		});
	  }
	});
	
	if (!$('#gate-container').hasClass('loaded')){
		$('#gate-container').load('gate-files/agegate.html',function(){
			$(this).addClass('loaded');
		});
	}
	
	//Assign to those input elements that have 'placeholder' attribute
	if(!Modernizr.input.placeholder){
		$('input[placeholder]').each(function(){  
	        var input = $(this);        
	        $(input).val(input.attr('placeholder'));
	        $(input).focus(function(){
	             if (input.val() == input.attr('placeholder')) {
	                 input.val('');
	             }
	        });
	        
	        $(input).blur(function(){
	            if (input.val() == '' || input.val() == input.attr('placeholder')) {
	                input.val(input.attr('placeholder'));
	            }
	        });
	    });
	}
	//Add arrows to .blockLinks
	if($('.blockLink').length > 0){
		if(!$('html').hasClass('lt-ie9')){
			$('.blockLink').each(function(){
				$(this).append('<span class="arrow"></span>').find('span.arrow').transition({opacity:'1'},800);
			});
		}
	}
	//Add cycles, buttons
	if ($('.cycle').length > 0){
		$('.cycle').each(function(){
			$(this).append('<a href="javascript:void(0);" class="prev"></a><a href="javascript:void(0);" class="next"></a>');
			$('.cycle > ul').cycle({ 
			    fx:     'fade', 
			    speed:  'fast', 
			    timeout: 0, 
			    next:   '.next', 
			    prev:   '.prev',
			    after:     onAfter
			});
			function onAfter(curr,next,opts) {
				var caption = (opts.currSlide + 1) + '/' + opts.slideCount;
				$('.caption .date.serif').html(caption);
			}
		});
	}
	//Activate tinyscrollbars
	if ($('.tinyscrollbar').length > 0){
		$('.tinyscrollbar').each(function(){
			var thisId = $(this).attr('id');
			$('#'+thisId).tinyscrollbar();
		});
	}
	//localScroll();
	//Activate scrollbar for tabs
	$('a[data-toggle="tab"]').click(function (e) {
		  e.preventDefault();
		  $(this).tab('show').addClass('active');
		  $('a[data-toggle="tab"]').not(this).removeClass('active');
		  var scrollbar = $(this).attr('href');
		  $(scrollbar+'.tab-pane').find('.tinyscrollbar').tinyscrollbar()
	});
	
	//Tooltips
	$('a[rel="tooltip"]').tooltip()
	
	//localScroll();
	inView();
	
	//Scroll animation
	$('a[data-scroll]').click(function(){
		var anchor = '#' + $(this).data('scroll');
		$(window).scrollTo($(anchor),2000,'easeInOutQuint');
	});
	
});

function localScroll(){
	$.localScroll.defaults.axis = 'xy';
	
	$.localScroll.hash({
		target: 'window', 
		queue:true,
		duration:1500
	});
	
	$.localScroll({
		target: 'window', 
		queue:true,
		duration:1000,
		hash:true,
		onBefore:function( e, anchor, $target ){
			// The 'this' is the settings object, can be modified
		},
		onAfter:function( anchor, settings ){
			// The 'this' contains the scrolled element (#content)
		}
	});
}

function inView(){
	 $('#home').bind('inview', function(event, visible) {
      if (visible) {
      	$('#index-scroll').animate({
			top:'5px',
			opacity:'1'
		},80,'swing');
		$('.nav-main-container').transition({
			position:'relative',
			top: 'auto'
		},200,'swing');
		$('.nav-main-substitute').css('display','none');
      } else {
      	var navContainer = $('.nav-main-container').height();
      	var screenHeight = $(window).height() - navContainer;
		$('.nav-main-substitute').css('display','block');
		$('#index-scroll').animate({
			top:'-50px',
			opacity:'0'
		},100,'swing');
		
		$('.nav-main-container').transition({
			position:'fixed',
			top: '-40px'
		},200,'swing');
      }
    });
}
function scroll(){
	//Activate dockable menu if body.scroll 
	if ($('body').hasClass('scroll')){
		$(window).scroll(function(){
		   $.doTimeout( 'scroll', 50, function(){
		   	
		   	 /*$("#home:in-viewport"){
		   	 	
		   	 }*/

		   	
		     	var topStart = $('.nav-main-container').css('top');
				var yOffset = $(".nav-main-container").offset().top;
				$(window).scroll(function() {
					if ($(window).scrollTop() >= yOffset) {
						/*$(".nav-main-container").css({
							'top': '0px',
							'position': 'fixed'
						});*/
						//$('.blockLink.scroll').stop().fadeOut(600)
						$('.nav-main-container').fadeOut(300,function(){
							$(this).css({
							'top':'0px',
							'bottom': 'auto',
							'position': 'fixed'
							}).fadeIn(300);
						})
					} else {
						$('.nav-main-container').fadeOut(300,function(){
							$(this).css({
							'bottom': '0px',
							'top':'auto',
							'position': 'relative'
							}).fadeIn(300);
						})
						/*$(".nav-main-container").css({
							'bottom': '0px',
							'position': 'fixed'
						});*/
						//$('.blockLink.scroll').stop().fadeIn(600)
					}
				});
			   });
		});
		
		/*$(window).scroll(function() {
			var topStart = $('#nav-main').css('top');
			var yOffset = $("#nav-main").offset().top;
			/*$(window).scroll(function() {
				if ($(window).scrollTop() >= yOffset) {
					$(".nav-main-container").css({
						'top': '0px',
						'position': 'fixed'
					});
					//$('.blockLink.scroll').stop().fadeOut(600)
				} else {
					$(".nav-main-container").css({
						'bottom': '0px',
						'position': 'fixed'
					});
					//$('.blockLink.scroll').stop().fadeIn(600)
				}
			});*/
		//});	
	}
}



