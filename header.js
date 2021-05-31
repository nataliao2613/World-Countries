export default function switchTheme(){
    let currentTheme = localStorage.getItem('theme') 
    let page = document.querySelector('body')
    let themeSwitcher = document.querySelector('.theme-switcher')

    if(currentTheme === null){
        localStorage.setItem('theme', 'light')
        currentTheme = localStorage.getItem('theme')
        console.log('jestem')
    } 

    if(currentTheme === 'light'){
        page.classList.toggle('light-theme')
        themeSwitcher.querySelector('i').classList.toggle('far')
    } else {
        page.classList.toggle('dark-theme')
        themeSwitcher.querySelector('i').classList.toggle('fas')
    }

    console.log(currentTheme)
    
    themeSwitcher.addEventListener('click', () => {
        if(currentTheme === 'light'){
            page.classList.toggle('light-theme')
            page.classList.toggle('dark-theme')
            themeSwitcher.querySelector('i').classList.toggle('far')
            themeSwitcher.querySelector('i').classList.toggle('fas')
            localStorage.setItem('theme', 'dark')
        } else {
            page.classList.toggle('light-theme')
            page.classList.toggle('dark-theme')
            themeSwitcher.querySelector('i').classList.toggle('far')
            themeSwitcher.querySelector('i').classList.toggle('fas')
            localStorage.setItem('theme', 'light')
        }
    // document.body.classList.toggle('dark-theme')
    // document.body.classList.toggle('light-theme')

    // themeSwitcher.querySelector('i').classList.toggle('far')
    // themeSwitcher.querySelector('i').classList.toggle('fas')
})
}

export const clickOnHeader = () => {
    let header = document.querySelector('header h3')
    header.addEventListener('click', () => {
        location.href = 'index.html'
        localStorage.removeItem('countryCode')
    })
}
