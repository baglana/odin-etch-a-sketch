const container = document.querySelector('.container');

addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#grid-size-btn');
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
      square.classList.add('hovered');
    })

    container.appendChild(square);
  }
}

createGrid();