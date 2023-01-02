const headerMenuBtn = document.querySelector('.header__btn-open')
const headerMenuClose = document.querySelector('.header__btn-close')
const headerMenuWrapper = document.querySelector('.header__menu-wrapper')
const headerMenuOverlay = document.querySelector('.header__menu-overlay')

function toggleMenu() {
  headerMenuWrapper.classList.toggle('header__menu-wrapper--active')
  document.body.classList.toggle('no-scroll')
}

function initializeHeaderMenu() {
  headerMenuBtn.addEventListener('click', () => {
    toggleMenu()
  })

  headerMenuClose.addEventListener('click', () => {
    toggleMenu()
  })

  headerMenuOverlay.addEventListener('click', (e) => {
    if (e.target === headerMenuOverlay)
      toggleMenu()
  })
}

export { initializeHeaderMenu }
