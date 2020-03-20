let h2 = document.querySelector('h2');
let btn = document.querySelector('button');
let boxes = document.getElementsByClassName('box');
let currentPlayer;
let container = document.querySelector('.container');
let gameEnded = false;

let playerOne = {
	token: 'x',
	name: 'player one'
};

let playerTwo = {
	token: 'o',
	name: 'player two'
};

h2.style.display = 'none';

btn.addEventListener('click', function() {
	startGame();
});

for (let i = 0; i < boxes.length; i++) {
	boxes[i].classList.add('no-hover');
}

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

// functie om op elke box een mouseenter event te zetten om de styling te beheersen
function makeMouseEnterEvent() {
	for (let i = 0; i < boxes.length; i++) {
		boxes[i].addEventListener('mouseenter', function() {
			checkBoxToken();
		});
	}
}

// functie om op elke box een mouseleave event te zetten om de styling te beheersen
function makeMouseLeaveEvent() {
	for (let i = 0; i < boxes.length; i++) {
		boxes[i].addEventListener('mouseleave', function() {
			leaveBox();
		});
	}
}

// functie om op elke box een click event te zetten om per speler het token te kunnen zetten
function makeClickEventToSetToken() {
	for (let i = 0; i < boxes.length; i++) {
		boxes[i].addEventListener('click', function() {
			setToken();
		});
	}
}

makeMouseEnterEvent();
makeMouseLeaveEvent();
makeClickEventToSetToken();

function checkBoxToken() {
	if (event.target.innerHTML === '') {
		event.target.innerHTML = currentPlayer.token;
		event.target.style.color = 'black';
	}
}

function leaveBox() {
	if (event.target.style.color === 'black') {
		event.target.innerHTML = '';
	}
}

function setToken() {
	let element = event.target;
	if (element.style.color === 'black') {
		element.innerHTML = currentPlayer.token;
		checkWinner();
		if (!gameEnded) {
			element.style.color = 'white';
			element.classList.remove('hover');
			element.classList.add('no-hover');
			currentPlayer === playerOne ? (currentPlayer = playerTwo) : (currentPlayer = playerOne);
			h2.innerHTML = currentPlayer.name;
		} else {
			for (let i = 0; i < boxes.length; i++) {
				boxes[i].classList.add('no-hover');
			}
		}
	}
}

function checkWinner() {
	if (
		boxes[0].innerHTML === currentPlayer.token &&
		boxes[1].innerHTML === currentPlayer.token &&
		boxes[2].innerHTML === currentPlayer.token
	) {
		boxes[0].classList.add('whenWon');
		boxes[0].style.color = 'black';
		boxes[1].classList.add('whenWon');
		boxes[1].style.color = 'black';
		boxes[2].classList.add('whenWon');
		// voor mij onverklaarbare bug: als op 'black' zet, dan verdwijnt currentPlayer.token. Daarom #000001 van gemaakt
		boxes[2].style.color = '#000001';
		h2.innerHTML = `${currentPlayer.name} wins!`;
		gameEnded = true;
	} else if (
		boxes[3].innerHTML === currentPlayer.token &&
		boxes[4].innerHTML === currentPlayer.token &&
		boxes[5].innerHTML === currentPlayer.token
	) {
		boxes[3].classList.add('whenWon');
		boxes[3].style.color = 'black';
		boxes[4].classList.add('whenWon');
		boxes[4].style.color = 'black';
		boxes[5].classList.add('whenWon');
		boxes[5].style.color = '#000001';
		h2.innerHTML = `${currentPlayer.name} wins!`;
		gameEnded = true;
	} else if (
		boxes[6].innerHTML === currentPlayer.token &&
		boxes[7].innerHTML === currentPlayer.token &&
		boxes[8].innerHTML === currentPlayer.token
	) {
		boxes[6].classList.add('whenWon');
		boxes[6].style.color = 'black';
		boxes[7].classList.add('whenWon');
		boxes[7].style.color = 'black';
		boxes[8].classList.add('whenWon');
		boxes[8].style.color = '#000001';
		h2.innerHTML = `${currentPlayer.name} wins!`;
		gameEnded = true;
	} else if (
		boxes[0].innerHTML === currentPlayer.token &&
		boxes[3].innerHTML === currentPlayer.token &&
		boxes[6].innerHTML === currentPlayer.token
	) {
		boxes[0].classList.add('whenWon');
		boxes[0].style.color = 'black';
		boxes[3].classList.add('whenWon');
		boxes[3].style.color = 'black';
		boxes[6].classList.add('whenWon');
		boxes[6].style.color = '#000001';
		h2.innerHTML = `${currentPlayer.name} wins!`;
		gameEnded = true;
	} else if (
		boxes[1].innerHTML === currentPlayer.token &&
		boxes[4].innerHTML === currentPlayer.token &&
		boxes[7].innerHTML === currentPlayer.token
	) {
		boxes[1].classList.add('whenWon');
		boxes[1].style.color = 'black';
		boxes[4].classList.add('whenWon');
		boxes[4].style.color = 'black';
		boxes[7].classList.add('whenWon');
		boxes[7].style.color = '#000001';
		h2.innerHTML = `${currentPlayer.name} wins!`;
		gameEnded = true;
	} else if (
		boxes[2].innerHTML === currentPlayer.token &&
		boxes[5].innerHTML === currentPlayer.token &&
		boxes[8].innerHTML === currentPlayer.token
	) {
		boxes[2].classList.add('whenWon');
		boxes[2].style.color = 'black';
		boxes[5].classList.add('whenWon');
		boxes[5].style.color = 'black';
		boxes[8].classList.add('whenWon');
		boxes[8].style.color = '#000001';
		h2.innerHTML = `${currentPlayer.name} wins!`;
		gameEnded = true;
	} else if (
		boxes[0].innerHTML === currentPlayer.token &&
		boxes[4].innerHTML === currentPlayer.token &&
		boxes[8].innerHTML === currentPlayer.token
	) {
		boxes[0].classList.add('whenWon');
		boxes[0].style.color = 'black';
		boxes[4].classList.add('whenWon');
		boxes[4].style.color = 'black';
		boxes[8].classList.add('whenWon');
		boxes[8].style.color = '#000001';
		h2.innerHTML = `${currentPlayer.name} wins!`;
		gameEnded = true;
	} else if (
		boxes[2].innerHTML === currentPlayer.token &&
		boxes[4].innerHTML === currentPlayer.token &&
		boxes[6].innerHTML === currentPlayer.token
	) {
		boxes[2].classList.add('whenWon');
		boxes[2].style.color = 'black';
		boxes[4].classList.add('whenWon');
		boxes[4].style.color = 'black';
		boxes[6].classList.add('whenWon');
		boxes[6].style.color = '#000001';
		h2.innerHTML = `${currentPlayer.name} wins!`;
		gameEnded = true;
	}
}
