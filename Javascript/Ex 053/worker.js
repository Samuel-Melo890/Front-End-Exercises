let i = 0;

let timer = () => {
    i++;
    postMessage(`Counter: ${i}`);
    setTimeout(timer, 1000);
};

timer();