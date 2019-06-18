// Your code goes here

let navTitle = document.getElementsByClassName('nav-link');
let navTitleArray = Array.from(navTitle);

//#1 #2
navTitleArray .forEach(element => {
    element.addEventListener('mouseover', (event) => {event.target.style.color = "orange"});
    element.addEventListener('mouseout', (event) => {event.target.style.color = "black"});
});

//#3
let btn = document.getElementsByClassName('btn');
let btnArray = Array.from(btn);
btnArray.forEach(element => {
    element.addEventListener('click', (event) => {event.target.style.background = "orange", event.target.style.color = "black"});
});

//#4
btnArray.forEach(element => {
    element.addEventListener('click', (event) => {event.target.parentElement.style.border = "thick solid orange", event.target.parentElement.style.padding = "1%"});
});

//#5
let address = document.getElementsByTagName('p');
let addressArray = Array.from(address);
addressArray.forEach(element => {
    element.addEventListener('copy', function(event){
        alert("Book a tour with 20% off. PromoCode 20SUMMER");
    })
})

//#6
let h2= document.getElementsByTagName('h2');
let h2Array = Array.from(h2);
h2Array.forEach(element => {
    element.addEventListener('select', (event) => {event.target.style.background = "orange"});
})


// var contactForm = document.body.createElement("contact-form");
// contactForm.style.display.none;






//stop nav from refreshing
let nav = document.getElementsByTagName('nav');
nav[0].addEventListener('click', (element) => {element.preventDefault();});

