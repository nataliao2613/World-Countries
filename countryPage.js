import Country, {createCountryCard} from './country.js'

let backButton = document.querySelector('.back-button')
let countryCode = localStorage.getItem('countryCode')

axios.get(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
.then((response) => {
    console.log(response.data)
})


backButton.addEventListener('click', () => {
    location.href = '/index.html'
    localStorage.clear()
})