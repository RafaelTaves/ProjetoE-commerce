<<<<<<< HEAD
//Modal Registro

let modalBtn = document.querySelector('.modal-btn')
let modalBg = document.querySelector('.modal-bg')
let modalClose = document.querySelector('.modal-close')

modalBtn.addEventListener('click', function(){
  modalBg.classList.add('bg-active')
  event.preventDefault();
})
modalClose.addEventListener('click', function(){
  modalBg.classList.remove('bg-active')
=======
//Modal Registro

let modalBtn = document.querySelector('.modal-btn')
let modalBg = document.querySelector('.modal-bg')
let modalClose = document.querySelector('.modal-close')

modalBtn.addEventListener('click', function(){
  modalBg.classList.add('bg-active')
  event.preventDefault();
})
modalClose.addEventListener('click', function(){
  modalBg.classList.remove('bg-active')
>>>>>>> 4982c55e026e43916becbfa195a3dcbc070d5102
})