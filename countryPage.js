import Country, {createCountryCard, loadContent} from './country.js'

let countries = loadContent()
let backButton = document.querySelector('.back-button')

backButton.addEventListener('click', () => {
    location.href = '/index.html'
    localStorage.clear()
})