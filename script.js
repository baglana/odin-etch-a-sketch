const grid = document.querySelector('.grid');

addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#new-btn');
  btn.addEventListener('click', () => {
    const selectedSize = prompt(
      'Enter the number of squares per side for the new grid \
      (values greater than 100 will be lowered to 100):',
      16
    );
    if (selectedSize !== null) {
      removeAllChildElements(grid);
      createGrid(+selectedSize);
    }
  });
});

function removeAllChildElements(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function createGrid(size = 16) {
  size = (size > 100) ? 100 : size;
  const squareBrightness = new Array(size * size).fill(1);
  
  for (let i = 1; i <= size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${100 / size}%`;
    
    square.addEventListener('mouseenter', () => {
      // change color on first interaction
      if (squareBrightness[i] === 1) {
        const red = getRandom(0, 256);
        const green = getRandom(0, 256);
        const blue = getRandom(0, 256);
        square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      }

      // decrease brightness by 10% after each interaction
      squareBrightness[i] -= 0.1;
      square.style.filter = `brightness(${squareBrightness[i]})`;
    });

    grid.appendChild(square);
  }
}

function getRandom(from = 0, to = 1) {
  return from + (Math.random() * to);
}

createGrid();