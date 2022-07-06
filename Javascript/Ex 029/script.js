function showDelta() {
    let a = Number(document.getElementById('coefA').value);
    let b = Number(document.getElementById('coefB').value);
    let c = Number(document.getElementById('coefC').value);
    let delta = b**2 - 4*a*c;

    alert(`Delta = b² - 4.a.c\n\
Delta = (${b})² - 4.(${a}).(${c})\n\
Delta = ${b**2} - (${4*a*c})\n\
Delta = ${delta}`);
}
