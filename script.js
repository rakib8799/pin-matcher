'use strict';
let pinTextValue;
const handleGeneratePin = function () {
    const pinText = handleInput('pin');
    const randomValue = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    pinText.value = randomValue;
    pinTextValue = parseInt(pinText.value);
};
const buttonsParent = document
    .getElementById('buttons-parent')
    .addEventListener('click', function (event) {
        const digit = event.target.innerText;
        if (isNaN(digit)) {
            if (digit == '<') {
                const inputText = handleInput('input');
                const inputTextValue = inputText.value;
                let sum = '';
                for (i = 0; i < inputTextValue.length - 1; i++) {
                    sum += inputTextValue[i];
                }
                inputText.value = sum;
            } else {
                const inputText = handleInput('input');
                inputText.value = '';
            }
        } else {
            const inputText = handleInput('input');
            inputText.value += digit;
        }
    });
const handleInput = function (id) {
    const inputText = document.getElementById(`${id}-text`);
    return inputText;
};
const handleSubmit = function () {
    handlePinNotMatched('pin-not');
    const inputText = handleInput('input');
    const inputTextValue = parseInt(inputText.value);
    if (pinTextValue === inputTextValue) {
        handlePinMatched('pin');
    } else {
        handlePinNotMatched('pin');
        const tryLeft = document.getElementById('try-left');
        const tryLeftText = parseInt(tryLeft.innerText);
        if (tryLeftText > 0) {
            tryLeft.innerText = tryLeftText - 1;
            handlePinMatched('pin-not');
        }
    }
};
const handlePinMatched = function (pin) {
    const pinMatched = document.getElementById(`${pin}-matched`);
    pinMatched.style.display = 'block';
};
const handlePinNotMatched = function (pin) {
    const pinNotMatched = document.getElementById(`${pin}-matched`);
    pinNotMatched.style.display = 'none';
};
