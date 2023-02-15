document.getElementById('btn-increase-phone').addEventListener('click', function () {
    // const phone = document.getElementById('phone-number');
    // const phoneStr = phone.value;
    // const preNumberOfPhone = parseInt(phoneStr);
    // const numberOfPhone = preNumberOfPhone + 1;
    // phone.value = numberOfPhone;
    // const price = numberOfPhone * 1219;
    // const priceDisplayed = document.getElementById('phone-price')
    // priceDisplayed.innerText = price;
    const numberOfPhone = updateNumber(true, 'phone-number');
    const updatePrice = setPrice(numberOfPhone, 1219, 'phone-price');
    updateOtherTotal();
})

document.getElementById('btn-decrease-phone').addEventListener('click', function () {
    // const phone = document.getElementById('phone-number');
    // const phoneStr = phone.value;
    // const preNumberOfPhone = parseInt(phoneStr);
    // const numberOfPhone = preNumberOfPhone - 1;
    // phone.value = numberOfPhone;
    const numberOfPhone = updateNumber(false, 'phone-number');
    setPrice(numberOfPhone, 1219, 'phone-price');
    updateOtherTotal()
})