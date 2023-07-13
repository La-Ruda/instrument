
console.log("Spirit of this Machine, heed my will!");



let lastScroll = 0;

window.addEventListener("scroll", () => { 

    const currentScroll = window.pageYOffset;

    const lastScroll = window.pageYOffset - currentScroll;

    console.log(currentScroll);

    if (currentScroll > 100) {
        header.style.display = "none"
        header.classList.add("scrolling--down");
    } 

    if ()

});


const header = document.querySelector(".header");

//window.addEventListener("scroll", () => { 
// 
//     const currentScroll = window.pageYOffset;
// 
//     console.log(currentScroll);
//     
//     if (currentScroll <= "100") {
//         header.classList.remove("scroll--up")
//     }
//     if (currentScroll > lastScroll && !header.classList.contains("scroll--down")) {
//         header.classList.remove("scroll--up");
//         header.classList.add("scroll--down");
//     } else if (currentScroll < lastScroll && header.classList.contains("scroll--down")) {
//         header.classList.remove("scroll--down")
//         header.classList.add("scroll--up")   
//     }        
// });
 




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


