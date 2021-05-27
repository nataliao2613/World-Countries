let themeSwitcher = document.querySelector('.theme-switcher')
let filtrationArrow = document.querySelector('.arrow')
let optionsList = document.querySelector('.options')
let filterBox = document.querySelector('.select')
let countriesList = document.querySelector('.container')
let show = false

let countries = []

axios.get('https://restcountries.eu/rest/v2/all')
.then((response) => {
    response.data.forEach(c => {
        countries.push(c)
    });
})

console.log(countries)

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