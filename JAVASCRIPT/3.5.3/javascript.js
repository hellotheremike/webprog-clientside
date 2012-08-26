$(document).ready(function(){
	//shows the submenues
	$("#menu li").mouseenter(function(){
		$(this).children('ul').slideDown(200)
	});
	//hides the submenues
	$("#menu li").mouseleave(function(){
		$(this).children('ul').slideUp(200)
	});
	//general rules for all <a> elements
	$("a").click(function(){
		$(this).attr('target', "_blank");
	});
});
