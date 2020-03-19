let h2 = document.querySelector('h2');
let btn = document.querySelector('button');
let boxes = document.getElementsByClassName('box');
let currentPlayer;
let container = document.querySelector('.container');

let playerOne = {
	token: 'x'
};

let playerTwo = {
	token: 'o'
};

h2.style.display = 'none';

btn.addEventListener('click', function() {
	startGame();
});

function startGame() {
	container.classList.add('small');
	setTimeout(function() {
		container.classList.remove('small');
		h2.style.display = 'block';
		btn.style.display = 'none';
		for (let i = 0; i < boxes.length; i++) {
			boxes[i].innerHTML = '';
			boxes[i].classList.remove('start');
			boxes[i].classList.remove('no-hover');
		}
	}, 1400);
	currentPlayer = playerOne;
}

function makeMouseEnterEvent() {
	for (let i = 0; i < boxes.length; i++) {
		boxes[i].addEventListener('mouseenter', function() {
			checkBoxToken();
		});
	}
}

function makeMouseLeaveEvent() {
	for (let i = 0; i < boxes.length; i++) {
		boxes[i].addEventListener('mouseleave', function() {
			leaveBox();
		});
	}
}

function addClickEventSetToken() {
	for (let i = 0; i < boxes.length; i++) {
		boxes[i].addEventListener('click', function() {
			setToken();
		});
	}
}

makeMouseEnterEvent();
makeMouseLeaveEvent();
addClickEventSetToken();

function checkBoxToken() {
	if (event.target.innerHTML === '') {
		// console.log(event.target.style.color);
		event.target.innerHTML = currentPlayer.token;
		event.target.style.color = 'black';
		console.log(event.target.style.color);
	} else {
		return;
	}
}

function leaveBox() {
	if (event.target.style.color === 'black') {
		console.log(event.target.style.color);
		event.target.innerHTML = '';
	} else {
		return;
	}
}

/*als clicked: als inner html = '', innerhtml = currentplayer.token, color: iets minder wit en geen hover effect > no-hover class toepassen
else return; */

function setToken() {
	let element = event.target;
	if (element.style.color === 'black') {
		element.innerHTML = currentPlayer.token;
		element.style.color = '#FFFFFE';
		element.classList.remove('hove');
		element.classList.add('no-hover');
		currentPlayer === playerOne ? (currentPlayer = playerTwo) : (currentPlayer = playerOne);
	} else {
		return;
	}
}

/*

daarna
- beurt is aan playerone
- wanneer hovert over grid, dan moet zijn 'token'(x) te voorschijn komen als vak leeg is (innertext = '')
- classlist voor hover moet toegepast
- wanneer op vakje clickt, dan komt zijn teken te staan
- beurt wisselt naar playertwo

kan currentPlayer en twee playerobjecten maken:

let currentPlayer = {}

let playerOne = {
    token: 'x',
}

let playerTwo = {
    token: 'o',
}
*/

/*

als clicked: als inner html = '', innerhtml = currentplayer.token, color: iets minder wit en geen hover effect > no-hover class toepassen
else return;

bij mouse leave > als color iets minder wit > return


*/
