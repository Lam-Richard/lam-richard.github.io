function initializeHeights() {
    const navigation = document.querySelector("nav");
    const root = document.querySelector(':root');
    root.style.setProperty('--navHeight', `${navigation.clientHeight}px`);
}

window.addEventListener("resize", initializeHeights);
window.addEventListener("DOMContentLoaded", initializeHeights);


function toggleButton () {
    console.log("called");
    const dropdown = document.querySelector(".dropdown-content");
    if (dropdown.style.display != "block") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}

console.log("did this run?!?!");

const downButton = document.getElementById("downButton");
downButton.addEventListener("click", toggleButton);
downButton.addEventListener("enter", toggleButton);


