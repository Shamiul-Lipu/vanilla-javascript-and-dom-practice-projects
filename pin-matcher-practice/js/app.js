// function for four pin number
function getPin() {
    const pinNum = generatePinNum();
    const pinStr = pinNum + '';
    if (pinStr.length === 4) {
        return pinNum;
    }
    else {
        return getPin();
    }
}
// function for random pin number
function generatePinNum() {
    const randomNum = Math.round(Math.random() * 10000);
    return randomNum;
}

// Displaying generated pin 
document.getElementById('btn-generate-pin').addEventListener('click', function () {
    const displayPin = document.getElementById('display-pin');
    const pin = getPin();
    displayPin.value = pin;
})

// Display user input pin and interaction 
document.getElementById('calculator').addEventListener('click', function (event) {
    const element = event.target.innerText;
    const number = document.getElementById('display-typed-number');
    const previousNumber = number.value;

    if (isNaN(element)) {
        if (element == 'C') {
            number.value = '';
        }
        else if (element == '<') {
            const numberArray = previousNumber.split('');
            numberArray.pop();
            const remainingNum = numberArray.join('');
            number.value = remainingNum;
        }
    }
    else {
        number.value += element;
        // const newNumber = previousNumber + element;
        // number.value = newNumber;
    }
})

// Display pin correct and incorrect massage
document.getElementById('btn-verify').addEventListener('click', function () {
    const displayPin = document.getElementById('display-pin');
    const pin = displayPin.value;

    const number = document.getElementById('display-typed-number');
    const typedNumber = number.value;

    if (pin === typedNumber) {
        document.getElementById('correct-pin').style.display = 'block';
        document.getElementById('incorrect-pin').style.display = 'none';
    }
    else {
        document.getElementById('incorrect-pin').style.display = 'block';
        document.getElementById('correct-pin').style.display = 'none';
    }
})