document.getElementById('btn-deposit').addEventListener('click', function () {
    // get input ammount
    const inputDeposit = getInputValue('input-deposit');
    // get displayed previous ammount
    const previousDeposit = getTextValue('total-deposit');
    // set total deposit
    const totalDeposit = inputDeposit + previousDeposit;
    setText('total-deposit', totalDeposit);
    // set new balance
    const previousBalance = getTextValue('total-balance');
    const newBalance = previousBalance + inputDeposit;
    setText('total-balance', newBalance);
})