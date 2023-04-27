// When the DOM is ready, attach event listeners to the buttons
document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.querySelector('#login-btn');
    const contactBtn = document.querySelector('#contact-btn');
    const aboutBtn = document.querySelector('#about-btn');
  
    loginBtn.addEventListener('click', () => {
      window.location.href = 'login.html';
    });
  
    contactBtn.addEventListener('click', () => {
      alert('Please call us at 555-1234 or email us at info@bankingapp.com for assistance.');
    });
  
    aboutBtn.addEventListener('click', () => {
      alert('Banking Application is a fictitious bank created for educational purposes.');
    });
  });