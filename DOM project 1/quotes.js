//Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: `"amen"`,
        person:`Lord Jesus`
    },
    {
        quote: `"yes"`,
        person:`Lord Jesus`
    },
    {
        quote: `"nnnno"`,
        person:`Lord Jesus`
    },
    {
        quote: `"asee"`,
        person:`Lord Jesus`
    },
    {
        quote: `"come"`,
        person:`Lord Jesus`
    },
    {
        quote: `"game"`,
        person:`Lord Jesus`
    },
    {
        quote: `"amenity"`,
        person:`Lord Jesus`
    },
    {
        quote: `"alien"`,
        person:`Lord Jesus`
    },
    {
        quote: `"cynthia"`,
        person:`Lord Jesus`
    },
    {
        quote: `"makena"`,
        person:`Lord Jesus`
    }
];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
