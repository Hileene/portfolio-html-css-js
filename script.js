// Here we targetting these 2 elements and whenever we click on
//one of these is going to add or remove the "open" class of that element and that class
// is going to have some styling

function toggleMenu() {
  const menu = document.querySelector('.menu-links')
  const icon = document.querySelector('.hamburger-icon')
  menu.classList.toggle('open')
  icon.classList.toggle('open')
}

//Slider

let slide_index = 1

displaySlides(slide_index)

function nextSlide(n) {
  displaySlides((slide_index += n))
}
function currentSlide(n) {
  displaySlides((slide_index = n))
}
function displaySlides(n) {
  var i
  var slides = document.getElementsByClassName('showSlide')
  if (n > slides.length) {
    slide_index = 1
  }
  if (n < 1) {
    slide_index = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  slides[slide_index - 1].style.display = 'block'
}
