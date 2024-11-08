// Profile dropdown toggle
const profileButton = document.getElementById('profileButton');
const dropdownMenu = document.getElementById('dropdownMenu');

profileButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});

// Mock user data and tables for Table 1
const tables = [
    { name: "Beginner's Luck", users: 3 },
    { name: "High Rollers", users: 5 },
    { name: "Card Sharks", users: 4 },
];

let currentTable = 0;

// Update table info
function updateTableInfo() {
    document.getElementById('tableName').innerText = tables[currentTable].name;
    document.getElementById('activeUsers').innerText = `Active Users: ${tables[currentTable].users}`;
}

// Change table when arrows are clicked
function changeTable(direction) {
    currentTable = (currentTable + direction + tables.length) % tables.length;
    updateTableInfo();
}

// Actions
function spectateTable() {
    alert(`Spectating ${tables[currentTable].name}`);
}

function joinTable() {
    alert(`Joined ${tables[currentTable].name}`);
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

// Initialize table info
updateTableInfo();
