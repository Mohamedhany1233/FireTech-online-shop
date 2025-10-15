let checkout_cart_products = document.querySelector('.cart-products')

let allCartProducts = products_cart


function checkoutProducts() {
        for (let i = 0; i<allCartProducts.length; i++) {
            if (checkout_cart_products) {
            checkout_cart_products.innerHTML+= `
            <div class="cart-product-checkout">
                <img src="${allCartProducts[i].img}" alt="">
                
                <div class="content">
                    <h4>${allCartProducts[i].name}</h4>
                    <p class="price-cart">Price : <span>$${allCartProducts[i].price}</span></p>
                </div>
            </div>
            `
            }
    }
}

checkoutProducts()

let checkoutTotal = document.querySelector('.checkout-total')
let checkoutBTN = document.querySelector('.checkout-btn')

if (checkoutTotal) {
    checkoutTotal.innerHTML = `$${totalPrice}`
}
function handleCheckout() {
    if (products_cart) {
        if (products_cart.length > 0) {
            if (checkoutBTN) {
                checkoutBTN.classList.add('show')
            }
        } else {
            if (checkoutBTN) {
                checkoutBTN.classList.remove('show')
            }
        }
    }
}
window.addEventListener("DOMContentLoaded", handleCheckout);