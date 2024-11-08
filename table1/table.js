const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];
let selectedCard = null;
let centerCardIndex = Math.floor(Math.random() * colors.length);

const players = [
    { name: "You", points: 5, isTurn: true },
    { name: "Alice", points: 3, isTurn: false },
    { name: "Bob", points: 4, isTurn: false },
    { name: "Charlie", points: 2, isTurn: false },
];

// Update center card color
function updateCenterCard() {
    const centerCard = document.getElementById("centerCard");
    centerCard.style.backgroundColor = colors[centerCardIndex];
}

// Render player cards
function renderCards(player, isCurrentPlayer, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    colors.forEach((color, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.backgroundColor = color;
        if (isCurrentPlayer) {
            card.onclick = () => handleCardSelect(index);
        }
        container.appendChild(card);
    });
}

// Handle card selection
function handleCardSelect(index) {
    selectedCard = selectedCard === index ? null : index;
    document.getElementById("playCardButton").disabled = selectedCard === null;
}

// Draw a new center card
function handleDrawCard() {
    centerCardIndex = Math.floor(Math.random() * colors.length);
    selectedCard = null;
    updateCenterCard();
    document.getElementById("playCardButton").disabled = true;
}

// Play selected card and display feedback
function playCard() {
    if (selectedCard !== null) {
        const feedback = document.getElementById("feedback");
        const match = colors[selectedCard] === colors[centerCardIndex];
        feedback.innerText = match ? "+1" : "-1";
        feedback.classList.remove("hidden");
        feedback.style.color = match ? "green" : "red";
    }
}

// Initialize
function initializeGame() {
    updateCenterCard();
    renderCards(players[0], true, "yourCards");
    renderCards(players[1], false, "cardsAlice");
    renderCards(players[2], false, "cardsBob");
    renderCards(players[3], false, "cardsCharlie");
}

document.getElementById("playCardButton").onclick = playCard;
document.getElementById("drawCardButton").onclick = handleDrawCard;

initializeGame();
