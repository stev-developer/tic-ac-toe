const board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

function checkWinner() {
    for (let i = 0; i < winPatterns.length; i++) {
        const [a, b, c] = winPatterns[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            return board[a];
        }
    }
    if (!board.includes('')) {
        gameActive = false;
        return 'draw';
    }
    return null;
}

function placeMarker(cell) {
    if (gameActive && board[cell] === '') {
        board[cell] = currentPlayer;
        document.getElementById('status').textContent = `Player ${currentPlayer}'s turn`;
        document.getElementById('board').children[cell].textContent = currentPlayer;
        const winner = checkWinner();
        if (winner) {
            if (winner === 'draw') {
                document.getElementById('status').textContent = "It's a draw!";
            } else {
                document.getElementById('status').textContent = `Player ${winner} wins!`;
            }
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function resetGame() {
    board.fill('');
    currentPlayer = 'X';
    gameActive = true;
    document.getElementById('status').textContent = `Player ${currentPlayer}'s turn`;
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
    }
}

document.getElementById('status').textContent = `Player ${currentPlayer}'s turn`;

