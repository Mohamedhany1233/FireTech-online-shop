const cart = document.querySelector('.cart');
const cart_overlay = document.querySelector('.cart-overlay');

if (cart && cart_overlay) {
    function openCart() {
        cart.classList.add('active');
        cart_overlay.classList.add('active');
    }

    function closeCart() {
        cart.classList.remove('active');
        cart_overlay.classList.remove('active');
    }

    cart_overlay.addEventListener('click', () => {
        closeCart();
        cart_overlay.classList.remove('active');
    });
}

// open & close | nav menu

let navMenu = document.querySelector('header .links ul')

function openNavMenu() {
    navMenu.classList.add('active')
}
function closeNavMenu() {
    navMenu.classList.remove('active')
}

// add items in cart 

let allProducts_json;

let cartProducts = document.querySelector('.cart-items')

let products_cart = []

let cartCount = document.querySelector('.count-item')

let totalPriceHTML = document.querySelector('.price-cart-head')

let cartTotalPrice = document.querySelector('.price-cart-total')

let cartItemsCount = document.querySelector('.top-cart h3 span')

let totalPrice;



window.addEventListener('load', () => {
    handleCheckout()
})

function addToCart(id,productBTN) {
    products_cart.push(allProducts_json[id])
    allProducts_json[id].added_to_cart = true

    localStorage.setItem('CartProdcts', JSON.stringify(products_cart))
    getItemCart()
    handleCount()
    checkAddToCart() 
    handleCheckout()
}


function getItemCart() {
    let cartItem = ``
    totalPrice = 0

    for (let i = 0; i<products_cart.length; i++) {
        cartItem += `
            <div class="item-cart">
                <img src="${products_cart[i].img}" alt="">
                <div class="content">
                    <h4>${products_cart[i].name}</h4>
                    <p class="price-cart">$${products_cart[i].price}</p>
                </div>
                <button onclick="deleteItemFromCart(${i})" class="delete-item"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        `
        totalPrice += products_cart[i].price
    }
    if (cartProducts) {
        cartProducts.innerHTML = cartItem
    }
    if (totalPriceHTML) {
        totalPriceHTML.innerHTML = `$${totalPrice}`
    }
    if (cartTotalPrice) {
        cartTotalPrice.innerHTML = `$${totalPrice}` 
    }
}

function checkAddToCart() {
    let addToCartBTNS = Array.from(document.querySelectorAll('.fa-cart-shopping'))

    for (let i = 0; i<products_cart.length; i++) {
        for (let j = 0; j<addToCartBTNS.length; j++) {
            products_cart[i].added_to_cart == true && products_cart[i].id == addToCartBTNS[j].dataset.id ? addToCartBTNS[j].classList.add('active') : ''
        }
    }
}

function handleCount() {
    if (cartCount) {
        cartCount.innerHTML = products_cart.length;
    }
    if (cartItemsCount) {
        cartItemsCount.innerHTML = `(${products_cart.length} item in cart)`
    }
    getItemCart()
}

function deleteItemFromCart(product) {
    products_cart.splice(product,1)
    
    let addToCartBTNS = document.querySelectorAll('.fa-cart-shopping.active')

    for (let i = 0; i<addToCartBTNS.length; i++) {
        addToCartBTNS[i].classList.remove('active')
        
        for (let j = 0 ; j<products_cart.length; j++) {
            if (products_cart[j].id == i ) {
                addToCartBTNS[i].classList.add('active')
            }
        }
    }
    localStorage.setItem('CartProdcts', JSON.stringify(products_cart))
    handleCount()
    getItemCart()
    handleCheckout()
}


if (localStorage.getItem('CartProdcts')) {
    products_cart = JSON.parse(localStorage.getItem('CartProdcts'))
    getItemCart()
    handleCount()
}

// add items in wishlist

let wishlist_products = []

if (localStorage.getItem('wishlist_products')) {
    wishlist_products = JSON.parse(localStorage.getItem('wishlist_products'))
}

function addProductToWish(productBTN) {
    for (let i = 0; i<allProducts_json.length; i++) {
        if (productBTN.dataset.wishId == allProducts_json[i].id) {
            wishlist_products.push(allProducts_json[i])
            allProducts_json[i].wishlist = true
        }
    }
    localStorage.setItem('wishlist_products',JSON.stringify(wishlist_products))
    handleWishlistCount()
    checkWishlist()
}

function checkWishlist() {
    let wishlistBTNS = Array.from(document.querySelectorAll('.fa-heart'))
    
    for (let i = 0; i<wishlist_products.length; i++) {
        for (let j = 0; j<wishlistBTNS.length; j++) {
            wishlist_products[i].wishlist == true && wishlist_products[i].id == wishlistBTNS[j].dataset.wishId ? wishlistBTNS[j].classList.add('active') : ''
        }
    }
}

function handleWishlistCount() {
    let wishCount;
    let wishCountHTML = document.querySelector('.count-item-wishlist')

    wishCountHTML.innerHTML = wishlist_products.length;
}
handleWishlistCount()

// Back To Top

let backToTop = document.querySelector('.back-to-top')

backToTop.addEventListener('click',function() {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})

function handleBttPos() {
    if (wishlist_products.length < 1) {
        backToTop.classList.add('down')
    }
    else {
        backToTop.classList.remove('down')
    }
}
handleBttPos()

// change product img 

let mainImg = document.querySelector('.big-img img')

function changeProductImg(ImgSrc) {
    mainImg.src = ImgSrc
}