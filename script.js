
console.log("Spirit of this Machine, heed my will!");


let lastScrollPosition = 0


window.addEventListener("scroll", () => {

    let currentPosition = window.pageYOffset;

    if (currentPosition > 100 && currentPosition > lastScrollPosition) {
        header.style.transform = "translateY(-200px)"
    } else {
        header.style.transform = "translateY(0)"
    }

    lastScrollPosition = currentPosition;
})

const header = document.querySelector(".header");


/////////////////////////////////////////////////////////////



const cookieOpt = () => {
    cookieButton.style.display = "none";
}

let cookieCheck = document.querySelector(".button__cookie__check").addEventListener("click", cookieOpt);

let cookieButton = document.querySelector(".button__cookie__wrapper")



//////////////////////////////////////////////////////////



const leftImage = document.querySelector(".logo__img--left");

const middleImage = document.querySelector(".logo__img--middle");

const rightImage = document.querySelector(".logo__img--right");


const leftLink = document.querySelector(".logo__link--left");

const middleLink = document.querySelector(".logo__link--middle");

const rightLink = document.querySelector(".logo__link--right");



let counter = 0;

const leftImageChange = () => {
    
    counter++;

    if (counter === 1) {
        leftImage.src = "/airbnb.png"
        leftLink.href = "https://airbnb.com"
    } else if (counter === 2) {
        leftImage.src = "/path.png"
        leftLink.href = "https://path.com"
    } else if (counter === 3) {
        leftImage.src = "/samsung.png"
        leftLink.href = "https://samsung.com"
    }else if (counter === 4) {
        counter = 0;
    }
};


setInterval(leftImageChange, 3000);


let legranda = 0

const middleImageChange = () => {

    legranda++;

    if (legranda === 1) {
        middleImage.src = "/netflix.png"
        middleLink.href = "https://netflix.com"
    } else if (legranda === 2) {
        middleImage.src = "/google.png"
        middleLink.href = "https://google.com"
    } else if (legranda === 3) {
        middleImage.src = "/ebay.png"
        middleLink.href = "https://ebay.com"
    }else if (legranda === 4) {
        legranda = 0;
    }
}

setInterval(middleImageChange, 4000);


let tracker = 0


const rightImageChange = () => {

    tracker++;

    if (tracker === 1) {
        rightImage.src = "/dropbox.png"
        rightLink.href = "https://dropbox.com"
    } else if (tracker === 2) {
        rightImage.src = "/tumblr.png"
        rightLink.href = "https://tumblr.com"
    } else if (tracker === 3) {
        rightImage.src = "/gopro.png"
        rightLink.href = "https://gopro.com"
    }else if (tracker === 4) {
        tracker = 0;
    }
}


setInterval(rightImageChange, 3500);


