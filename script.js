const container = document.querySelector('.container');

function createGrid(size = 16) {
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      const square = document.createElement('div');
      square.classList.add('square');
      
      square.addEventListener('mouseenter', () => {
        square.classList.add('hovered');
      })
      square.addEventListener('mouseleave', () => {
        square.classList.remove('hovered');
      })

      container.appendChild(square);
    }
  }
}

createGrid();