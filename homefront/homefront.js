// Profile dropdown toggle
const profileButton = document.getElementById('profileButton');
const dropdownMenu = document.getElementById('dropdownMenu');

profileButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});

// Three tables with assigned colors
const tables = [
    { name: "Beginner's Luck", users: 3, colorClass: "light-purple" },
    { name: "High Rollers", users: 5, colorClass: "light-blue" },
    { name: "Card Sharks", users: 4, colorClass: "light-green" },
];

let currentTable = 0;

// Update table info and background color
function updateTableInfo() {
    const tableCard = document.getElementById('tableCard');
    document.getElementById('tableName').innerText = tables[currentTable].name;
    document.getElementById('activeUsers').innerText = tables[currentTable].users;

    // Remove existing color class and add the new one
    tableCard.className = `card ${tables[currentTable].colorClass}`;
}

// Change table when arrows are clicked
function changeTable(direction) {
    currentTable = (currentTable + direction + tables.length) % tables.length;
    updateTableInfo();
}

// Actions
function spectateTable() {
    alert("Spectating " + tables[currentTable].name);
}

function joinTable() {
    alert("Joined " + tables[currentTable].name);
}

function signOut() {
    alert("Signing out...");
}

function requestChips() {
    alert("Requesting more chips...");
}

// Update current time every second
setInterval(() => {
    document.getElementById('currentTime').innerText = new Date().toLocaleTimeString();
}, 1000);

// Initialize table info and check if user is logged in
function initializePage() {
    const userLoggedIn = false;  // Change this flag to simulate login status
    if (!userLoggedIn) {
        document.getElementById('username').innerText = "Not Signed In";
    }
    updateTableInfo();
}

initializePage();
