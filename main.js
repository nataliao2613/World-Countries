let themeSwitcher = document.querySelector('.theme-switcher')
let filtrationArrow = document.querySelector('.arrow')
let optionsList = document.querySelector('.options')
let filterBox = document.querySelector('.select')
let countriesList = document.querySelector('.container')
let show = false

let countries = []

class Country{
    constructor(name, flag, population, region, capital, nativeName, 
        subregion, topLevelDomain, currencies, languages, borders){
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
    }
}


axios.get('https://restcountries.eu/rest/v2/all')
    .then((response) => {
        response.data.forEach(c => {
        let country = new Country(c.name, c.flag, c.population, c.region, c.capital, c.nativeName, 
            c.subregion, c.topLevelDomain, c.currencies, c.languages, c.borders)
            countries.push(country)
        let box = document.createElement('div')
        box.classList.add('card')
        let flag = document.createElement('img')
        flag.src = c.flag
        let details = document.createElement('div')
        details.classList.add('card__details')
        let name = document.createElement('h4')
        name.classList.add('country-name')
        name.textContent = `${c.name}`
        let population = document.createElement('p')
        population.classList.add('country-population')
        population.innerHTML = `Population: <span> ${c.population} </span>`
        let region = document.createElement('p')
        region.classList.add('country-region')
        region.innerHTML = `Region: <span> ${c.region}</span>` 
        let capital = document.createElement('p')
        capital.classList.add('country-capital')
        capital.innerHTML = `Capital: <span>${c.capital}</span>` 
        details.appendChild(name)
        details.appendChild(population)
        details.appendChild(region)
        details.appendChild(capital)
        box.appendChild(flag)
        box.appendChild(details)
        countriesList.appendChild(box)
    })  
})
.then(() => console.log(countries));




const switchTheme = () => {
    document.body.classList.toggle('dark-theme')
    document.body.classList.toggle('light-theme')

    themeSwitcher.querySelector('i').classList.toggle('far')
    themeSwitcher.querySelector('i').classList.toggle('fas')
}

const showOptions = () => {
    if(!show){
        optionsList.style.display = 'block'  
        show = !show
    } 
    else {
        optionsList.style.display = 'none'
        show = !show
    } 
}

optionsList.onmouseleave = () => {
    optionsList.style.display = 'none'
        show = !show
}


themeSwitcher.addEventListener('click', switchTheme)
filtrationArrow.addEventListener('click', showOptions)