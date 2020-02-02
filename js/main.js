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
bigPicLeft[0].style.backgroundImage = "url(./images/skidive3.png)"
mediumPicRight[0].style.backgroundImage = "url(./images/skidive2.png)"
smallPicRight[0].style.backgroundImage = "url(./images/skidive1.png)"


// -----------------Second Floor------------------
bigPicRight[0].style.backgroundImage = "url(./images/roma1.png)"
mediumPicLeft[0].style.backgroundImage = "url(./images/roma2.png)"
smallPicLeft[0].style.backgroundImage = "url(./images/roma3.png)"


// -----------------Third Floor------------------
bigPicLeft[1].style.backgroundImage = "url(./images/hollywood1.png)"
mediumPicRight[1].style.backgroundImage = "url(./images/hollywood3.png)"
smallPicRight[1].style.backgroundImage = "url(./images/hollywood2.png)"


// -----------------Forth Floor------------------
bigPicRight[1].style.backgroundImage = "url(./images/shitara3.png)"
mediumPicLeft[1].style.backgroundImage = "url(./images/shitara2.png)"
smallPicLeft[1].style.backgroundImage = "url(./images/shitara1.png)"