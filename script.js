//Appearing time of the circle
var startTime;;

//Returns a random color avoiding limit colors (too dark or too light)
function getRandomColor() {
	var letters = '789ABCD';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 6)];
	}
	return color;
}

//Makes the circle appear
function circleAppearance (){
	var top = Math.random() * 400;
	var left = Math.random() * 400;
	var widthAndHeight = (Math.random() * (400-15)) + 15;

	document.getElementById("circle").style.top = top;
	document.getElementById("circle").style.left = left;
	document.getElementById("circle").style.width = widthAndHeight;
	document.getElementById("circle").style.height = widthAndHeight;
	document.getElementById("circle").style.backgroundColor = getRandomColor();

	document.getElementById("circle").style.display = "block";
	startTime = new Date().getTime();
}

//Sets a random time for the circle to appear
function appearingAfterDelay(){
	setTimeout(circleAppearance, Math.random() * 2000);
}

//First appearance
appearingAfterDelay();

//When circle is clicked
document.getElementById("circle").onclick = function () {
	//Hide circle
	document.getElementById("circle").style.display = "none";

	//Calculate reaction time
	var endTime = new Date().getTime();
	var timeTaken = (endTime - startTime) / 1000;
	document.getElementById("timeTaken").innerHTML = timeTaken + "s";

	//Make another circle appear
	appearingAfterDelay();
}