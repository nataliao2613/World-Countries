import switchTheme, {clickOnHeader} from './header.js'

switchTheme()
clickOnHeader()

let backButton = document.querySelector('.back-button')
let flag = document.querySelector('.section img')
let name = document.querySelector('.details h2')
let nativeName = document.querySelector('.native-name')
let population = document.querySelector('.population')
let region = document.querySelector('.region')
let subregion = document.querySelector('.subregion')
let capital = document.querySelector('.capital')
let domain = document.querySelector('.domain')
let currencies = document.querySelector('.currencies')
let languages = document.querySelector('.languages')
let borders = document.querySelector('.details__borders')
let countrySection = document.querySelector('.section')

let countryCode = localStorage.getItem('countryCode')
let country

countrySection.style.display = 'none'
let loadingHeader = document.createElement('h1')
loadingHeader.style.display = 'block'
loadingHeader.textContent = 'Loading .... '
document.querySelector('main').appendChild(loadingHeader)

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

    if(country.borders.length !== 0){
        borders.textContent = 'Border Countries:'
        country.borders.map((c) => {
            axios.get(`https://restcountries.eu/rest/v2/alpha/${c}`)
            .then((response) => {
                let borderCountry = response.data
                let borderBox = document.createElement('button')
                let countryName = document.createElement('a')
                countryName.textContent = borderCountry.name
                countryName.href = `country-page.html`
                
                countryName.addEventListener('click', () => {
                    localStorage.setItem('countryCode', c)    
                })
                borderBox.appendChild(countryName)
                borders.appendChild(borderBox)
            })
            .catch(err => {
                loadingHeader.textContent = 'Ups... Something went wrong!'
                countrySection.style.display = 'none'
                loadingHeader.style.display = 'block'
                console.log(err);
            })
        })
    }
})
.then(() => {
    setTimeout(() => {
        loadingHeader.style.display = 'none'
        countrySection.style.display = 'flex'
    }, 500)

})
.catch(err => {
    loadingHeader.textContent = 'Ups... Something went wrong!'
    console.log(err);
})


backButton.addEventListener('click', () => {
    location.href = 'index.html'
    localStorage.removeItem('countryCode')
})