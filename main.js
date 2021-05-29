import Country, {createCountryCard} from './country.js'

let filtrationArrow = document.querySelector('.arrow')
let optionsList = document.querySelector('.options')
let filterBy = document.querySelectorAll('.options li')
let filterBox = document.querySelector('.select')
let countriesList = document.querySelector('.container')
let searchBox = document.querySelector('.filtration__search-bar input')

let show = false
let countries = []
let cards = []

axios.get('https://restcountries.eu/rest/v2/all')
    .then((response) => {
        response.data.forEach(c => {
            let country = new Country(c.name, c.flag, c.population, c.region, c.capital, c.nativeName, 
                c.subregion, c.topLevelDomain, c.currencies, c.languages, c.borders, c.alpha2Code)
                countries.push(country)
            let box = document.createElement('div')
            box.classList.add('card')
            box.innerHTML = createCountryCard(c)
            countriesList.appendChild(box)
        })  
    })
    .then(() => {
        cards = document.querySelectorAll('.card')
        cards.forEach((c, id) => {
            c.addEventListener('click', () => {
                location.href = `/country-page.html`
                localStorage.setItem('countryCode', countries[id].code)
                
            })
        })
    });


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

const search = (e) => {
    let searchValue = e.target.value.toLowerCase()
    filterBox.textContent = 'Filter by Region'

    countriesList.textContent = ''
    countries.filter((c, id) => {
        if(c.name.toLowerCase().includes(searchValue)){
            let selected = cards[id]
            countriesList.appendChild(selected)
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
        countries.filter((c, id) => {
            if(c.region.toLowerCase().includes(region.toLowerCase())){
                let selected = cards[id]
                countriesList.appendChild(selected)
            }
        })
    })
})


filtrationArrow.addEventListener('click', showOptions)
filterBox.addEventListener('click', showOptions)
searchBox.addEventListener('input', search)