
console.log("Spirit of this Machine, heed my will!");

///////////////// HEADER ROLL_UP & DOWN /////////////

let lastScrollPosition = 0

window.addEventListener("scroll", () => {

    let currentPosition = window.pageYOffset;

    if (currentPosition > 100 && currentPosition > lastScrollPosition) {
        header.style.transform = "translateY(-200px)";
        mobileHeader.style.transform = "translateY(-700px)";
    } else {
        header.style.transform = "translateY(0)";
        mobileHeader.style.transform = "translateY(0)";
    }

    lastScrollPosition = currentPosition;
})

const header = document.querySelector(".header");

const mobileHeader = document.querySelector(".header--mobile");


////////// HEADER HAMBURGER /////////////////

const unrollHamburger = () => {

    hamLineOne.classList.toggle("hamLineOne--open");

    hamLineTwo.classList.toggle("hamLineTwo--open");

    hamLineThree.classList.toggle("hamLineThree--open");

    hamMenu.classList.toggle("header__right--mobile--open");
};

const hamLineOne = document.querySelector(".hamburger__line--one");

const hamLineTwo = document.querySelector(".hamburger__line--two");

const hamLineThree = document.querySelector(".hamburger__line--three");

const hamButton = document.querySelector(".header__hamburger").addEventListener("click", unrollHamburger)

const hamMenu = document.querySelector(".header__right--mobile");


////////////////////////   COOKIE //////////////////// 

const cookieOpt = () => {
    cookieButton.style.display = "none";
}

let cookieCheck = document.querySelector(".button__cookie__check").addEventListener("click", cookieOpt);

let cookieButton = document.querySelector(".button__cookie__wrapper")

/////////  IMAGES ////////////

const leftImage = document.querySelector(".logo__img--left");

const middleImage = document.querySelector(".logo__img--middle");

const rightImage = document.querySelector(".logo__img--right");


const leftLink = document.querySelector(".logo__link--left");

const middleLink = document.querySelector(".logo__link--middle");

const rightLink = document.querySelector(".logo__link--right");



const changeImage = (image,link,imagesArray,linksArray, interval) => {
    
    let counter = 0

    setInterval(() => {
        counter++;

        switch (counter) {
            case 1:
                image.src = imagesArray[0];
                link.href = linksArray[0]
                break;
            
            case 2:
                image.src = imagesArray[1];
                link.href = linksArray[1]
            break;

            case 3:
                image.src = imagesArray[2];
                link.href = linksArray[2]
                break;

            case 4:
                counter = 0;
                break;
        }
     }, interval);
}

changeImage(leftImage, leftLink, ["airbnb.png", "path.png", "samsung.png"], ["https://airbnb.com", "https://path.com", "https://samsung.com"], 3000);
changeImage(middleImage, middleLink, ["netflix.png", "google.png", "ebay.png"], ["https://netflix.com", "https://google.com", "https://ebay.com"], 3500);
changeImage(rightImage, rightLink, ["dropbox.png", "tumblr.png", "gopro.png"], ["https://dropbox.com", "https://tumblr.com", "https://gopro.com"], 4000);