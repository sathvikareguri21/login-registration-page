const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

if (registerLink && loginLink && logregBox) {
    registerLink.addEventListener('click', (event) => {
        event.preventDefault();
        logregBox.classList.add('active');
    });

    loginLink.addEventListener('click', (event) => {
        event.preventDefault();
        logregBox.classList.remove('active');
    });
}
