$(document).ready(function(){
	//Line
	var canvas = document.getElementById("line");
    var context = canvas.getContext("2d");
    context.moveTo(100, 150);
    context.lineTo(450, 50);
    context.lineWidth = 1;
    context.stroke();

    //Bended line
	canvas = document.getElementById("bend");
    context = canvas.getContext("2d");
    context.moveTo(200, 200);
    context.quadraticCurveTo(200, 0, 0, 150);
    context.strokeStyle = "black";
    context.stroke();

    //Circle with fill
    canvas = document.getElementById("fill");
    context = canvas.getContext("2d");
    context.beginPath();
    context.arc(70, 70, 50, 0, Math.PI * 2, false);
    context.closePath();
	context.lineWidth = 3;
	context.fillStyle = "#858F0d";
	context.fill();
	context.strokeStyle = "black";
	context.stroke();

	//Gradeient fill
	canvas = document.getElementById("gradient");
    context = canvas.getContext("2d");
    context.beginPath();
    context.arc(70, 70, 50, 0, Math.PI * 2, false);
    context.closePath();
	context.lineWidth = 2;
	var gradientFill = context.createLinearGradient(70, 80, 70, 0);
    gradientFill.addColorStop(0, "#000");
    gradientFill.addColorStop(1, "#fff");
    context.fillStyle = gradientFill;
	context.fill();
	context.strokeStyle = "black";
	context.stroke();
	var urlLink = canvas.toDataURL();
    document.getElementById("canvasImg").src = urlLink;

	//Clock
    var canvas_time = document.getElementById("text");
    context_Time = canvas_time.getContext("2d");
	context_Time.font = "normal 35px Arial";
	context_Time.clearRect(0, 0, 250, 200);
	date = new Date()
	context_Time.shadowOffsetX = 5;
	context_Time.shadowOffsetY = 5;
	context_Time.shadowBlur    = 4;
	context_Time.shadowColor   = 'rgba(25, 150, 225, 0.5)';
	context_Time.fillText(date.toLocaleTimeString(), 0, 100)


	//Patternfill
	var img = new Image();
	canvas = document.getElementById("pattern");
    context = canvas.getContext("2d");
    context.beginPath();
    context.arc(70, 70, 50, 0, Math.PI * 2, false);
    context.closePath();
	context.lineWidth = 1;
	var gradientFill = context.createLinearGradient(70, 80, 70, 0);
    gradientFill.addColorStop(0, "#000");
    gradientFill.addColorStop(1, "#fff");
    img.src = "http://colourlovers.com.s3.amazonaws.com/images/patterns/465/465753.png?1241359007";
    img.onload = function() {
    	var pattern = context.createPattern(img, "repeat");
        context.fillStyle = pattern;
        context.fill();
        context.strokeStyle = "black";
		context.stroke();
    };

    var img_2 = new Image();
    var canvas_img_2 = document.getElementById("image");
    var context_img_2 = canvas_img_2.getContext("2d");
    img_2.onload = function() {
        context_img_2.drawImage(img_2, 0, 0);
    };
    img_2.src = "http://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/300px-Star_Wars_Logo.svg.png";
	

	doSwapp(1)
	doSlide()
});

//Image swapp that changes the SRC attribute
function doSwapp(pos, dir){
	var images = ['yoda1','yoda2','yoda3','yoda4']
	$("#imgSwitch img").delay(1000).animate(
	{height: '0'},
	{duration: 1000,complete: function(){
		if(pos == images.length)
			pos = 0;
		$("#imgSwitch img").attr('src', images[pos]+".jpeg");
		$("#imgSwitch img").delay(1000).animate(
		{height: '200'},
		{duration: 1000,complete: function(){
			doSwapp(pos +=1)
		}
		});
		}
	});
}

//Imageslider that moves a listholders position
function doSlide(){
	var width = $("#imgroller ul li").width()
	var length = $("#imgroller ul").children('li').length * width
	$("#imgroller ul").delay(1000).animate(
		{
			left: "-=300"
		},
		{duration: 1000, complete: function(){
			if(parseInt($("#imgroller ul").css('left')) < parseInt(-(length-600))){
				$("#imgroller ul").delay(1000).animate(
					{
						left: "0"
					},
					{duration: 2000, complete: function(){
						doSlide()
					}
				});
			}
			else
				doSlide()
		}
	});
}


