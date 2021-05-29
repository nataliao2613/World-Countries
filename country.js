import switchTheme, {clickOnHeader} from './header.js'

switchTheme()
clickOnHeader()

export default class Country{
    constructor(name, flag, population, region, capital, nativeName, 
        subregion, topLevelDomain, currencies, languages, borders, code){
            this.name = name
            this.flag = flag
            this.population = population
            this.region = region
            this.capital = capital
            this.nativeName = nativeName
            this.subregion = subregion
            this.topLevelDomain = topLevelDomain
            this.currencies = currencies
            this.languages = languages
            this.borders = borders
            this.code = code
    }
}

// export const loadContent = () => {
//     let countries = []
//     // let countriesList = document.querySelector('.container')
//     axios.get('https://restcountries.eu/rest/v2/all')
//     .then((response) => {
//         response.data.forEach(c => {
//             let country = new Country(c.name, c.flag, c.population, c.region, c.capital, c.nativeName, 
//                 c.subregion, c.topLevelDomain, c.currencies, c.languages, c.borders)
//                 countries.push(country)
//             // let box = document.createElement('div')
//             // box.classList.add('card')
//             // box.innerHTML = createCountryCard(c)
//             // countriesList.appendChild(box)
//         })  
//     })
//     // .then(() => {
//     //     let cards = document.querySelectorAll('.card')
//     //     cards.forEach((c, id) => {
//     //         c.addEventListener('click', () => {
//     //             location.href = `/country-page.html`
//     //             localStorage.setItem('countryId', id)
//     //         })
//     //     })
//     // });
//     return countries
// }

export const createCountryCard = (country) => {
    return (`
    <img src="${country.flag}" alt="flag_icon"/>
    <div class="card__details">
    <h4>${country.name}</h4>
    <p class="country-population">Population: <span> ${country.population} </span></p>
    <p class="country-region">Region: <span> ${country.region} </span></p>
    <p class="country-capital">Capital: <span> ${country.capital} </span></p>
    </div>`
    )
}