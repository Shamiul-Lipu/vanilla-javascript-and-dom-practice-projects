document.getElementById('btn-withdraw').addEventListener('click', function () {
    // get input withdraw ammount
    const inputWithdraw = getInputValue('input-withdraw');
    // get displayed withdraw ammount
    const previousWithdraw = getTextValue('total-withdraw');
    // set total withdraw ammount
    const totalWithdraw = inputWithdraw + previousWithdraw;
    setText('total-withdraw', totalWithdraw);
    // set new Balance after withdraw
    const previousBalance = getTextValue('total-balance');
    const newBalance = previousBalance - inputWithdraw;
    setText('total-balance', newBalance);
})