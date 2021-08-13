var dateInfo = new Date();
var hours = dateInfo.getHours();
var minutes = dateInfo.getMinutes();
var seconds = dateInfo.getSeconds();
var bg = document.getElementById("webpage");

if(hours == 0)
	hours=24;

function setBackground(){
	console.log(hours);
	if (hours>=5 && hours<20)
		bg.style.backgroundPosition = "100% 0%";
	else if(hours>=20 && hours<=24)
		bg.style.backgroundPosition = "0% 0%";
	else if(hours>=1 && hours<5)
		bg.style.backgroundPosition = "0% 0%";
}

function changeBackground(){
	if (hours==5 && minutes==0 && seconds==0)
		bg.style.animation = "move 4s ease 2s 1 reverse both";
	else if(hours==20 && minutes==0 && seconds==0)
		bg.style.animation = "move 4s ease 2s 1 reverse both";
}
setBackground();
setInterval(changeBackground, 100);