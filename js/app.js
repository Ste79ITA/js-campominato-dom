// ELEMENTI DEL DOM
const giocaBtnDOMElement = document.querySelector('.play-btn');
const gridDOMElement = document.querySelector('.grid');

// Inizializzo funzione Play
function play() {
  // pulisco innerHTML dell'elemento
  gridDOMElement.innerHTML = '';

  //   Popolo Grid con 100 div contententi la cella
  for (let i = 0; i < 100; i++) {
    const n = i + 1;
    const cellHtml = `<div class="cell easy">${n}</div>`;
    gridDOMElement.innerHTML += cellHtml;
  }
  //   creo un array contenente tutte le celle
  let cellDOMElement = document.querySelectorAll('.cell');

  // CREAZIONE DELLE BOMBE
  // creare un array con 16 numeri random tutti diversi tra di loro.
  // inizializzo l'array
  let bombe = [];
  // aggiungo i valori rando all'array fino a raggiungere il numero di 16
  while (bombe.length < 16) {
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    // i valori non si possono ripetere
    if (!bombe.includes(randomNumber)) {
      bombe.push(randomNumber);
      console.log(bombe);
    }
  }
  //   per ogni cella assegno un event listener
  let score = 0;
  for (let i = 0; i < cellDOMElement.length; i++) {
    let n = i + 1;
    let currentCellDOMElement = cellDOMElement[i];

    currentCellDOMElement.addEventListener('click', function () {
      console.log(`Questa è la casella ${n}`);

      if (bombe.includes(n)) {
        currentCellDOMElement.classList.add('bomb');
        setTimeout(function () {
          alert(`QBOOOM, hai perso! Il tuo punteggio è: ${score}`);
        }, 1);
      } else {
        currentCellDOMElement.classList.add('selected');
        score++;
      }
      // VINCITA
      if (score === 100 - bombe.length) {
        alert(`Hai vinto! Il tuo punteggio è: ${score}`);
      }
    });
  }
}

giocaBtnDOMElement.addEventListener('click', play);
