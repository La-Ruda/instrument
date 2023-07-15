
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





const cookieOpt = () => {
    cookieButton.style.display = "none";
}

let cookieCheck = document.querySelector(".button__cookie__check").addEventListener("click", cookieOpt);

let cookieButton = document.querySelector(".button__cookie__wrapper")





const imagesInterval = () => {
    setInterval(() => {
        setInterval(leftImageChange, 3000);
        // console.log("neser");    
        setInterval(middleImageChange, 4000);
        // console.log("neser");
        setInterval(rightImageChange, 5000)
        // console.log("neser");
    }, 5000)
}

const leftImage = document.querySelector("#logos__carusel__left");

const middleImage = document.querySelector("#logos__carusel__middle");

const rightImage = document.querySelector("#logos__carusel__right");



const leftImageChange = () => {

    leftImage.classList.add("logos__carusel__left--airbnb");
    // leftImage.classList.toggle("logos__carusel__left--path");
    // leftImage.classList.toggle("logos__carusel__left--samsung");
}


const middleImageChange = () => {

    middleImage.classList.add("logos__carusel__middle--netflix");
    // middleImage.classList.toggle("logos__carusel__middle--google");
    // middleImage.classList.toggle("logos__carusel__middle--ebay");
}


const rightImageChange = () => {
    rightImage.classList.add("logos__carusel__right--dropbox");
    // rightImage.classList.toggle("logos__carusel__right--tumblr");
    // rightImage.classList.toggle("logos__carusel__right--gopro")   
}


