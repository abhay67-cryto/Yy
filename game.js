let betAmount = 0;
let currentMultiplier = 8;
let gameInterval;

function placeBet() {
    betAmount = document.getElementById('bet-amount').value;
    if (betAmount > 10) {
        alert(`Bet placed: ₹${betAmount}`);
    } else {
        alert("Please enter a valid bet amount.");
    }
}

function startGame() {
    const canvas = document.getElementById('aviator-canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = window.innerWidth * 0.6;
    canvas.height = 400;

    let multiplier = 1;
    let gameRunning = true;

    // Start animation loop
    gameInterval = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Create the animation effect (circle growing and multiplier increasing)
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, multiplier * 10, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 123, 255, 0.5)';
        ctx.fill();
        
        multiplier += 0.05;
        document.getElementById('multiplier').innerText = `${multiplier.toFixed(1)}x`;

        if (multiplier >= 10) {
            clearInterval(gameInterval);
            alert("Game Over! You won!");
        }
    }, 100);

    setTimeout(() => {
        clearInterval(gameInterval);
        alert("Game Over! You lost.");
    }, 10000); // Game duration (10 seconds)
}
￼Enter
