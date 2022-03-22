let generateColor = function () {
    return Math.floor(Math.random() * (255 - 000 + 1)) + 000;

}

let changeBg = function () {

    document.body.style.backgroundColor = `rgb(${generateColor()}, ${generateColor()}, ${generateColor()})`;

}

