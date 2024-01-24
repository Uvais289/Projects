// script.js

function submitForm(event) {
    event.preventDefault();
    
    const userInput = document.getElementById('userInput').value;
    const userMessage = document.getElementById('userMessage');
    
    if (userInput.trim() !== '') {
      applyDynamicStyles(userInput);
      userMessage.textContent = `Thanks for sharing! You love: ${userInput}`;
    } else {
      userMessage.textContent = 'Please provide input before submitting.';
    }
  }
  
  function applyDynamicStyles(userInput) {
    const heroSection = document.querySelector('.hero');
    heroSection.style.background = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('background.jpg') center/cover no-repeat, ${getRandomColor()}`;
  }
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  