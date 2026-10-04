// Welcome message

window.addEventListener("load", function () {
    console.log("Welcome to Supriya's Portfolio!");
});


// Smooth button interaction

const exploreButton = document.querySelector(".btn");

exploreButton.addEventListener("click", function () {
    console.log("Welcome to Supriya's portfolio!");
});


// Simple scroll effect for navbar

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(8, 9, 26, 0.95)";
    } else {
        header.style.background = "rgba(8, 9, 26, 0.85)";
    }

});