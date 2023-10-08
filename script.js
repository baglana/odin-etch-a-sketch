const container = document.querySelector('.container');

function createGrid(size = 16) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.textContent = (i + 1) * (j + 1); 
      container.appendChild(square);
    }
  }
}

createGrid();