let themeSwitcher = document.querySelector('.theme-switcher')
let filtrationArrow = document.querySelector('.arrow')
let optionsList = document.querySelector('.options')
let filterBox = document.querySelector('.select')
let countriesList = document.querySelector('.container')
let show = false

let countries = []
axios.get('https://restcountries.eu/rest/v2/all')
    .then((response) => {
        console.log(response.data)
        response.data.forEach(c => {
        let box = document.createElement('div')
        box.classList.add('card')
        let flag = document.createElement('img')
        flag.src = c.flag
        let details = document.createElement('div')
        details.classList.add('card__details')
        let name = document.createElement('p')
        name.classList.add('country-name')
        name.textContent = `${c.name}`
        let population = document.createElement('p')
        population.classList.add('country-population')
        population.textContent = `Population: ${c.population}` 
        let region = document.createElement('p')
        region.classList.add('country-region')
        region.textContent = `Region: ${c.region}` 
        let capital = document.createElement('p')
        capital.classList.add('country-capital')
        capital.textContent = `Capital: ${c.capital}` 
        details.appendChild(name)
        details.appendChild(population)
        details.appendChild(region)
        details.appendChild(capital)
        box.appendChild(flag)
        box.appendChild(details)
        countriesList.appendChild(box)
    });
})

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