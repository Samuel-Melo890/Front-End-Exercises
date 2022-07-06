function counter() {
    let time = 6;
    let clock = document.getElementById('counter');
    

    setInterval(function () {
        clock.innerHTML = time - 1;
        time--;

        if (time == 0) {
            time = 6;
        }
    }, 1000);
}
