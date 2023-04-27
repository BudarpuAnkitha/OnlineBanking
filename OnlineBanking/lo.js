// DOM elements
const loginForm = document.querySelector('.login-form');
const bankingApp = document.querySelector('.banking-app');
const balance = document.querySelector('#balance');
const transactionsTable = document.querySelector('#transactions tbody');
const transactionForm = document.querySelector('.transaction-form');
const loginButton = document.querySelector('#login-button');
const logoutButton = document.querySelector('#logout-button');
const transactionButton = document.querySelector('#transaction-button');
const loginError = document.querySelector('#login-error');
const transactionError = document.querySelector('#transaction-error');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const amountInput = document.querySelector('#amount');
const depositInput = document.querySelector('#deposit');
const withdrawInput = document.querySelector('#withdraw');

// User data
const userData = [
  { username: 'raj', password: 'raj06', balance: 15000, transactions: [] },
  { username: 'ravi', password: 'ravi03', balance: 5000, transactions: [] },
  { username: 'tej', password: 'tej02', balance: 8000, transactions: [] },
];

// Login function
function login(e) {
  e.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;
  const user = userData.find((u) => u.username === username && u.password === password);
  if (user) {
    // Login successful
    loginError.textContent = '';
    loginForm.classList.add('hidden');
    bankingApp.classList.remove('hidden');
    balance.textContent = user.balance;
    renderTransactions(user.transactions);
  } else {
    // Login failed
    loginError.textContent = 'Invalid username or password.';
  }
}

// Logout function
function logout() {
  bankingApp.classList.add('hidden');
  loginForm.classList.remove('hidden');
  usernameInput.value = '';
  passwordInput.value = '';
  amountInput.value = '';
  transactionsTable.innerHTML = '';
  loginError.textContent = '';
  transactionError.textContent = '';
}

// Transaction function
function makeTransaction(e) {
  e.preventDefault();
  const amount = parseFloat(amountInput.value);
  const transactionType = depositInput.checked ? 'deposit' : 'withdraw';
  if (isNaN(amount) || amount <= 0) {
    transactionError.textContent = 'Please enter a valid amount'
} else {
const user = userData.find((u) => u.username === usernameInput.value);
if (transactionType === 'deposit') {
user.balance += amount;
} else {
if (user.balance < amount) {
transactionError.textContent = 'Insufficient funds.';
return;
}
user.balance -= amount;
}
user.transactions.push({ type: transactionType, amount: amount, date: new Date() });
balance.textContent = user.balance;
renderTransactions(user.transactions);
amountInput.value = '';
depositInput.checked = true;
withdrawInput.checked = false;
transactionError.textContent = '';
}
}

// Render transactions
function renderTransactions(transactions) {
transactionsTable.innerHTML = '';
transactions.forEach((transaction) => {
const row = document.createElement('tr');
const typeCell = document.createElement('td');
const amountCell = document.createElement('td');
const dateCell = document.createElement('td');
typeCell.textContent = transaction.type;
amountCell.textContent = transaction.amount;
dateCell.textContent = transaction.date.toLocaleString();
row.appendChild(typeCell);
row.appendChild(amountCell);
row.appendChild(dateCell);
transactionsTable.appendChild(row);
});
}

// Event listeners
loginForm.addEventListener('submit', login);
logoutButton.addEventListener('click', logout);
transactionForm.addEventListener('submit', makeTransaction);
