const quotes = [
    {
        quote: "Be yourself, everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "Always forgive your enemies, nothing annoys them so much.",
        author: "Oscar Wilde",
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "It is better to be hated for what you are than to be loved for what you are not.",
        author: "Andre Gide",
    },
    {
        quote: "We are all in the gutter, but some of us are looking at the stars.",
        author: "Oscar wilde",
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas A. Edison",
    },
    {
        quote: "If you can't explain it to a six year old, you don't understand it yourself.",
        author: "Albert Einstein",
    },
    {
        quote: "Everything you can imagine is real.",
        author: "Pablo Picasso",
    },
    {
        quote: "If you judge people, you have no time to love them.",
        author: "Mother Teresa",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// Math.random() -> 0 ~ 1 사이의 랜덤한 숫자
// Math.round() -> 반올림
// Math.ceil() -> 올림
// Math.floor() -> 내림

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;