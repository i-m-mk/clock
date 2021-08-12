var dateInfo = new Date();
// determining current day, month and year.
var day = dateInfo.getDate();
var month = dateInfo.getMonth()+1;
var year = dateInfo.getFullYear();
var leapYear = (year%4===0) ? true : false;

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

function yearlyEventCountdown(eventDay, eventMonth, eventYear, eventID, eventMessage){
	let dayOfEvent = eventDay;
	let monthOfEvent = eventMonth;
	let yearOfEvent = eventYear;
	let eventName = eventID;
	let previousMonth = monthOfEvent-1;
	let addDays = 0;

	addDays = (previousMonth!=2) ? ((previousMonth==1 || previousMonth==3 || previousMonth==5 || previousMonth==7
				|| previousMonth==8 || previousMonth==10 || previousMonth==12) ? 31 : 30) : 28;
	
	console.log(addDays);
	if(monthOfEvent<month && dayOfEvent>=day){
		yearDifference = yearOfEvent-year-1;
		monthDifference = 12+(monthOfEvent-month);
		dayDifference = dayOfEvent-day;
	}
	else if(monthOfEvent<month && dayOfEvent<day){
		yearDifference = yearOfEvent-year-1;
		monthDifference = 11+(monthOfEvent-month);
		if(leapYear)
			dayDifference = (addDays+1)+(dayOfEvent-day);
		else
			dayDifference = addDays+(dayOfEvent-day);
	}
	else if(monthOfEvent>=month && dayOfEvent<day){
		yearDifference = yearOfEvent+76;
		monthDifference = (monthOfEvent-month==0) ? 11 : (monthOfEvent-month);
		if(leapYear)
			dayDifference = (addDays+1)+(dayOfEvent-day);
		else
			dayDifference = addDays+(dayOfEvent-day);
	}
	else if(monthOfEvent==month && dayOfEvent==day && yearOfEvent==year){
		selectElement = document.getElementById(eventName);
		selectElement.innerText = `${eventMessage}`;
		eventName = " ";
	}
	else{
		yearDifference = yearOfEvent-year;
		monthDifference = monthOfEvent-month;
		dayDifference = dayOfEvent-day;
	}

	console.log(eventName);
	if (eventName!= " " && eventYear==0){
		selectElement = document.getElementById(eventName);
		selectElement.innerText = `0 years ${monthDifference} months ${dayDifference} days left`;
	}
	else{
		selectElement = document.getElementById(eventName);
		selectElement.innerText = `${yearDifference} years ${monthDifference} months ${dayDifference} days left`;
	}
}

//essential function calls
getDate();
getTime();
setInterval(getTime, 1000);

//Big Events Function Calls
/*Halley's Comet*/ yearlyEventCountdown(21, 7, 2061, "eventTimeText1", "Don't miss the sky, Tonight!");

//Yearly Function Calls
/*Mario's Birthday*/ yearlyEventCountdown(10, 3, 0, "eventTimeText2", "Happy Birthday Mario!!");
/*Longest Day*/ yearlyEventCountdown(21, 6, 0, "eventTimeText3", "What! Why is it not Night yet?");
/*Longest Night*/ yearlyEventCountdown(21, 12, 0, "eventTimeText4", "The day of Darkness is here");