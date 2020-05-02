// variables
let out = document.querySelector('.out');
function print(argument) {
	out.innerHTML = 'result : ' + argument;
}
// functions
function userAge() {
	let ageUser = prompt('Enter your age	', 0);
	switch (true) {
		case (isNaN(ageUser)):
			print(`Not a Namber: ${ageUser}`);
			break;
		case (ageUser <= 2 && ageUser >= 0):
			print("ребенок");
			break;
		case (ageUser <= 12 && ageUser >= 2):
			print("ребенок-подросток");
			break;
		case (ageUser <= 18 && ageUser >= 12):
			print("подросток");
			break;
		case (ageUser <= 60 && ageUser >= 18):
			print("взрослый");
			break;
		case (ageUser <= 120 && ageUser >= 60):
			print("пенсионер");
			break;
		default:
			print("люди столько не живут");
	}

}
function hotKey() {
	let keyNumber = prompt('Enter key number	', 0);
	switch (true) {
		case (isNaN(keyNumber)):
			print(`Not a Namber: ${keyNumber}`);
			break;
		case (keyNumber == 1):
			print(`1 = !`);
			break;
		case (keyNumber == 2):
			print(`2 = @`);
			break;
		case (keyNumber == 3):
			print(`3 = # `);
			break;
		case (keyNumber == 4):
			print(`4 = $ `);
			break;
		case (keyNumber == 5):
			print(`5 = % `);
			break;
		case (keyNumber == 6):
			print(`6 = ^ `);
			break;
		case (keyNumber == 7):
			print(`7 = & `);
			break;
		case (keyNumber == 8):
			print(`8 = * `);
			break;
		case (keyNumber == 9):
			print(`9 = (`);
			break;
		case (keyNumber == 0):
			print(`0 = )`);
			break;
		default:
			print("");
	}
}
function duplicateItem() {
	let myArray = prompt()

	print(`на входе ${myArray}`);

	if (hasDuplicates(myArray)) {
		print('УРА ЕСТЬ ДУБЛИ');
	} else {
		print('НЕ дубля');
	}

	function hasDuplicates(array) {
		let valuesSoFar = [];

		for (let t = 0; t < array.length; ++t) {
			let value = array[t];

			if (valuesSoFar.indexOf(value) !== -1) return true;
			valuesSoFar.push(value);
		}
		return false;
	}
}

function leapYear() {
	let userYear = prompt('Enter Year - i will check or your year leap', 1970);
	function leapYear(year) {
		return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
	}
	if (leapYear(userYear)) {
		print('Leap year');
	} else {
		print('Not leap year');
	}
}
function userPalindrom() {
	let Palindrom = prompt('Enter array word or number', 12344321);
	function checkPalindrom(str) {
		return str == str.split('').reverse().join('');
	};
	if (checkPalindrom(Palindrom)) {
		print('yes , this is Palindrom');
	} else {
		print('no , this is not Palindrom');
	}
}
function currencyConverter() {
	let course = {
		'UAH': 1,
		'EUR': 29.70,
		'USD': 26.77,
	}
	let adress = document.forms[0];
	let inputValue = adress.getElementsByTagName("input")[0].value;
	let mylist = document.getElementById("curency-selector");
	let optionValue = mylist.options[mylist.selectedIndex].value;
	switch (true) {
		case (optionValue == 1):
			print(inputValue * course.UAH);
			break;
		case (optionValue == 2):
			print(inputValue * course.EUR);
			break;
		case (optionValue == 3):
			print(inputValue * course.USD);
			break;
		default:
			print("Error");
	}
}
function discountСalculation() {
	let discaunt = prompt('Enter purchase amount', 0);
	switch (true) {
		case (discaunt == 0):
			print('Enter purchase amount ');
			break;
		case (discaunt < 200):
			print(discaunt);
			break;
		case (discaunt >= 200 && discaunt <= 300):
			print(discaunt - discaunt * 0.03);
			break;
		case (discaunt >= 301 && discaunt <= 500):
			print(discaunt - discaunt * 0.05);
			break;
		case (discaunt >= 501):
			print(discaunt - discaunt * 0.07);
			break;
		default:
			print("Error");
	}
}
function dateUser() {
	function addNullTime(argument) {
		if (argument < 10) return `0${argument}`;
		return argument;
	}
	function сurrentTimeHourMinutesDate(currentDateNow) {
		let timeDate = `${addNullTime(currentDateNow.getHours())}:${addNullTime(currentDateNow.getMinutes())}:${addNullTime(currentDateNow.getSeconds())} ${addNullTime(currentDateNow.getDate() + 1)}.${addNullTime(currentDateNow.getMonth() + 1)}.${addNullTime(currentDateNow.getFullYear())}`
		return timeDate;
	}
	let currentDateNow = new Date();
	let hourNew = сurrentTimeHourMinutesDate(currentDateNow);
	print(hourNew);
}
