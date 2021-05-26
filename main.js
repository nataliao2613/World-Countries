let themeSwitcher = document.querySelector('.theme-switcher')

const switchTheme = () => {
    document.body.classList.toggle('dark-theme')
    document.body.classList.toggle('light-theme')

    themeSwitcher.querySelector('i').classList.toggle('far')
    themeSwitcher.querySelector('i').classList.toggle('fas')
}

themeSwitcher.addEventListener('click', switchTheme)