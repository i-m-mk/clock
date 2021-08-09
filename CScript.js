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
	if (hours===0 && minutes===0 && seconds===0 && timeOfDay==='AM')
		getDate(1);
	if(hours<10)
		hours=`0${hours}`;
	if (minutes<10)
		minutes=`0${minutes}`;
	if (seconds<10)
		seconds = `0${seconds}`;
	clock = document.getElementById("clock");
	clock.innerText = `${hours}:${minutes}:${seconds}${timeOfDay}`;
	sessionOfDay(hours, timeOfDay);
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

	halleyCometCoutdown(day, month, year)
}

function sessionOfDay(hours, timeOfDay="AM"){
	var session="";

	if (timeOfDay==='AM' && hours>=5 && hours<12)
		session = "Morning";
	else if (timeOfDay=='PM' && hours>=0 && hours<4)
		session = "Afternoon";
	else if (timeOfDay=='PM' && hours>=4 && hours<7)
		session = "Evening";
	else if (timeOfDay=='PM' && hours>=7 && hours<12)
		session = "Night";
	else if (timeOfDay=='AM' && hours>=0 && hours<5)
		session = "Night";

	dayCategory = document.getElementById("dayCategory");
	dayCategory.innerText = `What a lovely ${session} it is!`;
}

function halleyCometCoutdown(day, month, year){
	var cometTimeDay = 28;
	var cometTimeMonth = 7;
	var cometTimeYear = 2061;

	if(cometTimeMonth<month){
		yearDifference = cometTimeYear-year-1;
		monthDifference = 12+(cometTimeMonth-month);
		dayDifference = cometTimeDay-day;
	}
	else{
		yearDifference = cometTimeYear-year;
		monthDifference = cometTimeMonth-month;
		dayDifference = cometTimeDay-day;
	}

	comet = document.getElementById("halleyComet");
	comet.innerText = `${yearDifference} years ${monthDifference} months ${dayDifference} days left`;
}

getDate();
getTime();
setInterval(getTime, 1000);
console.log(device-width);