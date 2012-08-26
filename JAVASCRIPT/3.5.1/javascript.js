$(document).ready(function(){

	//Hide and show function
	$("#showHide").click(function(){
		if($(this).html() == 'Hide'){
			$("#showHideBox").hide()
			$(this).html('Show')
		}
		else{
			$("#showHideBox").show()
			$(this).html('Hide')
		}
		return false;
	});

	//Toggle show/hide function
	$("#toggle").click(function(){
		$('#toggleBox').toggle('slow');
		return false;
	});

	//Fade in/out function
	$("#fadeInOut").click(function(){
		if($(this).html() == 'FadeOut'){
			$("#fadeInOutBox").fadeOut(1500)
			$(this).html('Fadein')
		}
		else{
			$("#fadeInOutBox").fadeIn(1500)
			$(this).html('FadeOut')
		}
		return false;
	});

	//animation function
	$("#animate").click(function(){
		$("#animateBox").animate({
		    height: '0'
		  }, {
		  duration: 1500,
		    specialEasing: {
		      height: 'easeOutBounce'
		    },
		    complete: function() {
		      $("#animateBox").delay(50).animate({
			    height: '200'
			  }, {
			  duration: 700,
			    specialEasing: {
			      height: 'easeOutBounce'
			    }
			  });
		    }
		  });
		return false;
	});
	
});