const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const loginSection = document.getElementById('loginSection');
const loginForm = document.getElementById('loginForm');
const loginError = document.getElementById('loginError');

let isLoggedIn = false;

loginBtn.addEventListener('click', () => {
    loginSection.style.display = 'block';
});

logoutBtn.addEventListener('click', () => {
    isLoggedIn = false;
    loginBtn.style.display = 'inline-block';
    logoutBtn.style.display = 'none';
    alert('Logged out successfully.');
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === 'admin' && password === 'password123') {
        isLoggedIn = true;
        loginSection.style.display = 'none';
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'inline-block';
        loginError.textContent = '';
        alert('Login successful!');
    } else {
        loginError.textContent = 'Invalid credentials. Try admin / password123';
    }
});

