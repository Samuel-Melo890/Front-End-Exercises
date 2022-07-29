$('#showScreenAttr').click(() => {
    let display = $('#screenAttr');

    display.html(`<b>Screen Attributes:</b><br>\
    &nbsp;&nbsp;<b>Screen Size</b> &raquo; ${innerWidth} x ${innerHeight} px<br>\
    &nbsp;&nbsp;<b>Screen Color Depth</b> &raquo; ${screen.colorDepth} bits<br>\
    &nbsp;&nbsp;<b>Screen Pixel Depth</b> &raquo; ${screen.pixelDepth} px`);
});

$('#showLocationAttr').click(() => {
    let display = $('#locationAttr');

    display.html(`<b>Location Attributes</b><br>\
    &nbsp;&nbsp;<b>Location URL</b> &raquo; ${location.href}<br>\
    &nbsp;&nbsp;<b>Location Hostname</b> &raquo; ${location.hostname}<br>\
    &nbsp;&nbsp;<b>Location Pathname</b> &raquo; ${location.pathname}<br>\
    &nbsp;&nbsp;<b>Location Protocol</b> &raquo; ${location.protocol}<br>\
    &nbsp;&nbsp;<b>Location Port</b> &raquo; ${location.port}`);
});

// Uses a confirm box to display the sum of two numbers
$('#confirmSum').click(() => {
    let num1 = Number(prompt('Number 1: ', 0));
    let num2 = Number(prompt('Number 2: ', 0));

    let display = window.confirm('Do you want to see the result?');
    if (display) {
        alert(`The result is ${num1 + num2}!`);
    }
});

// Creating a cookie
$('#createCookie').click(() => {
    let display = $('#cookies');
    let name = prompt('Name of the Cookie: ', 'Simple Name');
    let value = prompt(`Value of the Cookie ${name}: `, 'Simple Value');

    document.cookie = `${name}=${value}; expires=${new Date().setDate(31)}; path=/`;

    display.html(`<b>Cookies:</b><br> &raquo; ${document.cookie} | END`);
});
