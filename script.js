// Here we targetting these 2 elements and whenever we click on
//one of these is going to add or remove the "open" class of that element and that class
// is going to have some styling

function toggleMenu() {
  const menu = document.querySelector('.menu-links')
  const icon = document.querySelector('.hamburger-icon')
  menu.classList.toggle('open')
  icon.classList.toggle('open')
}
