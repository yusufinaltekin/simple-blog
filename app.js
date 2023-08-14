const hamburger = document.querySelector(".hamburger")
const close = document.querySelector(".close")
const nav = document.querySelector("nav")
const body = document.querySelector("body");
const navLink = document.querySelectorAll("nav>ul>li");
const toTop = document.querySelector(".toTop");

window.addEventListener("scroll", () => {
    ;
    if (window.scrollY > 100) {
        toTop.style.display = "block"
    }
    else {
        toTop.style.display = "none"
    }
    console.log(window)
})

hamburger.addEventListener("click", () => {
    nav.style.right = "0px"
    body.style.overflowY = "hidden"
})

close.addEventListener("click", () => {
    navClose()
})
const navClose = () => {
    nav.style.right = "-100%"
    body.style.overflowY = "auto"
    console.log("asd");
}
navLink.forEach(item => {
    item.addEventListener("click", navClose)
})