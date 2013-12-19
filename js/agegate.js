
$.msg = function(text, style)
{
	/*style = style || 'gatedenied';
	$('<div>')
	  .attr('class', style)*/
	  //.html(text)
	  alert(text);
	  /*.insertAfter($('.gate-subheading'))
	  .fadeIn('slow')
	  .animate({opacity: 1.0}, 3000)     //<== wait 3 seconds before fading out
	  .fadeOut('slow', function()
	  {
	        $(this).remove();
	  });*/
};


//$("#gate-box").submit(function(){
$('#gate-box #submit').on('click',function(){	
	if (($("#day").val() == '0') || ($("#month").val() == '0') || ($("#year").val() == '0')){
		alert('Invalid Date: Please enter a valid date');
		/*
		* Uncomment these lines if you are requiring the checkbox!
		*/
	//}else if ($('#terms').is(':checked')==false){  
	//	alert('Please agree to the Terms and Conditions and Privacy & Cookie Notice');
	}else {

		var day = $("#day").val();
		var month = $("#month").val();
		var year = $("#year").val();

		switch ($('#country').val()) {  

		   case "0":  var age = -1; break;
		   case "AL":  var age = 21; break;
		   case "AD":  var age = 21; break;
		   case "AU":  var age = 21; break;
		   case "AT":  var age = 21; break;
		   case "BY":  var age = 21; break;
		   case "BE":  var age = 21; break;
		   case "BA":  var age = 21; break;
		   case "BG":  var age = 21; break;
		   case "CA":  var age = 21; break;
		   case "HR":  var age = 21; break;
		   case "CY":  var age = 21; break;
		   case "CZ":  var age = 21; break;
		   case "DK":  var age = 21; break;
		   case "EE":  var age = 21; break;
		   case "FI":  var age = 21; break;
		   case "FR":  var age = 21; break;
		   case "DE":  var age = 21; break;
		   case "GR":  var age = 21; break;
		   case "HU":  var age = 21; break;
		   case "IS":  var age = 21; break;
		   case "IE":  var age = 21; break;
		   case "IT":  var age = 21; break;
		   case "LV":  var age = 21; break;
		   case "LI":  var age = 21; break;
		   case "LT":  var age = 21; break;
		   case "LU":  var age = 21; break;
		   case "MK":  var age = 21; break;
		   case "MT":  var age = 21; break;
		   case "MX":  var age = 21; break;
		   case "MD":  var age = 21; break;
		   case "MC":  var age = 21; break;
		   case "MN":  var age = 21; break;
		   case "NL":  var age = 21; break;
		   case "NO":  var age = 21; break;
		   case "PL":  var age = 21; break;
		   case "RO":  var age = 21; break;
		   case "RU":  var age = 21; break;
		   case "SM":  var age = 21; break;
		   case "ST":  var age = 21; break;
		   case "SE":  var age = 21; break;
		   case "SI":  var age = 21; break;
		   case "SA":  var age = 21; break;
		   case "ES":  var age = 21; break;
		   case "SE":  var age = 21; break;
		   case "CH":  var age = 21; break;
		   case "TW":  var age = 21; break;
		   case "TR":  var age = 21; break;
		   case "UA":  var age = 21; break;
		   case "GB":  var age = 21; break;
		   case "US":  var age = 21; break;
		   default: var age = 21; break;
		}

		var mydate = new Date();
		mydate.setFullYear(year, month-1, day);

		var currdate = new Date();
		currdate.setFullYear(currdate.getFullYear() - age);
		if ((currdate - mydate) < 0){
			//$.msg("Sorry, you must be at least " + age + " to enter.")
			//$('.index').css('display','none');
			switch ($('#country').val()) {
				case "AT":  window.location = 'http://www.drinkwise.com.au'; break;
				case "CA":  window.location = 'http://www.educalcool.qc.ca'; break;
				case "CZ":  window.location = 'http://www.forum-psr.cz'; break;
				case "DK":  window.location = 'http://www.goda.dk'; break;
				case "FR":  window.location = 'http://www.ep.soifdevivre.com'; break;
				case "HU":  window.location = 'http://www.hafrac.com'; break;
				case "IE":  window.location = 'http://www.meas.ie'; break;
				case "MT":  window.location = 'http://www.thesensegrouponline.org'; break;
				case "MX":  window.location = 'http://www.alcoholinformate.org.mx'; break;
				case "NL":  window.location = 'http://www.stiva.nl'; break;
				case "SA":  window.location = 'http://www.ara.co.za'; break;
				case "ES":  window.location = 'http://www.alcoholysociedad.org'; break;
				case "TW":  window.location = 'http://www.tbaf.org.tw'; break;
				case "GB":  window.location = 'http://www.drinkaware.co.uk'; break;
				case "UNITED STATES":  window.location = 'http://www.centurycouncil.org'; break;
				default: window.location = 'http://www.centurycouncil.org/'; break;
			}
			return false;
		} else if(age==0){
			$.msg("Sorry, we are unable to allow you access to our web site.");
		} else if(age==-1){
			$.msg("Sorry, we are unable to allow you access to our web site. Please select country.");
		}
		else if((currdate - mydate) >= 0){
			$.colorbox.close()
			//$.setCookie( 'diageoagecheck', 'verified', {duration:3});
			$.setCookie( 'age', 'permissible', {duration:3});
				$('body').unbind('resize');
				$('body').css({
					height:'auto',
					overflow:'auto'
				});
			$('#gate-container').fadeOut(300);
		}
	}
return false;
});
