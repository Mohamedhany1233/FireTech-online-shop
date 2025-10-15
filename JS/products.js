(function addProducts() {
    let myRequest = new XMLHttpRequest();

    myRequest.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let productsObject = JSON.parse(this.responseText)
            let productsContainer = document.getElementById('AllProducts')
            
            allProductJson = productsObject 
            allProducts_json = productsObject
            
            document.dispatchEvent(new Event('productsLoaded'))
            const other_product_swiper = document.getElementById('other-product-swiper')
            const other_product_swiper2 = document.getElementById('other-product-swiper2')

            // products sale Products
            productsObject.forEach(product => {
                const disc = Math.floor((product.old_price - product.price) / product.old_price * 100)

                if (product.old_price) {
                    if (productsContainer) {
                        productsContainer.innerHTML+= 
                        `<div class="product swiper-slide">
                            <span class="sale-present">%${disc}</span>
                            
                            <div class="product-icons">
                                <span><i onclick = "addToCart(${product.id})" class="fa-solid fa-cart-shopping" data-id="${product.id}"></i></span>
                                <span><i class="fa-solid fa-heart" onclick = "addProductToWish(this)" data-wish-id = "${product.id}"></i></span>
                                <span><i class="fa-solid fa-share"></i></span>
                            </div>
                            
                            <div class="product-img">
                                <img src="${product.img}" alt="">
                                <img class="img-hover" src="${product.img_hover}">
                            </div>
                            
                            <div class="product-name">
                            <a href="../HTML/product-info.html">${product.name}</a>
                            </div>
                            
                            <div class="product-stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            
                            <div class="product-price">
                                <p><span>$${product.price}</span></p>
                                <p class="old-price">$${product.old_price}</p>
                            </div>
                        </div>`
                    }
                    checkAddToCart()
                    checkWishlist()
                }
            });

            // products other Products
            productsObject.forEach(product => {
                if (other_product_swiper) {
                    other_product_swiper.innerHTML+= 
                    `<div class="product swiper-slide">
                    
                    <div class="product-icons">
                        <span><i onclick = "addToCart(${product.id})" class="fa-solid fa-cart-shopping" data-id="${product.id}"></i></span>
                        <span><i class="fa-solid fa-heart" onclick = "addProductToWish(this)" data-wish-id = "${product.id}"></i></span>
                        <span><i class="fa-solid fa-share"></i></span>
                    </div>
                    
                    <div class="product-img">
                        <img src="${product.img}" alt="">
                        <img class="img-hover" src="${product.img_hover}">
                    </div>
                    
                    <div class="product-name">
                    <a href="../HTML/product-info.html">${product.name}</a>
                    </div>
                    
                    <div class="product-stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    
                    <div class="product-price">
                        <p><span>$${product.price}</span></p>
                    </div>
                    </div>`
                }
                checkAddToCart()
                checkWishlist()
            });
            // Phones & TABLETS Products
            productsObject.forEach(product => {
            if (other_product_swiper2) {
            other_product_swiper2.innerHTML+= 
                `<div class="product swiper-slide">
                
                <div class="product-icons">
                    <span><i onclick = "addToCart(${product.id})" class="fa-solid fa-cart-shopping" data-id="${product.id}"></i></span>
                    <span><i class="fa-solid fa-heart" onclick = "addProductToWish(this)" data-wish-id = "${product.id}"></i></span>
                    <span><i class="fa-solid fa-share"></i></span>
                </div>
                
                <div class="product-img">
                    <img src="${product.img}" alt="">
                    <img class="img-hover" src="${product.img_hover}">
                </div>
                
                <div class="product-name">
                <a href="../HTML/product-info.html">${product.name}</a>
                </div>
                
                <div class="product-stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                
                <div class="product-price">
                    <p><span>$${product.price}</span></p>
                </div>
                </div>`
            }
            checkAddToCart()
            checkWishlist()
            });
        }
    }
    
    myRequest.open('GET','https://mohamedhany1233.github.io/FireTech-online-shop/ASSETS/jsonFile/items.json')
    myRequest.send()

})();
