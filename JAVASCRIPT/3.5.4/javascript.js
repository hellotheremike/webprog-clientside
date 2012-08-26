$(document).ready(function(){
	$("#tab").tabs();
	slide();
	tooltip('.tool');

	//Content slider
	function slide(){
		//Calculates the movement of every slide
		var totalSlides = $("#ContentSlide ul").children("li").length-1;
		var movement = $("#ContentSlide ul li").width()+20;
		var position = 0;

		//sliding to the previous content holder
		$("#ContentSlide #back").click(function(){
			if(position > 0){
				position -= 1;
				$("#ContentSlide ul").animate(
				{
					left: "+="+movement
				},
				{
					duration: 800
				}
				);
			}
		});
		//sliding to the next content holder
		$("#ContentSlide #next").click(function(){
			if(totalSlides > position){
				position += 1;
				$("#ContentSlide ul").animate(
				{
					left: "-="+movement
				},
				{
					duration: 800
				}
				);
			}
		});
	}

	//Function that generates the tooltip elements that responds to hoverevents on registered elements
	function tooltip(target_items){
		$(target_items).each(function(i){
			$("body").append("<div class='tip' id='tip"+i+"'><p>"+$(this).attr('title')+"</p></div>");
			var my_tooltip = $("#tip"+i);
			$(this).removeAttr("title").mouseover(function(){
				my_tooltip.css({opacity:0.67, display:"none"}).fadeIn(300);
			}).mousemove(function(kmouse){
					my_tooltip.css({left:kmouse.pageX+15, top:kmouse.pageY-40});
			}).mouseout(function(){
					my_tooltip.fadeOut(300);
			});
		});
	}
});
