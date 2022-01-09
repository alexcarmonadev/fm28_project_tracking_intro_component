/* ------------MOBILE MENU------------ */
const btnMenu = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-menu');

let menuOpen = false;

const openMenu = () => {
  if (!menuOpen) {
    btnMenu.src = 'assets/images/icon-close.svg';
    btnMenu.style.width = '1.3rem';
    menu.style.display = 'block';
    document.body.style.position = 'fixed';
    menuOpen = true;
  } else {
    btnMenu.src = 'assets/images/icon-hamburger.svg';
    menu.style.display = 'none';
    document.body.style.position = 'initial';
    window.location.reload();
    menuOpen = false;
  }
};

btnMenu.addEventListener('click', openMenu);