const cartBtn = document.querySelector(".cart-btn")
const modal = document.querySelector(".dialog-cart")
const fecharBtn = document.querySelector(".cart-close")


cartBtn.onclick = function() {
    modal.showModal()
}

fecharBtn.onclick = function() {
    modal.close() 
}

// Adicionar Item ao carrinho

let addCart = document.querySelector("#addcart-btn")
let aviso = document.querySelector("#aviso-span")
let cart = document.querySelector("#infoCart")
let accCart = 0
let carrinho = document.querySelector(".dialog-cart")

addCart.addEventListener('click', function(){
    aviso.classList.remove('cart-vazio')
    aviso.classList.add('cart-cheio')
  })

addCart.addEventListener('click', function(){
    cart.classList.remove('infoCartVazio')
    cart.classList.add('cart-item')
})

  