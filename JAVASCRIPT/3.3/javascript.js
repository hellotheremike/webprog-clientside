$(document).ready(function(){
	holder = $("#wrapper_1");
	create();
	eventOne();
});
//Rendering the HTML-elements
function create(){
	$("#wrapper_2").remove()
	holder.width("500").height("500");
	holder.css({'background-color' : 'yellow'});
	holder.html("Resize window to get windows size");
	holder.addClass("classOne");
	holder.addClass("classTwo");
	holder.removeClass("classOne");
	console.log("Box content: " + holder.html());
}
//Wrapper function for the events
function eventOne(){
	var clicks = 0;
	$("#form input[type=submit]").css("background-color", "gray")
	holder.click(function(){
		alert("Boxtext: " + holder.html());
	});
	$(window).resize(function(){
		holder.html("width: " + $(window).width() + "<br>" + "height: " + $(window).height());
	})
	$(window).keydown(function(){
		holder.html("key pressed");
	})
	//Click counter
	$("#form .counter").click(function(){
		clicks++;
		$(this).val("clicked " + clicks + " times")
		return false;
	});
	//hoverToggle that changes the background color
	$("#form .counter").hover(
	  function () {
	    $(this).css("background-color", "orange")
	  }, 
	  function () {
	    $(this).css("background-color", "gray")
	  }
	);
	//Toggel function that cahnges the text to odd/even
	$("#form .counter").toggle(
	  function () {
	    var val = $(this).val()
	    $(this).val(val + "-odd")
	  }, 
	  function () {
	   	var val = $(this).val()
	    $(this).val(val + "-even")
	  }
	);
	$(document).bind('mousemove',function(e){ 
        $("#log").text("Mouse-X: " + e.pageX + ", Mouse-Y: " + e.pageY); 
	});
	//Unbind button
	$("#form .unbind").click(function(){
		holder.unbind('click');
		return false;
	});
	
}