export default function switchTheme(){
    let themeSwitcher = document.querySelector('.theme-switcher')
    themeSwitcher.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')
    document.body.classList.toggle('light-theme')

    themeSwitcher.querySelector('i').classList.toggle('far')
    themeSwitcher.querySelector('i').classList.toggle('fas')
})
}

export const clickOnHeader = () => {
    let header = document.querySelector('header h3')
    header.addEventListener('click', () => {
        location.href = 'index.html'
    })
}
