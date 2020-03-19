let h2 = document.querySelector('h2');
let btn = document.querySelector('button');
let boxes = document.getElementsByClassName('box');

let container = document.querySelector('.container');
console.log(container);

h2.style.display = 'none';

btn.addEventListener('click', function() {
	play();
});

function play() {
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
}

/* pseudocode
start:

h2 .style.display = 'none'

van beginscherm naar start van spel

- button moet weg (btn.style.display='none')
- player one moet in beeld (h2.style.display = block)
- begingrid moet leeg tevoorschijn komen

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
