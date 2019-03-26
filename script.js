let numberEntered = document.getElementById('entry').value;
let URL= 'https://dog.ceo/api/breeds/image/random/'+numberEntered;


function getDogImages() {
    fetch(URL)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(_error => alert('error!'))
}

function displayResults(responseJson){
    console.log(responseJson);
    $('.results-img1').replaceWith(
        `<img src="${responseJson.message[0]}" class="results-img1">`
    )
    $('.results-img2').replaceWith(
        `<img src="${responseJson.message[1]}" class="results-img2">`
    )
    $('.results-img3').replaceWith(
        `<img src="${responseJson.message[2]}" class="results-img3">`
    )
    $('.hidden').removeClass('hidden');
}



function requestMorePictures(){
    let numberEntered = document.getElementById('entry').value;
    console.log(numberEntered);
    
    
};

function renderSubmitButton(){
    $('form').submit(event => {
        event.preventDefault();
        getDogImages();
        requestMorePictures();
    })
}

$(function(){
    console.log('App loaded! Waiting for submit!');
    renderSubmitButton();
});

