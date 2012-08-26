
var status = "This will only show in Opera"
var mySecretWindow = null;
var count = 0;
var timer;
var date = new Date()
var timerMessage = self.setInterval("hiddenMessage()",1000);

//Function that procudes dialogwindows when the page is loaded
function welcome(){
	var message = ", Welcome to my Javascript site."
	var conf = confirm("Press a button");
	if(conf==true){
		var name = prompt("Please enter your name:","Your name")
	  	alert("You pressed OK! \n"+name + message);
	}
	else{
		var name = prompt("Please enter your name:","Your name")
	  	alert("You pressed Cancel!\n Doesnt matter, "+name + message);
	}
	if (navigator.appName == 'Microsoft Internet Explorer'){
		var pop = window.createPopup()
		var popB = pop.document.body
		pbody.style.backgroundColor = "#DDD"
		pbody.innerHTML = "So.. your running Internetexplorer are you? Thats just sad.."
		pop.show(150,150,200,50,document.body)
	}
}

//Function that constructs the "secret" window
function openSecret(){
	mySecretWindow=window.open("","","width=300,height=300");
	mySecretWindow.document.write("<p>There is no spoon...</p>");
	mySecretWindow.document.write("<a onClick='window.moveBy(500,500);'' href='#'>move Me</a><br>");
	mySecretWindow.document.write("<a onClick='window.moveTo(0,0);'' href='#'>Move Me to topleft</a><br>");
	mySecretWindow.document.write("<a href='#' onClick=window.resizeBy(50,50) >Expand window</a><br>"); 
	mySecretWindow.document.write("<a href='#' onClick=window.resizeTo(310,310) >Resize window</a><br>");
	mySecretWindow.document.write("<a href='#' onClick=window.print() >Print</a><br>"); 
	blurOnLinks()
}

//Function that closes the "secret" window
function closeSecret(){
	mySecretWindow.close();
	return false;
}

//Opens the windowview that contains system information that Javascript can display
function openSystemInfo(){
	var myWindow=window.open("","","width=300,height=300");
	myWindow.document.write("Your systems is running: "+navigator.platform);
	myWindow.document.write("<br>");
	myWindow.document.write("Browser: " + navigator.appCodeName +"(" + navigator.appName + ")");
	myWindow.document.write("<br>");
	myWindow.document.write("Browser header: " + navigator.userAgent);
	myWindow.document.write("<br>");
	myWindow.document.write("Cookies is "+(navigator.cookieEnabled ? "enabled" : "disabled") + " on your system.") ;
}

//Opens the windowview that contains display information that Javascript can display
function openScreenInfo(){
	var myWindow=window.open("","","width=300,height=300");
	myWindow.document.write("Your screen resolution: "+screen.width + "x" + screen.height + "px");
	myWindow.document.write("<br>");
	myWindow.document.write("Avaliable screen area: "+screen.availWidth + "x" + screen.availHeight + "px");
	myWindow.document.write("<br>");
	myWindow.document.write("Screen color resolution: " + screen.pixelDepth + "px");
	myWindow.document.write("<br>");
	myWindow.document.write("Screen color depth: "+screen.colorDepth);
	myWindow.document.write("<br>");
}
//Opens the windowview that contains location information that Javascript can display
function openLocationInfo(){
	var myWindow=window.open("","","width=1000,height=300");
	myWindow.document.write("Site is hoasted on: " + location.host + "("+ location.hostname + ":" + (location.port ? location.port : "?") + ")<br>");
	myWindow.document.write("Site URL: "+ location.href + "<br>");
	myWindow.document.write("File location: " + location.pathname + "<br>");
	myWindow.document.write("Site runs a <b>" + location.protocol + "</b> protocol<br>");
	myWindow.document.write("Site URL: "+ location.hash + "<br>");
	myWindow.document.write("Site URL: "+ location.search + "<br>");
	myWindow.document.write("<a href='#' onClick=window.location.assign('http://google.se')>open google</a><br>");
	myWindow.document.write("<a href='#' onClick=window.location.replace('http://google.se')>Replace document widh google</a>");
}

function focusOnLinks(){
	document.getElementById("secret").focus()
}

function blurOnLinks(){
	document.getElementById("secret").blur()
}

function hiddenMessage(){
	window.clearInterval(timerMessage)
	alert("This is the delayed message that says, welcome again.");
}

//Timer function that alerts the user 5 seconds after the page is loaded
function timerOn(){
	if(count <= 4){
		count +=1;
		console.log(count)
  		timer = setTimeout("timerOn()" ,1000);
  	}
  	else{
  		clearTimeout(timer);
  		document.getElementById('counter').appendChild(document.createTextNode("A timer program was recursively called " + count + " times."));
  	}
}
function resize(){
	document
}

//The code that runs functions an generates text.
welcome();
window.defaultStatus = status
window.status = status
document.writeln("Your screenresolution is: " + screen.width +"x"+screen.height)
document.write("<br>");
document.writeln("This site is hoasted on: " + location.host);
document.write("<br>");
document.write("<br>");
document.writeln("The window is located " + (screenLeft || screenX)+ "px from the left and " + (screenTop || screenY) + "px from the top");
document.write("<br>");
document.writeln("Window dimensions: " + outerWidth + "x"+outerHeight );
document.write("<br>");
document.writeln("Innerwindow dimensions: " + innerWidth + "x"+innerHeight );
document.write("<br>");
document.writeln("Your position in this document: top-" + pageYOffset + "px, width-"+pageXOffset + "px" );
document.write("<br>");
document.write("<a href='#' onClick=closeSecret() >Close secret</a> | " );
document.write("<a href='#' id='secret' onClick=openSecret() >Click to read secret</a> " ); 
document.write("<br>");
document.write("<a href='?search=searchData#HashCodeForPageID' onClick=openLocationInfo() >Open location info</a> | " );
document.write("<br>");
document.writeln("<p id='counter'></p>"); 
document.write("<br>");
document.write("<a href='#' onClick=window.location.reload()>Update datetime</a><br>");	
document.write("Date : " + date);
timerOn();
focusOnLinks();
