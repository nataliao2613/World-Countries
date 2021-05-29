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