$(document).ready(function(){
	$("#send").click(function(){
		var tag = $("#tag").val();
		$("#results").html("Total hits: ")
		$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",{
			tags: tag,
			tagmode: "any",
			format: "json"
		},
		function(data) {
			$("#photos").html("");
			$.each(data.items, function(x,item){
				$("<img/>").attr("src", item.media.m).appendTo("#photos");
				if ( x == parseInt($("#drop").val()) ){
					$("#results").html("Total hits: "+ x)
					return false;
				}
				else{
					$("#results").html("Total hits: "+ x)
				}
			});
		});
	});


});
