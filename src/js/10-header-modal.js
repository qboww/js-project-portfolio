export function initMobileModal() {
  const menuBox = document.querySelector('.menu-box');
  const buttonMenu = document.querySelector('.button-menu');
  const buttonClose = document.querySelector('.button-mob-menu');
  const body = document.querySelector('body');

  buttonMenu.addEventListener('click', function () {
    menuBox.classList.toggle('visually-hidden');
    menuBox.classList.add('is-open');
    toggleBodyScroll();
  });

  buttonClose.addEventListener('click', function () {
    menuBox.classList.remove('is-open');
    setTimeout(() => {
      menuBox.classList.toggle('visually-hidden');
    }, 500);
    toggleBodyScroll();
  });

  document.addEventListener('click', function (event) {
    if (
      event.target.classList.contains('menu-link') ||
      event.target.classList.contains('modal-order-btn')
    ) {
      menuBox.classList.add('visually-hidden');
      toggleBodyScroll();
    }
  });

  function toggleBodyScroll() {
    body.classList.toggle('modal-open');
  }
}
