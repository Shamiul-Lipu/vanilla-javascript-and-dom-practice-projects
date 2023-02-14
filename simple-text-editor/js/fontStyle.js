// btn-bold
let bold = true;
document.getElementById('btn-bold').addEventListener('click', function () {
    const element = document.getElementById('input-text');

    if (bold === true) {
        element.style.fontWeight = 'bold';
        bold = false;
    }
    else {
        element.style.fontWeight = 'normal';
        bold = true;
    }
})
// btn-italic
let italic = true;
document.getElementById('btn-italic').addEventListener('click', function () {
    const element = document.getElementById('input-text');

    if (italic === true) {
        element.style.fontStyle = 'italic';
        italic = false;
    }
    else {
        element.style.fontStyle = 'normal';
        italic = true;
    }
})
// btn-underline
let underline = true;
document.getElementById('btn-underline').addEventListener('click', function () {
    const element = document.getElementById('input-text');

    if (underline === true) {
        element.style.textDecoration = 'underline';
        underline = false;
    }
    else {
        element.style.textDecoration = 'none';
        underline = true;
    }
})