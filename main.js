let themeSwitcher = document.querySelector('.theme-switcher')
let filtrationArrow = document.querySelector('.arrow')
let optionsList = document.querySelector('.options')
let filterBox = document.querySelector('.select')
let countriesList = document.querySelector('.container')
let searchBox = document.querySelector('.filtration__search-bar input')
let cards = document.querySelectorAll('.container div')
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
        box.innerHTML = `
        <img src="${c.flag}" alt="flag_icon"/>
        <div class="card__details">
        <h4>${c.name}</h4>
        <p class="country-population">Population: <span> ${c.population} </span></p>
        <p class="country-region">Region: <span> ${c.region} </span></p>
        <p class="country-capital">Capital: <span> ${c.capital} </span></p>
        </div>`
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

cards.forEach((c) => {
    c.addEventListener('click', () => console.log(c))
})

const search = (e) => {
    let searchValue = e.target.value.toLowerCase()
    console.log(searchValue)

    countriesList.textContent = ''
    countries.filter((c) => {
        if(c.name.toLowerCase().includes(searchValue)){
            console.log(c.name)
            let box = document.createElement('div')
            box.classList.add('card')
            box.innerHTML = `
            <img src="${c.flag}" alt="flag_icon"/>
            <div class="card__details">
            <h4>${c.name}</h4>
            <p class="country-population">Population: <span> ${c.population} </span></p>
            <p class="country-region">Region: <span> ${c.region} </span></p>
            <p class="country-capital">Capital: <span> ${c.capital} </span></p>
            </div>`
            countriesList.appendChild(box)
        }
    })
}

optionsList.onmouseleave = () => {
    optionsList.style.display = 'none'
        show = !show
}

themeSwitcher.addEventListener('click', switchTheme)
filtrationArrow.addEventListener('click', showOptions)
searchBox.addEventListener('input', search)