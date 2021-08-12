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
	var leapYear = (year%4===0) ? true : false;

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

	halleyCometCoutdown(day, month, year, leapYear);
	marioBirthdayCountdown(day, month, year, leapYear);
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

function halleyCometCoutdown(day, month, year, leapYear){
	let cometTimeDay = 28;
	let cometTimeMonth = 7;
	let cometTimeYear = 2061;

	if(cometTimeMonth<month && cometTimeDay>=day){
		yearDifference = cometTimeYear-year-1;
		monthDifference = 12+(cometTimeMonth-month);
		dayDifference = cometTimeDay-day;
		mario = document.getElementById("halleyTimeText");
		mario.innerText = `${yearDifference} years ${monthDifference} months ${dayDifference} days left`;
	}
	else if(cometTimeMonth<month && cometTimeDay<day){
		yearDifference = cometTimeYear-year-1;
		monthDifference = 12+(cometTimeMonth-month);
		if(leapYear)
			dayDifference = 31+(cometTimeDay-day);
		else
			dayDifference = 30+(cometTimeDay-day);
		mario = document.getElementById("halleyTimeText");
		mario.innerText = `${yearDifference} years ${monthDifference} months ${dayDifference} days left`;
	}
	else if(cometTimeMonth>=month && cometTimeDay<day){
		if (cometTimeMonth-month==0){
			cometTimeYear = cometTimeYear+76;
			monthDifference = 0;
		}
		else
			monthDifference = cometTimeMonth-month;
		if(leapYear)
			dayDifference = 31+(cometTimeDay-day);
		else
			dayDifference = 30+(cometTimeDay-day);
		mario = document.getElementById("halleyTimeText");
		mario.innerText = `${yearDifference} years ${monthDifference} months ${dayDifference} days left`;
	}
	else if(cometTimeMonth==month && cometTimeDay==day){
		mario = document.getElementById("halleyTimeText");
		mario.innerText = `Don't miss the Comet tonight!!`;
	}
	else{
		monthDifference = cometTimeMonth-month;
		dayDifference = cometTimeDay-day;
		mario = document.getElementById("halleyTimeText");
		mario.innerText = `${yearDifference} years ${monthDifference} months ${dayDifference} days left`;
	}
}

function marioBirthdayCountdown(day, month, year, leapYear){
	let marioBirthDay = 10;
	let marioBirthMonth = 3;
	let yearDifference = 0;


	if(marioBirthMonth<month && marioBirthDay>=day){
		monthDifference = 12+(marioBirthMonth-month);
		dayDifference = marioBirthDay-day;
		mario = document.getElementById("marioTimeText");
		mario.innerText = `${yearDifference} years ${monthDifference} months ${dayDifference} days left`;
	}
	else if(marioBirthMonth<month && marioBirthDay<day){
		monthDifference = 11+(marioBirthMonth-month);
		if(leapYear)
			dayDifference = 29+(marioBirthDay-day);
		else
			dayDifference = 28+(marioBirthDay-day);
		mario = document.getElementById("marioTimeText");
		mario.innerText = `${yearDifference} years ${monthDifference} months ${dayDifference} days left`;
	}
	else if(marioBirthMonth>=month && marioBirthDay<day){
		monthDifference = (marioBirthMonth-month==0) ? 11 : (marioBirthMonth-month);
		if(leapYear)
			dayDifference = 29+(marioBirthDay-day);
		else
			dayDifference = 28+(marioBirthDay-day);
		mario = document.getElementById("marioTimeText");
		mario.innerText = `${yearDifference} years ${monthDifference} months ${dayDifference} days left`;
	}
	else if(marioBirthMonth==month && marioBirthDay==day){
		mario = document.getElementById("marioTimeText");
		mario.innerText = `HAPPY BIRTHDAY MARIO!!`;
	}
	else{
		monthDifference = marioBirthMonth-month;
		dayDifference = marioBirthDay-day;
		mario = document.getElementById("marioTimeText");
		mario.innerText = `${yearDifference} years ${monthDifference} months ${dayDifference} days left`;
	}
}

getDate();
getTime();
setInterval(getTime, 1000);