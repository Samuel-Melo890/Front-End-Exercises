function move() {
    let image = document.getElementById('bear');
    let c = 0;

    setInterval(function () {
        let strPos = image.style.marginLeft;
        let pos = Number(strPos.replace('px', ''));

        if (image.src == 
        "https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-1.png") {
            image.style.marginLeft = (pos + 5).toString() + "px";
            image.src = 
            "https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-2.png";
        } else if (image.src == 
            "https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-2.png") {
                image.style.marginLeft = (pos + 5).toString() + "px";
                image.src = 
                "https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-3.png";
            } else {
                image.style.marginLeft = (pos + 5).toString() + "px";
                image.src =
                "https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-2.png";
            }
        
        c++;
        if (c == 50) {
            image.style.marginLeft = "0px";
            c = 0;
        }
    }, 150)
}
