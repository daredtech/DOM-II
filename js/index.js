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
    element.addEventListener('copy', (event)=>{
        alert("Book a tour with 20% off. PromoCode 20SUMMER");
    })
})

//#6
let h2= document.getElementsByTagName('h2');
let h2Array = Array.from(h2);
h2Array.forEach(element => {
    element.addEventListener('select', (event) => {event.target.style.backgroundColor = "orange"});
})

//#7
let dreamDestination = document.getElementById('dreamDestination');
dreamDestination.addEventListener('focus', (event)=>{
    event.target.style.border = "1px dashed orange";
});

//#8
let dreamInput = dreamDestination.value;
let submitInput = document.getElementsByClassName('dreamBtn');
submitInput[0].addEventListener('click', (event) => {dreamInput = dreamDestination.value, console.log(dreamInput)});

//#9
dreamDestination.addEventListener('keydown', (event) => {console.log("KEYDOWN")});

//#10
let imgCollection = document.getElementsByTagName('img');
imgCollection[1].addEventListener('load', (element) => {event.target.src = "img/vacation-meme.jpg"});

//propagation
const container = document.querySelector('body');
container.addEventListener('click', event => {
  console.log('clicked', event.target)
})

//stop propagation
const header = document.querySelector('header');
header.addEventListener('click', event => {
    event.stopPropagation();
  })

//stop nav from refreshing
let nav = document.getElementsByTagName('nav');
nav[0].addEventListener('click', (element) => {element.preventDefault();});


