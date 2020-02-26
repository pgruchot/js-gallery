//element references
const fullscreenImg = document.querySelector(".fullscreen-container");
const fullscreenTitle = document.querySelector(".fullscreen-container-title");
const fullscreenParagraph = document.querySelector(".fullscreen-container-paragraph");
const fullscreen = document.querySelector(".fullscreen");

//variable used for navigation
let currentPosition = 0;

//object with data for image display
const gallery = {
    previousImg: "",
    previousTitle: "",
    previousParagraph: "",
    
    currentImg: "",
    currentTitle: "",
    currentParagraph: "",

    nextImg: "",
    nextTitle: "",
    nextParagraph: "",
    
    //swapping images
    action: (i) => {
        let previousCounter = i, nextCounter = i;
        currentPosition = i;
        if(i == 0) 
            previousCounter = imageBoxes.length
        previousImg = imageBoxes[previousCounter-1].children[0].src;
        previousTitle = imageBoxes[previousCounter-1].children[1].textContent;
        previousParagraph = imageBoxes[previousCounter-1].children[2].textContent;
        
        currentImg = imageBoxes[i].children[0].src;
        currentTitle = imageBoxes[i].children[1].textContent;
        currentParagraph = imageBoxes[i].children[2].textContent;
        
        if(i == 11)
            nextCounter = -1;
        nextImg = imageBoxes[nextCounter+1].children[0].src;
        nextTitle = imageBoxes[nextCounter+1].children[1].textContent;
        nextParagraph = imageBoxes[nextCounter+1].children[2].textContent;
        fullscreenImg.style.backgroundImage = `url("${currentImg}")`;
        fullscreenTitle.textContent = currentTitle;
        fullscreenParagraph.textContent = currentParagraph;        
    }
}

//event listeners for image boxes
const imageBoxes = document.querySelectorAll(".gallery-image-box");
imageBoxes.forEach( (box, i) => {
    box.addEventListener("click", () => {

        gallery.action(i);
        fullscreen.classList.toggle("disabled-fullscreen");
    })
} )

//image close button
const fullscreenClose = document.querySelector(".fullscreen-container-btn-cross");
fullscreenClose.addEventListener("click", () => {
    fullscreen.classList.toggle("disabled-fullscreen");
})

//next image button
const fullscreenNext = document.querySelector(".fullscreen-container-btn-right");
fullscreenNext.addEventListener("click", () => {
    if(currentPosition == 11)
        currentPosition = -1;
    gallery.action(currentPosition+1);
})

//previous image button
const fullscreenPrevious = document.querySelector(".fullscreen-container-btn-left");
fullscreenPrevious.addEventListener("click", () => {
    if(currentPosition == 0)
        currentPosition = 12;
    gallery.action(currentPosition-1);
})

//activate contact menu
const aboutButton = document.querySelector(".info-bar-button-activate");
const infoBar = document.querySelector(".info-bar");
aboutButton.addEventListener("click", () => {
    infoBar.classList.toggle("active-bar");
})

//close contact menu
const closeMenuButton = document.querySelector(".info-bar-exit")
closeMenuButton.addEventListener("click", () => {
    infoBar.classList.toggle("active-bar");
})