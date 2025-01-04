
  const container = document.getElementById('container');
  let gridSize = 16; // Default grid size

  function createGrid(size) { //function to create a grid with specified number of squares per side
    container.innerHTML = '';  // Clear container before generating new grid
    const squareSize = 960 / size; // Calculate the size of each square

    // Create the squares
    for (let i = 0; i < size * size; i++) {
      const square = document.createElement('div');
      square.classList.add('grid-square');
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;
      container.appendChild(square);
    }
  }

  createGrid(gridSize);

