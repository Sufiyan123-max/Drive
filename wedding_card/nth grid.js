let gridSize = 0;
let activeCell = { row: 0, col: 0 };

function createGrid() {
    const container = document.getElementById('gridContainer');
    container.innerHTML = ''; // Clear previous grid
    gridSize = parseInt(document.getElementById('gridSize').value);
    
    if (isNaN(gridSize) || gridSize <= 0) {
        alert('Please enter a valid number');
        return;
    }

    container.style.gridTemplateColumns = `repeat(${gridSize}, 50px)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 50px)`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement('div');
        div.className = 'gridItem';
        if (i === 0) div.classList.add('active'); // Initially mark the first cell as active
        container.appendChild(div);
    }

    activeCell = { row: 0, col: 0 }; // Reset active cell
    document.getElementById('buttons').style.display = 'block';
}

function move(direction) {
    const container = document.getElementById('gridContainer');
    const items = Array.from(container.getElementsByClassName('gridItem'));
    const message = document.getElementById('message');
    message.innerText = '';

    const index = (activeCell.row * gridSize) + activeCell.col;
    let newIndex;

    if (direction === 'left') {
        if (activeCell.col > 0) {
            activeCell.col -= 1;
            newIndex = (activeCell.row * gridSize) + activeCell.col;
        } else {
            message.innerText = 'Left direction space is not available';
            return;
        }
    } else if (direction === 'right') {
        if (activeCell.col < gridSize - 1) {
            activeCell.col += 1;
            newIndex = (activeCell.row * gridSize) + activeCell.col;
        } else {
            message.innerText = 'Right direction space is not available';
            return;
        }
    } else if (direction === 'up') {
        if (activeCell.row > 0) {
            activeCell.row -= 1;
            newIndex = (activeCell.row * gridSize) + activeCell.col;
        } else {
            message.innerText = 'Up direction space is not available';
            return;
        }
    } else if (direction === 'down') {
        if (activeCell.row < gridSize - 1) {
            activeCell.row += 1;
            newIndex = (activeCell.row * gridSize) + activeCell.col;
        } else {
            message.innerText = 'Down direction space is not available';
            return;
        }
    }

    items[index].classList.remove('active');
    items[newIndex].classList.add('active');
}
