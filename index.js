function getRandomDog(num) {
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson));
}

function handleForm() {
    console.log('Waiting for submit.');
    $('form').submit(function(event) {
        event.preventDefault();
        let num = $('#quantity').val();
        console.log(`Generating ${num} random dog pictures.`);
        getRandomDog(num);
    });
}

$(handleForm());