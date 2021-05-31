import switchTheme, {clickOnHeader} from './header.js'

switchTheme()
clickOnHeader()

let backButton = document.querySelector('.back-button')
let flag = document.querySelector('.section img')
let name = document.querySelector('.details h1')
let nativeName = document.querySelector('.native-name')
let population = document.querySelector('.population')
let region = document.querySelector('.region')
let subregion = document.querySelector('.subregion')
let capital = document.querySelector('.capital')
let domain = document.querySelector('.domain')
let currencies = document.querySelector('.currencies')
let languages = document.querySelector('.languages')
let borders = document.querySelector('.details__borders')

let countryCode = localStorage.getItem('countryCode')
let country

axios.get(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
.then((response) => {
    country = response.data
})
.then(() => {
    flag.src = country.flag
    name.textContent = country.name
    nativeName.textContent = country.nativeName
    population.textContent = country.population
    region.textContent = country.region
    subregion.textContent = country.subregion
    capital.textContent = country.capital
    domain.textContent = country.topLevelDomain
    country.currencies.map((c, id) => {
        id === 0 ? 
        currencies.textContent += `${c.name}` : currencies.textContent += `, ${c.name}`

    })
    country.languages.map((c, id) => {
        id === 0 ? 
        languages.textContent += `${c.name}` : languages.textContent += `, ${c.name}`
    })
    country.borders.map((c) => {
        axios.get(`https://restcountries.eu/rest/v2/alpha/${c}`)
        .then((response) => {
            let borderCountry = response.data
            let borderSpan = document.createElement('span')
            borderSpan.textContent = borderCountry.name
            borderSpan.addEventListener('click', () => {
                localStorage.setItem('countryCode', c)
                location.href = `/country-page.html`
            })
            borders.appendChild(borderSpan)
        })

    })
})

backButton.addEventListener('click', () => {
    location.href = '/index.html'
    localStorage.clear()
})