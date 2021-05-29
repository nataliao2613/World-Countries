import Country, {createCountryCard} from './country.js'

let themeSwitcher = document.querySelector('.theme-switcher')
let filtrationArrow = document.querySelector('.arrow')
let optionsList = document.querySelector('.options')
let filterBy = document.querySelectorAll('.options li')
let filterBox = document.querySelector('.select')
let countriesList = document.querySelector('.container')
let searchBox = document.querySelector('.filtration__search-bar input')
let cards = document.querySelectorAll('.container div')
let show = false
let countries = []

axios.get('https://restcountries.eu/rest/v2/all')
    .then((response) => {
        response.data.forEach(c => {
        let country = new Country(c.name, c.flag, c.population, c.region, c.capital, c.nativeName, 
            c.subregion, c.topLevelDomain, c.currencies, c.languages, c.borders)
            countries.push(country)
        let box = document.createElement('div')
        box.classList.add('card')
        box.innerHTML = createCountryCard(c)
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
    filterBox.textContent = 'Filter by Region'

    countriesList.textContent = ''
    countries.filter((c) => {
        if(c.name.toLowerCase().includes(searchValue)){
            let box = document.createElement('div')
            box.classList.add('card')
            box.innerHTML = createCountryCard(c)
            countriesList.appendChild(box)
        }
    })
}

optionsList.onmouseleave = () => {
    optionsList.style.display = 'none'
        show = !show
}

filterBy.forEach(option => {
    option.addEventListener('click', () => {
        let region = option.id
        filterBox.textContent = region
        optionsList.style.display = 'none'
        countriesList.textContent = ''
        countries.filter((c) => {
            if(c.region.toLowerCase().includes(region.toLowerCase())){
                let box = document.createElement('div')
                box.classList.add('card')
                box.innerHTML = createCountryCard(c)
                countriesList.appendChild(box)
            }
        })
    })
})


themeSwitcher.addEventListener('click', switchTheme)
filtrationArrow.addEventListener('click', showOptions)
filterBox.addEventListener('click', showOptions)
searchBox.addEventListener('input', search)