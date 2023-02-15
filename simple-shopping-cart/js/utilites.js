// function for update item of number in every click
function updateNumber(isNumber, elementId) {
    const inputField = document.getElementById(elementId);
    const inputStr = inputField.value;
    const previousNumber = parseInt(inputStr);
    let itemNumber;

    if (isNumber === true) {
        itemNumber = previousNumber + 1;
    }
    else {
        itemNumber = previousNumber - 1;
        if (itemNumber < 0) {
            itemNumber = 0;
        }
    }
    inputField.value = itemNumber;
    return itemNumber;
}

// function for setting updated price {update after increase and decrease of item} 
function setPrice(itemNumber, itemPrice, elementId) {
    const updatePrice = itemNumber * itemPrice;
    const priceDisplayed = document.getElementById(elementId);
    priceDisplayed.innerText = updatePrice;
    return updatePrice;
}

// function for text value 
function getPriceTextValue(elementId) {
    const element = document.getElementById(elementId);
    const elementStr = element.innerText;
    const elementPrice = parseInt(elementStr);
    return elementPrice;
}

// set tax, subtotal and total
function setOtherTotalText(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

// tax, subtotal and total
function updateOtherTotal() {
    const phoneTotal = getPriceTextValue('phone-price');
    const caseTotal = getPriceTextValue('case-price');
    // subTotal
    const subTotal = phoneTotal + caseTotal;
    setOtherTotalText('sub-total', subTotal);
    // tax
    const tax = parseFloat((subTotal * 0.1).toFixed(2));
    setOtherTotalText('tax', tax);
    // total
    const total = subTotal + tax;
    setOtherTotalText('total', total);
}