let h2 = document.querySelector('h2');
let btn = document.querySelector('button');
let container = document.querySelector('.container');

let boxes = document.getElementsByClassName('box');

let box1 = boxes[0];
let box2 = boxes[1];
let box3 = boxes[2];
let box4 = boxes[3];
let box5 = boxes[4];
let box6 = boxes[5];
let box7 = boxes[6];
let box8 = boxes[7];
let box9 = boxes[8];

let currentPlayer;

let playerOne = {
	token: 'X',
	name: 'player one'
};

let playerTwo = {
	token: 'O',
	name: 'player two'
};

let draw;
let gameEnded = false;

// einde variabelen, opmaak startscherm

h2.style.display = 'none';

for (let i = 0; i < boxes.length; i++) {
	boxes[i].classList.add('no-hover');
}

btn.addEventListener('click', function() {
	startGame();
});

// functie om spel te (her)starten

function startGame() {
	gameEnded = false;
	draw = 0;
	currentPlayer = playerOne;
	h2.innerText = currentPlayer.name;

	// zorgt voor verdwijnen van spelbord naar achtergrond en weer verschijnen
	container.classList.add('rotate');
	setTimeout(function() {
		container.classList.remove('rotate');
		h2.style.display = 'block';
		btn.style.display = 'none';
		for (let i = 0; i < boxes.length; i++) {
			boxes[i].innerText = '';
			boxes[i].classList.add('hover');
			boxes[i].classList.remove('start');
			boxes[i].classList.remove('no-hover');
			boxes[i].classList.remove('when-won');
		}
	}, 1500);
}

// functie om op elke box een mouseenter event te zetten om de styling te beheersen
function makeMouseEnterEvent() {
	for (let i = 0; i < boxes.length; i++) {
		boxes[i].addEventListener('mouseenter', function() {
			checkBoxToken();
		});
	}
}

function checkBoxToken() {
	if (event.target.innerText === '') {
		event.target.innerText = currentPlayer.token;
		event.target.style.color = 'black';
	}
}

makeClickEventToSetToken();

// functie om op elke box een mouseleave event te zetten om de styling te beheersen
function makeMouseLeaveEvent() {
	for (let i = 0; i < boxes.length; i++) {
		boxes[i].addEventListener('mouseleave', function() {
			leaveBox();
		});
	}
}

function leaveBox() {
	if (event.target.style.color === 'black') {
		event.target.innerText = '';
	}
}

makeMouseLeaveEvent();

// functie om op elke box een click event te zetten om per speler zijn token te kunnen zetten
function makeClickEventToSetToken() {
	for (let i = 0; i < boxes.length; i++) {
		boxes[i].addEventListener('click', function() {
			setToken();
		});
	}
}

function setToken() {
	let element = event.target;
	if (element.style.color === 'black') {
		element.innerText = currentPlayer.token;
	}
	draw++;

	checkWinner();
	if (!gameEnded) {
		element.style.color = 'white';
		element.classList.remove('hover');
		element.classList.add('no-hover');
		console.log(element.innerText);
		console.log(currentPlayer.token);
		currentPlayer === playerOne ? (currentPlayer = playerTwo) : (currentPlayer = playerOne);
		h2.innerText = currentPlayer.name;
	} else if (gameEnded) {
		for (let i = 0; i < boxes.length; i++) {
			boxes[i].classList.add('no-hover');
		}
		setTimeout(function() {
			h2.style.display = 'none';
			btn.innerText = 'AGAIN';
			btn.style.display = 'block';
		}, 2000);
	}

	if (draw === 9 && !gameEnded) {
		h2.innerText = 'DRAW!!';
		for (let i = 0; i < boxes.length; i++) {
			boxes[i].classList.add('no-hover');
		}
		setTimeout(function() {
			h2.style.display = 'none';
			btn.innerText = 'AGAIN';
			btn.style.display = 'block';
		}, 2000);
		gameEnded = false;
	}
}

makeMouseEnterEvent();

function winningLine(firstBox, secondBox, thirdBox) {
	firstBox.classList.add('when-won');
	firstBox.style.color = '#000001';
	secondBox.classList.add('when-won');
	secondBox.style.color = '#000001';
	thirdBox.classList.add('when-won');
	// voor mij onverklaarbare bug: als op 'black' zet, dan verdwijnt currentPlayer.token. Daarom #000001 van gemaakt en bij rest ook
	thirdBox.style.color = '#000001';
	h2.innerText = `${currentPlayer.name} wins!`;
	gameEnded = true;
}
function checkWinner() {
	//winst bovenste horizontale rij
	if (
		box1.innerText === currentPlayer.token &&
		box2.innerText === currentPlayer.token &&
		box3.innerText === currentPlayer.token
	) {
		winningLine(box1, box2, box3);

		//winst middelste horizontale rij
	} else if (
		box4.innerText === currentPlayer.token &&
		box5.innerText === currentPlayer.token &&
		box6.innerText === currentPlayer.token
	) {
		winningLine(box4, box5, box6);

		//winst onderste horizontale rij
	} else if (
		box7.innerText === currentPlayer.token &&
		box8.innerText === currentPlayer.token &&
		box9.innerText === currentPlayer.token
	) {
		winningLine(box7, box8, box9);

		//winst linkse verticale rij
	} else if (
		box1.innerText === currentPlayer.token &&
		box4.innerText === currentPlayer.token &&
		box7.innerText === currentPlayer.token
	) {
		winningLine(box1, box4, box7);

		//winst middelste verticale rij
	} else if (
		box2.innerText === currentPlayer.token &&
		box5.innerText === currentPlayer.token &&
		box8.innerText === currentPlayer.token
	) {
		winningLine(box2, box5, box8);

		//winst rechtse verticale rij
	} else if (
		box3.innerText === currentPlayer.token &&
		box6.innerText === currentPlayer.token &&
		box9.innerText === currentPlayer.token
	) {
		winningLine(box3, box6, box9);
		//winst diagonale rij vanaf links
	} else if (
		box1.innerText === currentPlayer.token &&
		box5.innerText === currentPlayer.token &&
		box9.innerText === currentPlayer.token
	) {
		winningLine(box1, box5, box9);
		//winst diagonale rij vanaf rechts
	} else if (
		box3.innerText === currentPlayer.token &&
		box5.innerText === currentPlayer.token &&
		box7.innerText === currentPlayer.token
	) {
		winningLine(box3, box5, box7);
	}
}
