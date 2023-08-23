var myImages = Array.from(document.querySelectorAll('.w-100'))
var lightBoxContainer = document.querySelector('#lightBoxContainer')
var lightBox = document.querySelector('#lightBox')
var previous = document.querySelector('#prev')
var closeBtn = document.querySelector('#btnClose')
var next = document.querySelector('#next')

currentIndex = 0;
for (let i = 0; i < myImages.length; i++) {
    myImages[i].addEventListener('click', function (e) {
        lightBoxContainer.classList.remove('d-none')
        imgSrc = e.target.getAttribute('src')
        // OR  imgSrc=myImages[i].getAttribute('src')
        lightBox.style.backgroundImage = `url(${imgSrc})`
        currentIndex = myImages.indexOf(e.target)
        // console.log(currentIndex);
        console.log(imgSrc);
        
    })
}

// console.log(myImages.length);
function nextSlider() {
    currentIndex++;
    // console.log("function",currentIndex);

    if (currentIndex > myImages.length - 1) {
        currentIndex = 0;
        // console.log("if",currentIndex);
    }
    // else{
    // console.log("else",currentIndex);

    newSrc = myImages[currentIndex].getAttribute('src')
    lightBox.style.backgroundImage = `url(${newSrc})`
    // console.log( newSrc);
    // }
}


function previousSlider() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = 5;
    }
    newSrc = myImages[currentIndex].getAttribute('src')
    lightBox.style.backgroundImage = `url(${newSrc})`
    console.log(newSrc);
}


function closeButton() {
    lightBoxContainer.classList.add('d-none')
}

document.addEventListener('keydown', (e)=>{
    if (e.key === "ArrowRight") {
        nextSlider();
    } else if (e.key === "ArrowLeft") {
        previousSlider();
    } else if (e.key === "Escape") {
        closeButton();
    }
});

next.addEventListener('click', nextSlider)
previous.addEventListener('click', previousSlider)
closeBtn.addEventListener('click', closeButton)

// lightBoxContainer.addEventListener('click', function (e) {
//     if (e.clientX <= 378 || e.clientX >= 1138) {
//         lightBoxContainer.classList.add('d-none')

//     }
// })

// JQUERY
// let currentIndex=0;

// $('img').click((e)=> {
//     let imgSrc = $(e.target).attr('src')
//     //    console.log(imgSrc);
//     $('#lightBox').css("backgroundImage", `url(${imgSrc})`)
//     $('#lightBoxContainer').css("display","flex")
//     // $('#lightBoxContainer').show();
//     currentIndex=myImages.indexOf(e.target)
//     // console.log(currentIndex);
// })


// $('#prev').click((e)=>{
//     currentIndex--;
//     let newSrc =myImages[currentIndex].getAttribute('src')

//     $('#lightBox').css("backgroundImage", `url(${newSrc })`)
//     console.log(newSrc);


// })