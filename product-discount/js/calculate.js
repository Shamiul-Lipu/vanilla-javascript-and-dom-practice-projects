function discountCalc(value) {
    const displayedPrice = document.getElementById(value);
    const priceStr = displayedPrice.innerText
    const price = parseFloat(priceStr);
    const discount30 = price - (price / 100 * 30);
    displayedPrice.innerText = discount30;
}

document.getElementById('btn-apply').addEventListener('click', function () {
    // get only 30% by apply button
    const price = discountCalc('displayed-price');
})

document.getElementById('btn-apply-coupon').addEventListener('click', function () {
    const inputCoupon = document.getElementById('input-coupon');
    const inputText = inputCoupon.value;
    if (inputText === 'COU30D') {
        const price = discountCalc('displayed-price-coup');
    }
    else {
        alert('invalid coupon');
        return;
    }
    inputCoupon.value = '';
})

