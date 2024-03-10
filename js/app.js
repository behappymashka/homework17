'use strict';

const textInput = document.getElementById('textInput');
const message = document.getElementById('message');

textInput.addEventListener('focus', () => {
    const divElement = document.createElement('div');
    divElement.textContent = 'Текстовое поле в фокусе';
    message.appendChild(divElement);
});

textInput.addEventListener('blur', () => {
    message.removeChild(message.firstChild);
});