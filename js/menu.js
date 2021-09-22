const hamburger = document.querySelector("#mobile_menu")
const header_links = document.querySelector("header .default")
const close_menu = document.querySelector("#close_menu")


hamburger.addEventListener('click', open_menu) 

function open_menu() {
    header_links.classList.toggle('active')
    document.body.style.overflowY = 'hidden'
}

close_menu.addEventListener('click', x_menu)

function x_menu() {
    header_links.classList.toggle('active')
    document.body.style.overflowY = 'scroll'
}








