
function osszeadas() {
    let a = Number(document.querySelector('input#a').value);
    let b = Number(document.querySelector('input#b').value);
    let osszegbox = document.querySelector('span.eredmeny');
    osszegbox.innerHTML = a+b;
}
