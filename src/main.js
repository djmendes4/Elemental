// Get elements
const startGameButton = document.getElementById('startGameButton');
const gameArea = document.getElementById('gameArea');

// Function to start the game
function startGame() {
    // Hide the start button and show the game area
    startGameButton.style.display = 'none';
    gameArea.style.display = 'block';

    // Placeholder game logic (can be expanded later)
    gameArea.innerHTML = "<h2>Game in Progress!</h2><p>Ready for the challenge?</p>";
}

// Add event listener to start the game
startGameButton.addEventListener('click', startGame);