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
	token: 'x',
	name: 'player one'
};

let playerTwo = {
	token: 'o',
	name: 'player two'
};

let draw;
let gameEnded = false;

// -------------------- einde variabelen-------------------

h2.style.display = 'none';

for (let i = 0; i < boxes.length; i++) {
	boxes[i].classList.add('no-hover');
}

btn.addEventListener('click', function() {
	startGame();
});

function startGame() {
	draw = 0;
	currentPlayer = playerOne;
	h2.innerHTML = currentPlayer.name;

	// voor het verdwijnen en weer verschijnen van het spelbord
	container.classList.add('small');
	setTimeout(function() {
		container.classList.remove('small');
		h2.style.display = 'block';
		btn.style.display = 'none';
		for (let i = 0; i < boxes.length; i++) {
			boxes[i].innerHTML = '';
			boxes[i].classList.add('hover');
			boxes[i].classList.remove('start');
			boxes[i].classList.remove('no-hover');
			boxes[i].classList.remove('whenWon');
		}
	}, 1400);
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
	}
	draw++;
	console.log('draw =', draw);

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
		setTimeout(function() {
			h2.style.display = 'none';
			btn.innerHTML = 'AGAIN?';
			btn.style.display = 'block';
		}, 2000);
		gameEnded = false;
	}
	if (draw === 9) {
		h2.style.display = 'block';
		h2.innerText = 'DRAW!!';
		console.log(h2.innerText);
		for (let i = 0; i < boxes.length; i++) {
			boxes[i].classList.add('no-hover');
		}
		setTimeout(function() {
			h2.style.display = 'none';
			btn.innerHTML = 'AGAIN?';
			btn.style.display = 'block';
		}, 2000);
		gameEnded = false;
	}
}

function checkWinner() {
	//winst bovenste horizontale rij
	if (
		box1.innerHTML === currentPlayer.token &&
		box2.innerHTML === currentPlayer.token &&
		box3.innerHTML === currentPlayer.token
	) {
		box1.classList.add('whenWon');
		box1.style.color = '#000001';
		box2.classList.add('whenWon');
		box2.style.color = '#000001';
		box3.classList.add('whenWon');
		// voor mij onverklaarbare bug: als op 'black' zet, dan verdwijnt currentPlayer.token. Daarom #000001 van gemaakt en bij rest ook
		box3.style.color = '#000001';
		h2.innerHTML = `${currentPlayer.name} wins!`;
		gameEnded = true;

		//winst middelste horizontale rij
	} else if (
		box4.innerHTML === currentPlayer.token &&
		box5.innerHTML === currentPlayer.token &&
		box6.innerHTML === currentPlayer.token
	) {
		box4.classList.add('whenWon');
		box4.style.color = '#000001';
		box5.classList.add('whenWon');
		box5.style.color = '#000001';
		box6.classList.add('whenWon');
		box6.style.color = '#000001';
		h2.innerHTML = `${currentPlayer.name} wins!`;
		gameEnded = true;

		//winst onderste horizontale rij
	} else if (
		box7.innerHTML === currentPlayer.token &&
		box8.innerHTML === currentPlayer.token &&
		box9.innerHTML === currentPlayer.token
	) {
		box7.classList.add('whenWon');
		box7.style.color = '#000001';
		box8.classList.add('whenWon');
		box8.style.color = '#000001';
		box9.classList.add('whenWon');
		box9.style.color = '#000001';
		h2.innerHTML = `${currentPlayer.name} wins!`;
		gameEnded = true;
		//winst linkse verticale rij
	} else if (
		box1.innerHTML === currentPlayer.token &&
		box4.innerHTML === currentPlayer.token &&
		box7.innerHTML === currentPlayer.token
	) {
		box1.classList.add('whenWon');
		box1.style.color = '#000001';
		box4.classList.add('whenWon');
		box4.style.color = '#000001';
		box7.classList.add('whenWon');
		box7.style.color = '#000001';
		h2.innerHTML = `${currentPlayer.name} wins!`;
		gameEnded = true;
		//winst middelste verticale rij
	} else if (
		box2.innerHTML === currentPlayer.token &&
		box5.innerHTML === currentPlayer.token &&
		box8.innerHTML === currentPlayer.token
	) {
		box2.classList.add('whenWon');
		box2.style.color = '#000001';
		box5.classList.add('whenWon');
		box5.style.color = '#000001';
		box8.classList.add('whenWon');
		box8.style.color = '#000001';
		h2.innerHTML = `${currentPlayer.name} wins!`;
		gameEnded = true;
		//winst rechtse verticale rij
	} else if (
		box3.innerHTML === currentPlayer.token &&
		box6.innerHTML === currentPlayer.token &&
		box9.innerHTML === currentPlayer.token
	) {
		box3.classList.add('whenWon');
		box3.style.color = '#000001';
		box6.classList.add('whenWon');
		box6.style.color = '#000001';
		box9.classList.add('whenWon');
		box9.style.color = '#000001';
		h2.innerHTML = `${currentPlayer.name} wins!`;
		gameEnded = true;
		//winst diagonale rij vanaf links
	} else if (
		box1.innerHTML === currentPlayer.token &&
		box5.innerHTML === currentPlayer.token &&
		box9.innerHTML === currentPlayer.token
	) {
		box1.classList.add('whenWon');
		box1.style.color = '#000001';
		box5.classList.add('whenWon');
		box5.style.color = '#000001';
		box9.classList.add('whenWon');
		box9.style.color = '#000001';
		h2.innerHTML = `${currentPlayer.name} wins!`;
		gameEnded = true;
		//winst diagonale rij vanaf rechts
	} else if (
		box3.innerHTML === currentPlayer.token &&
		box5.innerHTML === currentPlayer.token &&
		box7.innerHTML === currentPlayer.token
	) {
		box3.classList.add('whenWon');
		box3.style.color = '#000001';
		box5.classList.add('whenWon');
		box5.style.color = '#000001';
		box7.classList.add('whenWon');
		box7.style.color = '#000001';
		h2.innerHTML = `${currentPlayer.name} wins!`;
		gameEnded = true;
	}
}
