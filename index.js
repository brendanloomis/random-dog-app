function getRandomDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(responseJson => console.log(responseJson));
}

function handleForm() {
    console.log('Waiting for submit.');
    $('form').submit(function(event) {
        event.preventDefault();
        let num = $('#quantity').val();
        console.log(`Generating ${$('#quantity').val()} random dog pictures.`);
        for (let i = 0; i < num; i++){
            getRandomDog();
        }
    });
}

$(handleForm());