let burger = document.querySelector('.menu__btn')
let menu = document.querySelector('.header__nav')
let menuLinks = document.querySelectorAll('.header__links')
let tabsBtn = document.querySelectorAll('.work__item-btn')
let tabsItem = document.querySelectorAll('.work__article')

burger.addEventListener('click',

  function () {

    burger.classList.toggle('btn__active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop__scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('btn__active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop__scroll');
  })
})


tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('work__btn--active') });
    e.currentTarget.classList.add('work__btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('work__active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('work__active');
  });
});

const container = document.querySelector(".container")
const swiper = new Swiper('.hero__swiper', {
  // Default parameters

  speed: 300,
  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true
  }

})

