const menuBar = document.querySelector(".menu-bar")
const hiddenMenu = document.querySelector(".hidden-menu")
const toggleMenu = () => {
   menuBar.classList.toggle("close-bar")
   hiddenMenu.classList.toggle("close")
}
menuBar.addEventListener("click", toggleMenu)



const bigPicLeft = document.querySelectorAll(".first-left")
const mediumPicRight = document.querySelectorAll(".first-right-inside1")
const smallPicRight = document.querySelectorAll(".first-right-inside2")

const bigPicRight = document.querySelectorAll(".second-right")
const mediumPicLeft = document.querySelectorAll(".second-left-inside1")
const smallPicLeft = document.querySelectorAll(".second-left-inside2")

// -----------------First Floor------------------
bigPicLeft[0].style.backgroundImage = "url(../img/skidive3.jpg)"
mediumPicRight[0].style.backgroundImage = "url(../img/skidive2.jpg)"
smallPicRight[0].style.backgroundImage = "url(../img/skidive1.jpg)"


// -----------------Second Floor------------------
bigPicRight[0].style.backgroundImage = "url(../img/roma1.jpg)"
mediumPicLeft[0].style.backgroundImage = "url(../img/roma2.jpg)"
smallPicLeft[0].style.backgroundImage = "url(../img/roma3.jpg)"


// -----------------Third Floor------------------
bigPicLeft[1].style.backgroundImage = "url(../img/hollywood1.jpg)"
mediumPicRight[1].style.backgroundImage = "url(../img/hollywood3.jpg)"
smallPicRight[1].style.backgroundImage = "url(../img/hollywood2.jpg)"


// -----------------Forth Floor------------------
bigPicRight[1].style.backgroundImage = "url(../img/shitara3.jpg)"
mediumPicLeft[1].style.backgroundImage = "url(../img/shitara2.jpg)"
smallPicLeft[1].style.backgroundImage = "url(../img/shitara1.jpg)"