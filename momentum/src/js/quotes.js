import json from '../assets/quotes.json'
import { getRandomNum } from './slider'
import { selectLanguage } from './storage'

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');
let selectLanguageQuote  = 'en'
if ((sessionStorage.getItem("selectLanguageQuote"))) {
    selectLanguageQuote = sessionStorage.getItem("selectLanguageQuote")
}
const selectedLanguage = () => {
    selectLanguageQuote = selectLanguage.value
        getQuotes()
        selectLanguage.addEventListener("click", function () {
        sessionStorage.setItem("selectLanguageQuote", selectLanguageQuote);
    })
}
selectLanguage.addEventListener('click', selectedLanguage)

async function getQuotes() {
    if (selectLanguageQuote === 'en') {
        // let quotes = "https://type.fit/api/quotes";
        let quotes = "https://www.breakingbadapi.com/api/quotes";
        const res = await fetch(quotes);
        const data = await res.json();     
        const i = getRandomNum(20)
        quote.textContent = data[i].quote;
        author.textContent = data[i].author;
    }
    else if (selectLanguageQuote === 'ru') {
        let quotes = json;
        const i = getRandomNum(20)
    quote.textContent = quotes[i].text;
    author.textContent = quotes[i].author;
    }
}
getQuotes()

const nextQuote = () => {
    selectedLanguage()
}

changeQuote.addEventListener('click', nextQuote)
