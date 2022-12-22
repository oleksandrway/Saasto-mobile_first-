const headerMenuBtn = document.querySelector('.header__btn-open')
const headerMenuClose = document.querySelector('.header__btn-close')
const headerMenuWrapper = document.querySelector('.header__menu-wrapper')
const headerMenuOverlay = document.querySelector('.header__menu-overlay')

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

function headerMenu() {
  headerMenuBtn.addEventListener('click', () => {
    headerMenuWrapper.classList.toggle('header__menu-wrapper--active')
  })

  headerMenuClose.addEventListener('click', () => {
    headerMenuWrapper.classList.toggle('header__menu-wrapper--active')
  })

  headerMenuOverlay.addEventListener('click', (e) => {
    if (e.target === headerMenuOverlay)
      headerMenuWrapper.classList.toggle('header__menu-wrapper--active')
  })
}

export { headerMenu }
