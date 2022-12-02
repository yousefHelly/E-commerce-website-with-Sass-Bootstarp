setTimeout(() => {
    let cartButton = document.querySelector(".svg-inline--fa.fa-cart-shopping.button");
    let closeButton = document.querySelector(" .card-items .close");
    cartButton.onclick = function(){
        document.querySelector(".user-nav").classList.remove("show");
        document.querySelector(".search-form").classList.remove("show");
        document.querySelector(".card-items").classList.toggle("show");
        closeButton.onclick = function(){
            document.querySelector(".card-items").classList.remove("show");
        } 
    }
    let searchButton = document.querySelector(".search-bar svg");
    searchButton.onclick = function(){
        document.querySelector(".user-nav").classList.remove("show");
        document.querySelector(".card-items").classList.remove("show");
        document.querySelector(".search-form").classList.toggle("show");
    }
    let userInfo = document.querySelector(".min-info");
    userInfo.onclick = function(){
        document.querySelector(".search-form").classList.remove("show");
        document.querySelector(".card-items").classList.remove("show");
        document.querySelector(".user-nav").classList.toggle("show");
    }
    document.addEventListener("click",function(e){
        if(e.path.length<11){
            document.querySelector(".user-nav").classList.remove("show");
            document.querySelector(".card-items").classList.remove("show");
            document.querySelector(".search-form").classList.remove("show");
        }
        if(document.querySelector(".user-nav").classList.contains("show")){
            document.querySelector(".svg-inline--fa.fa-chevron-down").style.transform = `rotate(180deg)`;
        }
        else{
            document.querySelector(".svg-inline--fa.fa-chevron-down").style.transform = `rotate(0deg)`;
        }
    })
}, 100);
let darkModeBtn = document.querySelector(".Dark-mode-switcher");
darkModeBtn.onclick = function(){
    darkModeBtn.classList.toggle("toggle");
}

//opening product details
let productsImgs = document.querySelectorAll(".product-card .product-img");
let productsNames = document.querySelectorAll(".product-card .product-name");
productsImgs.forEach((product)=>{
    product.onclick = function(){
        window.location.assign("product-details.html");
    }
})
productsNames.forEach((product)=>{
    product.onclick = function(){
        window.location.assign("product-details.html");
    }
})