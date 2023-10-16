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
    const cellHtml = `<div class="cell hard">${n}</div>`;
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
