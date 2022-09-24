const headerMenuBtn = document.querySelector('.header__menu-btn')
const headerMenuWrapper = document.querySelector('.header__menu-wrapper')
const headerMenu = document.querySelector('.header-menu')

function closeHeaderMenu(e) {
  if ((!e.target.closest('.header-menu') && !e.target.closest('.header__menu-btn'))
    || e.target.closest('.header-menu__link')) {
    headerMenuWrapper.classList.remove('header__menu-wrapper--active')
    document.removeEventListener('click', closeHeaderMenu)
    headerMenu.style.maxHeight = null
    document.body.classList.remove('no-scroll')
  }
}

headerMenuBtn.addEventListener('click', () => {
  headerMenuWrapper.classList.toggle('header__menu-wrapper--active')

  if (headerMenu.style.maxHeight) {
    headerMenu.style.maxHeight = null
    document.removeEventListener('click', closeHeaderMenu)
    document.body.classList.remove('no-scroll')
  }
  else {
    headerMenu.style.maxHeight = `${headerMenu.scrollHeight}px`
    document.addEventListener('click', closeHeaderMenu)
    document.body.classList.add('no-scroll')
  }
})
