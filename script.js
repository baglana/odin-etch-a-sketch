const container = document.querySelector('.container');

addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#new-btn');
  btn.addEventListener('click', () => {
    const selectedSize = prompt(
      'Enter the number of squares per side for the new grid \
      (values greater than 100 will be lowered to 100):',
      16
    );
    if (selectedSize !== null) {
      removeAllChildElements(container);
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
  for (let i = 1; i <= size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${100 / size}%`;
    
    square.addEventListener('mouseenter', () => {
      const red = getRandom(0, 256);
      const green = getRandom(0, 256);
      const blue = getRandom(0, 256);
      square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });

    container.appendChild(square);
  }
}

function getRandom(from = 0, to = 1) {
  return from + (Math.random() * to);
}

createGrid();