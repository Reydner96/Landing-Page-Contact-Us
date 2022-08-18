const togglerSwitch = document.querySelector('.theme-switch input[type="checkbox"]');


function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-time', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-time', 'light');
    }
}

togglerSwitch.addEventListener('change', switchTheme, false);

const nome = document.getElementById('nome');
const email = document.getElementById('email');
const message = document.getElementById('message');
const contact = document.getElementById('contact-form');
const errorElement = document.getElementById('error');
const successMsg = document.getElementById('success-msg');
const submitBtn = document.getElementById('submit');

const validate = (e) => {
    e.preventDefault();
    if (nome.value.length < 3) {
        errorElement.innerHTML = 'Your name should be at least 3 characters long.';
        return false;
    } 
    
    if (!(email.value.includes('.') && (email.value.includes('@')))) {
        errorElement.innerHTML = 'Please enter a valid email address.';
        return false;
    } 
    
    if (!emailIsValid(email.value)) {
        errorElement.innerHTML = 'Please enter a valid email address.';
        return false;
    }
    
    if (message.value.length < 15) {
        errorElement.innerHTML = 'Please write a longer message.';
        return false;
    }
    
    errorElement.innerHTML = '';
    successMsg.innerHTML = 'Thank you! I will get back to you as soon as possible.'; 
    
    e.preventDefault();
    setTimeout(function () {
        successMsg.innerHTML = '';
        document.getElementById('contact-form').reset();
    }, 6000);
    
    return true;
    
    }
    
    const emailIsValid = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    submitBtn.addEventListener('click', validate);