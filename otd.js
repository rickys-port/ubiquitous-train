let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");


const url = "https://api.quotable.io/random";


let getQuote = () => {
   fetch(url)
       .then((data) => data.json())
       .then((item) => {
           quote.innerText = item.content;
           author.innerText = "-" + item.author;
       });
};

function playGoatSound() {
           // Create an audio element
           var audio = new Audio('https://freesound.org/people/Medartimus/sounds/217542/');
           audio.play();
       }

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);