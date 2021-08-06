var time;
var noon;

function getTime(){
	var dateInfo = new Date();

	var hours = dateInfo.getHours();
	var minutes = dateInfo.getMinutes();
	var seconds = dateInfo.getSeconds();
	var timeOfDay = 'AM';

	if (hours>12){
		timeOfDay = 'PM';
		hours = hours-12
	}
	if (hours===12 && minutes===0 && seconds===0 && timeOfDay==='AM')
	getDate(1);
	if (minutes<10){
		minutes=`0${minutes}`;
	}
	if (seconds<10){
		seconds = `0${seconds}`;
	}
	clock = document.getElementById("clock");
	clock.innerText = `${hours}:${minutes}:${seconds}${timeOfDay}`;
	}

function getDate(changeDate = 0){
	var dateInfo = new Date();
	// determining current day, month and year.
	var day = dateInfo.getDate();
	var month = dateInfo.getMonth()+1;
	var year = dateInfo.getFullYear();

	// adding 0 if date and month are less than 10.
	if (changeDate==1){
		console.log("updated");
		day = dateInfo.getDate()+1;
	}
	if (day<10)
		day = `0${day}`;
	if (month<10)
		month = `0${month}`;
	// putting today's date as string to display.
	todayDate = document.getElementById("todayDate");
	todayDate.innerText = `${day}:${month}:${year}`;
}

getDate();
getTime();
setInterval(getTime, 1000);