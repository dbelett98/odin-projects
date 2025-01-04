
  const container = document.getElementById('container');
  let gridSize = 16; // Default grid size


  function createGrid(size) {
    container.innerHTML = '';
    const squareSize = 960 / size;
  
    for (let i = 0; i < size * size; i++) {
      const square = document.createElement('div');
      square.classList.add('grid-square');
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;
  
      // Add hover effect
      square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
      });
  
      container.appendChild(square);
    }
  }
  
  
  const resetButton = document.getElementById('reset-button');

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

