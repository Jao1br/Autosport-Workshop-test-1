const wraper = document.querySelector('.wrapper')
const loginLink = document.querySelector('.Login-link')
const registerLink = document.querySelector('.register-Link')
const btnPopup = document.querySelector('.btnLogin-popup')

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active')


})
loginLink.addEventListener('click', ()=> {
    wraper.classList.remove('active')
})

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup')
})