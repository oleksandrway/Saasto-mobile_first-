const headerMenuBtn = document.querySelector('.header__btn-open')
const headerMenuClose = document.querySelector('.header__btn-close')
const headerMenuWrapper = document.querySelector('.header__menu-wrapper')
const headerMenuOverlay = document.querySelector('.header__menu-overlay')

function toggleMenu() {
  headerMenuWrapper.classList.toggle('header__menu-wrapper--active')
  document.body.classList.add('no-scroll')
}

function headerMenu() {
  headerMenuBtn.addEventListener('click', () => {
    toggleMenu()
    // headerMenuWrapper.classList.toggle('header__menu-wrapper--active')
  })

  headerMenuClose.addEventListener('click', () => {
    toggleMenu()

    // headerMenuWrapper.classList.toggle('header__menu-wrapper--active')
  })

  headerMenuOverlay.addEventListener('click', (e) => {
    if (e.target === headerMenuOverlay)
      toggleMenu()

    // headerMenuWrapper.classList.toggle('header__menu-wrapper--active')
  })
}

// const headerMenu = document.querySelector('.header-menu')

// function closeHeaderMenu(e) {
//   if ((!e.target.closest('.header-menu') && !e.target.closest('.header__menu-btn'))
//     || e.target.closest('.header-menu__link')) {
//     headerMenuWrapper.classList.remove('header__menu-wrapper--active')
//     document.removeEventListener('click', closeHeaderMenu)
//     headerMenu.style.maxWidth = null
//     document.body.classList.remove('no-scroll')
//   }
// }
export { headerMenu }
