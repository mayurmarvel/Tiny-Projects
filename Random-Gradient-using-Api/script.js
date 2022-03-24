function refreshPage() {
    window.location.reload();
}


fetch('https://random-gradient-api.herokuapp.com/direction/tr')
    .then(response => response.json())
    .then(data => {

        console.log(data)
        document.body.style.background = data.gradientColor;

    });


