$(document).ready(function(){
	var file = 1;
	$("#submit").click(function(){

		$.ajax({
			url: 'file_' + file + ".txt",
			dataType: 'text',
			success: function(data){
				$("#result").val(data);
				file++;
			}
		});
		if(file == 3){
			file = 0
		}

		return false;
	})

});
