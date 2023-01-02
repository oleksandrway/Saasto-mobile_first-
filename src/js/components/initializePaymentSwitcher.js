const monthlySum = 30
const yearlySum = 250
const delay = 300

const paymentSwitcher = document.querySelector('.price__payment-switcher')
const paymentSum = document.querySelector('.price__sum--main')
const paymentNumber = document.querySelector('.price__sum-number')
const paymentType = document.querySelector('.price__payment-type')

function initializePaymentSwitcher() {
  function changePayment(newSum, newType) {
    paymentSum.classList.add('price__sum--hidden')
    setTimeout(() => {
      paymentNumber.innerText = newSum
      paymentType.innerText = newType
      paymentSum.classList.remove('price__sum--hidden')
    }, delay)
  }

  paymentSwitcher.addEventListener('input', () => {
    if (paymentSwitcher.checked)
      changePayment(yearlySum, '/Yearly')

    else
      changePayment(monthlySum, '/Monthly')
  })
}

export { initializePaymentSwitcher }
