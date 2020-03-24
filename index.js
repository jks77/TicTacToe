const h2 = document.querySelector('h2');
const btn = document.querySelector('button');
const container = document.querySelector('.container');

const boxes = document.getElementsByClassName('box');

const box1 = boxes[0];
const box2 = boxes[1];
const box3 = boxes[2];
const box4 = boxes[3];
const box5 = boxes[4];
const box6 = boxes[5];
const box7 = boxes[6];
const box8 = boxes[7];
const box9 = boxes[8];

let currentPlayer;

const playerOne = {
	token: 'X',
	name: 'player one'
};

const playerTwo = {
	token: 'O',
	name: 'player two'
};

let draw;
let gameEnded = false;

// ----- einde variabelen, opmaak startscherm ------------

h2.style.display = 'none';

for (let i = 0; i < boxes.length; i++) {
	boxes[i].classList.add('no-hover');
}

btn.addEventListener('click', function() {
	startGame();
});

// ------- functie om spel te (her)starten ----------------

function startGame() {
	gameEnded = false;

	// houdt bij hoe vaak gespeeld is voor checken of het een draw is
	draw = 0;

	currentPlayer = playerOne;
	h2.innerText = currentPlayer.name;

	// zorgt voor roteren van spelbord
	container.classList.add('rotate');

	//  setTimeOuts zijn voor effecten voor startklaar maken bord
	setTimeout(function() {
		for (let i = 0; i < boxes.length; i++) {
			boxes[i].innerText = '';
			boxes[i].classList.add('if-hovered');
			boxes[i].classList.remove('start');
			boxes[i].classList.remove('winning-line');
		}
	}, 1500);

	setTimeout(function() {
		container.classList.remove('rotate');
		h2.style.display = 'block';
		btn.style.display = 'none';
	}, 2000);

	setTimeout(function() {
		for (let i = 0; i < boxes.length; i++) {
			boxes[i].classList.remove('no-hover');
		}
	}, 3100);
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

makeMouseEnterEvent();

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

// functie om op elke box een click event te zetten zodat speler zijn token kan zetten (voor oefenen een for of loop gebruikt)
function makeClickEventToSetToken() {
	for (let box of boxes) {
		box.addEventListener('click', function() {
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

	// zolang spel niet geeindigd is
	if (!gameEnded) {
		element.style.color = 'white';
		element.classList.remove('if-hovered');
		element.classList.add('no-hover');
		currentPlayer === playerOne ? (currentPlayer = playerTwo) : (currentPlayer = playerOne);
		h2.innerText = currentPlayer.name;
	} else if (gameEnded) {
		// als spel geeindigd is door winnaar
		displayAgainButton();
	}

	// als er geen winnaar is maar het bord vol
	if (draw === 9 && !gameEnded) {
		h2.innerText = 'DRAW!!';
		displayAgainButton();
	}
}

// om button met 'again' voo rnieuw spel te maken
function displayAgainButton() {
	for (let box of boxes) {
		box.classList.add('no-hover');
	}
	setTimeout(function() {
		h2.style.display = 'none';
		btn.innerText = 'AGAIN';
		btn.style.display = 'block';
	}, 2000);
	gameEnded = false;
}

makeClickEventToSetToken();

function winningLine(firstBox, secondBox, thirdBox) {
	firstBox.classList.add('winning-line');
	firstBox.style.color = '#000001';
	secondBox.classList.add('winning-line');
	secondBox.style.color = '#000001';
	thirdBox.classList.add('winning-line');
	// voor mij onverklaarbare bug: als op 'black' zet, dan verdwijnt soms currentPlayer.token bij einde spel. Daarom #000001 van gemaakt en bij rest ook
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
