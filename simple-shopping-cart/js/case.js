// function updateCaseNumber(isNumber) {
//     const caseField = document.getElementById('case-number');
//     const caseFieldStr = caseField.value;
//     const caseNumber = parseInt(caseFieldStr);
//     let newCaseNumber;

//     if (isNumber === true) {
//         newCaseNumber = caseNumber + 1;
//     }
//     else {
//         newCaseNumber = caseNumber - 1;
//         if (newCaseNumber < 0) {
//             newCaseNumber = 0;
//         }
//     }
//     caseField.value = newCaseNumber;
//     return newCaseNumber;
// }

// function setPrice(newCaseNumber) {
//     const updatePrice = newCaseNumber * 59;
//     const priceDisplayed = document.getElementById('case-price');
//     priceDisplayed.innerText = updatePrice;
// }

document.getElementById('btn-increase-case').addEventListener('click', function () {
    // const newCaseNumber = updateCaseNumber(true);
    // // let caseNumber = parseInt(caseFieldStr);
    // // caseNumber++;
    // // caseField.value = caseNumber;
    // setPrice(newCaseNumber)
    const newCaseNumber = updateNumber(true, 'case-number');
    const updatePrice = setPrice(newCaseNumber, 59, 'case-price');
    updateOtherTotal();
})

document.getElementById('btn-decrease-case').addEventListener('click', function () {
    // const newCaseNumber = updateCaseNumber(false);
    // setPrice(newCaseNumber)
    const newCaseNumber = updateNumber(false, 'case-number');
    const updatePrice = setPrice(newCaseNumber, 59, 'case-price');
    updateOtherTotal();
})