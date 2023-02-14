// function for Input Ammount value
function getInputValue(inputElement) {
    const inputValue = document.getElementById(inputElement);
    const inputStr = inputValue.value;
    const inputAmmount = parseFloat(inputStr);
    inputValue.value = '';
    return inputAmmount;
}
// function for Displayed Ammount text
function getTextValue(textElement) {
    const textValue = document.getElementById(textElement);
    const textStr = textValue.innerText;
    const textAmmount = parseFloat(textStr);
    return textAmmount;
}
// function for set Calculated text
function setText(elementId, newAmmount) {
    const previous = document.getElementById(elementId);
    previous.innerText = newAmmount;
}