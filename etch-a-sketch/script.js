const container = document.getElementById('container');
const resetButton = document.getElementById('reset-button');
let gridSize = 16; // Default grid size

function createGrid(size) {
  container.innerHTML = '';
  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.setAttribute('data-darken', '0');

    // Hover effect with random color and darkening
    square.addEventListener('mouseover', () => {
      let currentDarken = parseFloat(square.getAttribute('data-darken'));
      if (currentDarken < 1) {
        currentDarken += 0.1;
        square.setAttribute('data-darken', currentDarken);

        // Get or set the base color
        let baseColor = square.getAttribute('data-base-color');
        if (!baseColor) {
          baseColor = getRandomRGB();
          square.setAttribute('data-base-color', baseColor);
        }

        // Apply darkening effect
        square.style.backgroundColor = shadeColor(baseColor, currentDarken * -100);
      }
    });

    container.appendChild(square);
  }
}
// Random color
function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
// Function to darken color
function shadeColor(color, percent) {
  const f = color.slice(4, -1).split(',').map(Number);
  const t = 0;
  const R = Math.round(f[0] * (100 + percent) / 100);
  const G = Math.round(f[1] * (100 + percent) / 100);
  const B = Math.round(f[2] * (100 + percent) / 100);
  return `rgb(${R}, ${G}, ${B})`;
}

resetButton.addEventListener('click', () => {
  let newSize = prompt('Enter new grid size (max 100):');
  if (newSize !== null) {
    newSize = parseInt(newSize);
    if (newSize > 0 && newSize <= 100) {
      gridSize = newSize;
      createGrid(gridSize);
    } else {
      alert('Please enter a number between 1 and 100.');
    }
  }
});

createGrid(gridSize);
