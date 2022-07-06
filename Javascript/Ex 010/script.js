function sum(s1, s2) {
    let a = Number(s1.value), b = Number(s2.value);

    if (a == 0|b == 0) {
        a = 0;
        b = 0;
    };

    document.getElementById('result').innerHTML = a + b;
};
