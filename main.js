import Country, {createCountryCard, loadContent} from './country.js'

let filtrationArrow = document.querySelector('.arrow')
let optionsList = document.querySelector('.options')
let filterBy = document.querySelectorAll('.options li')
let filterBox = document.querySelector('.select')
let countriesList = document.querySelector('.container')
let searchBox = document.querySelector('.filtration__search-bar input')
let show = false
let countries = loadContent()

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


filtrationArrow.addEventListener('click', showOptions)
filterBox.addEventListener('click', showOptions)
searchBox.addEventListener('input', search)