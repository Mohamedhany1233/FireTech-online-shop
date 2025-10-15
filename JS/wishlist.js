let wishlist_container = document.querySelector('.wishlist-products .container')
let wishlist_count = document.querySelector('.wishlist-count')

function handleWishListItemsCount() {
    if (wishlist_count) {
        wishlist_count.innerHTML = `${wishlist_products.length} item`
    }
}
handleWishListItemsCount()

function getWishProdcuts() {
    if (wishlist_container) {
        wishlist_container.innerHTML = ''
    }

    for (let i = 0; i<wishlist_products.length; i++) {
            if (wishlist_container) {
            wishlist_container.innerHTML+= 
            `<div class="product"> 
                <div class="product-icons">
                    <span><i onclick="addToCart(${wishlist_products[i].id},this)" class="fa-solid fa-cart-shopping" data-id="${wishlist_products[i].id}"></i></span>
                    <span><i class="fa-solid fa-trash-can" data-wish-id="${wishlist_products[i].id}" onclick = "deleteItemFromWish(this)" ></i></span>
                    <span><i class="fa-solid fa-share"></i></span>
                </div>

                <div class="product-img">
                    <img src="${wishlist_products[i].img}" alt="">
                    <img class="img-hover" src="${wishlist_products[i].img_hover}">
                </div>

                <div class="product-name">
                <a href="/HTML/product-info.html">${wishlist_products[i].name}</a>
                </div>

                <div class="product-stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>

                <div class="product-price">
                    <p><span>$${wishlist_products[i].price}</span></p>
                </div>
            </div>`
        }
    }
}
getWishProdcuts()

function deleteItemFromWish(productDel) {
    wishlist_products = wishlist_products.filter(el => el.id != productDel.dataset.wishId)
    localStorage.setItem('wishlist_products',JSON.stringify(wishlist_products))
    getWishProdcuts()
    handleWishlistCount()
    handleWishListItemsCount()
    handleBttPos()
}