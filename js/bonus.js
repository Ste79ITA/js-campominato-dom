// ELEMENTI DEL DOM
const giocaBtnDOMElement = document.querySelector('.play-btn');
const gridDOMElement = document.querySelector('.grid');

const difficultySelectorDOMElement = document.querySelector('.difficulty');

// Inizializzo funzione Play
function play() {
  // pulisco innerHTML dell'elemento
  gridDOMElement.innerHTML = '';

  //  in base alla dificcoltà selezionata cambiano i valori della cella
  let grid = 0;
  let difficulty = '';

  if (difficultySelectorDOMElement.value == 1) {
    grid = 100;
    difficulty = 'easy';
  } else if (difficultySelectorDOMElement.value == 2) {
    grid = 81;
    difficulty = 'regular';
  } else if (difficultySelectorDOMElement.value == 3) {
    grid = 49;
    difficulty = 'hard';
  } else {
    alert('Scegli un livello di difficoltà');
  }

  //   Popolo Grid con 100 div contententi la cella
  for (let i = 0; i < grid; i++) {
    const n = i + 1;
    const cellHtml = `<div class="cell ${difficulty}">${n}</div>`;
    gridDOMElement.innerHTML += cellHtml;
  }
  //   creo un array contenente tutte le celle
  let cellDOMElement = document.querySelectorAll('.cell');

  //   per ogni cella assegno un event listener
  for (let i = 0; i < cellDOMElement.length; i++) {
    let n = i + 1;
    let currentCellDOMElement = cellDOMElement[i];

    currentCellDOMElement.addEventListener('click', function () {
      console.log(`Questa è la casella ${n}`);
      currentCellDOMElement.classList.add('selected');
    });
  }
}

giocaBtnDOMElement.addEventListener('click', play);
