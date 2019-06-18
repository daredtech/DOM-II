// Your code goes here

let navTitle = document.getElementsByClassName('nav-link');
let navTitleArray = Array.from(navTitle);

//#
navTitleArray .forEach(element => {
    element.addEventListener('mouseover', (event) => {event.target.style.color = "orange"});
    element.addEventListener('mouseout', (event) => {event.target.style.color = "black"});
});





