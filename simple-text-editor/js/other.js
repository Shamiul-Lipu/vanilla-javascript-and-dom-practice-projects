// font size input-text
document.getElementById('font-size').addEventListener('click', function () {
    const element = document.getElementById('input-text');
    const size = document.getElementById('font-size').value;
    element.style.fontSize = `${size}px`;
})
// color
document.getElementById('input-text').addEventListener('click', function () {
    const element = document.getElementById('input-text');
    const selectColor = document.getElementById('color-select').value;
    element.style.color = `${selectColor}`;
})