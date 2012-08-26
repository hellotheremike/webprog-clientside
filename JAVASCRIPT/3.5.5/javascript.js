$(document).ready(function(){
	// disable the checkboxes
	$("input[type=checkbox]").attr('disabled', "disabled")
	
	// when the users focus is in a textfield add class active
	$("input[type=text]").focus(function(){
		$(this).parent().addClass('active')
	});
	// when user leaves a textfield remove class active
	$("input[type=text]").blur(function(){
		$(this).parent().removeClass('active')
	});

	// if the textboxes retive a value add class granted
	$("input[type=text]").keyup(function(){
		if($(this).val()){
			$(this).parent().removeClass('active').removeClass('error')
			$(this).parent().addClass('confirmed')
		}
		else{
			$(this).parent().addClass('active')
			$(this).parent().removeClass('confirmed')
		}
	});

	// when the user selects his/her expertise field remove the previously chosen 
	// fileds and activate the related checkboxes
	$("input[type=radio]").change(function(){
		$(this).parent().removeClass('error').siblings("p").removeClass('error')
		$(this).parent().siblings("p").removeClass('confirmed')
		$(this).parent().addClass('confirmed')
		if($(this).val() == 'server'){
			$("input[name=client]").attr('disabled', "disabled").parent().removeClass('error').removeClass('confirmed')
			$("input[name=server]").attr('disabled', "")
		}
		else{
			$("input[name=client]").attr('disabled', "")
			$("input[name=server]").attr('disabled', "disabled").parent().removeClass('error').removeClass('confirmed')
			$("input[name=server]").removeAttr('checked')
		}
	});
	$("input[type=checkbox]").change(function(){
		if($(this).is(':checked')){
			$(this).parent().removeClass('error').siblings("p").removeClass('error')
			$(this).parent().addClass('confirmed')
		}
		else{
			$(this).parent().removeClass('confirmed')
		}
	});

	//Controlling that every requierdfield has a value set
	$("#validate").click(function(){
		bool = true;
		$("p").removeClass('error')
		if(!$("#text-1").val()){
			$("#text-1").parent().addClass('error')
			bool = false;
		}
		if(!$("#text-2").val()){
			$("#text-2").parent().addClass('error')
			bool = false;
		}
		if(!$("input[type=radio]:eq(1)").attr("checked") && !$("input[type=radio]:eq(0)").attr("checked")){
			$("input[type=radio]").parent().addClass('error')
			bool = false;
		}

		if($("input[type=radio]:eq(0)").attr("checked")){
			if($("input[name=server]:checked").length == 0){
				$("input[name=server]").parent().addClass('error')
				bool = false;
			}

		}
		else if($("input[type=radio]:eq(1)").attr("checked")){
			if($("input[name=client]:checked").length == 0){
				$("input[name=client]").parent().addClass('error')
				bool = false;
			}
			
		}

		// If the bool variable is true, thus the fields are set execure alert
		// That fetches the data typed by the user and retiring it as a message
		if(bool){
			var pro = "";
			for(var x = 0; x < $("input[type=checkbox]:checked").length; x++){
				pro += ", "+$($("input[type=checkbox]:checked")[x]).val();
			}
			var text ="Hello, " + $("#text-1").val() + " " + $("#text-2").val()+".\n"
			text +=	"I heard that you are good at web" + $("input[type=radio]:checked").val() + " development\n"
			text += "and know " + pro
			alert(text)
		}
		return false;
	});
});
