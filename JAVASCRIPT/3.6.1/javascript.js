
$(document).ready(function(){

	//saving storage data
	$("#save").click(function(){
		try{
			localStorage.setItem("small", $("#data").val());
		}
		catch(err){
			//alert("Browser does not suport localStorage")
		}
		try{
			sessionStorage.setItem("small", $("#data").val());
		}
		catch(err){
			//alert("Browser does not suport sessionStorage")
		}
	});

	//removing storagedata
	$("#delete").click(function(){
		try{
			sessionStorage.removeItem("small");
		}
		catch(err){
			//"Browser does not suport sessionStorage")
		}
		try{
			localStorage.removeItem("small");
		}
		catch(err){
			//"Browser does not suport localStorage")
		}
	});
	$("#session-data").html("Session-data: " + localStorage.getItem("small") || sessionStorage.getItem("small"));


});

//Adding eventlistenr 
window.addEventListener("storage", handleStorageChange, false);
function handleStorageChange(event){
	$("#live-data").html("Live-data: " +event.newValue);
}