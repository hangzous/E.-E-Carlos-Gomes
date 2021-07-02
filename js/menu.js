
const hamburger = document.querySelector("#mobile_menu")
const header_links = document.querySelector("header .default")
const close_menu = document.querySelector("#close_menu")

hamburger.addEventListener('click', () => {
    header_links.classList.toggle('active')
    document.body.style.overflow = 'hidden'
})

close_menu.addEventListener('click', () => {
    header_links.classList.toggle('active')
    document.body.style.overflowY = 'scroll';
})