const imageBoxes = document.querySelectorAll(".gallery-image-box");
const fullscreenImg = document.querySelector(".fullscreen-container")
const fullscreenTitle = document.querySelector(".fullscreen-container-title")
const fullscreenParagraph = document.querySelector(".fullscreen-container-paragraph")
const fullscreen = document.querySelector(".fullscreen");

let currentPosition = 0;

let nextImg = "";
let nextTitle = "";
let nextParagraph = "";

let previousImg = "";
let previousTitle = "";
let previousParagraph = "";

console.log(imageBoxes)
imageBoxes.forEach( (box, i) => {
    box.addEventListener("click", () => {

        currentPosition = i;
        console.log(i)

        //parsing currently clicked image data
        imgSRC = box.children[0].src;
        title = box.children[1].textContent;
        paragraph = box.children[2].textContent;

        //prepare previous button
        if(i == 0)
            i = imageBoxes.length;
        previousImg = imageBoxes[i-1].children[0].src;
        previousTitle = imageBoxes[i-1].children[1].src;
        previousParagraph = imageBoxes[i-1].children[2].src;

        //prepare next button
        if(i == 11)
            i = -1;
        nextImg = imageBoxes[i+1].children[0].src;
        nextTitle = imageBoxes[i+1].children[1].src;
        nextParagraph = imageBoxes[i+1].children[2].src;

        //applying currently clicked data
        fullscreenImg.style.backgroundImage = `url(${imgSRC})`;
        fullscreenTitle.textContent = title;
        fullscreenParagraph.textContent = paragraph;
        fullscreen.classList.toggle("disabled-fullscreen");
    })
} )

const fullscreenClose = document.querySelector(".fullscreen-container-btn-cross");
fullscreenClose.addEventListener("click", () => {
    fullscreen.classList.toggle("disabled-fullscreen");
})

const fullscreenNext = document.querySelector(".fullscreen-container-btn-left");
fullscreenNext.addEventListener("click", () => {
    //applying currently clicked data
    fullscreenImg.style.backgroundImage = `url(${nextImg})`;
    fullscreenTitle.textContent = nextTitle;
    fullscreenParagraph.textContent = nextParagraph;

    //prepare previous button
    if(currentPosition == 1)
    currentPosition = imageBoxes.length+1;
    previousImg = imageBoxes[currentPosition-1].children[0].src;
    previousTitle = imageBoxes[currentPosition-1].children[1].src;
    previousParagraph = imageBoxes[currentPosition-1].children[2].src;

    //prepare next button
    if(currentPosition == 11)
        currentPosition = -1;
    nextImg = imageBoxes[currentPosition+1].children[0].src;
    nextTitle = imageBoxes[currentPosition+1].children[1].src;
    nextParagraph = imageBoxes[currentPosition+1].children[2].src;
})