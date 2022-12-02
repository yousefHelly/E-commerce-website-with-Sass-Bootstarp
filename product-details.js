
// size select 
let sizeHeader = document.querySelector(".select-header");
let headerText = sizeHeader.querySelector(".inner-header");
let sizeBody = document.querySelector(".selections-body");
let sizeBodyLis = document.querySelectorAll(".selections-body .size");
sizeHeader.onclick = function () {
    colorBody.classList.add("d-none");
    sizeBody.classList.toggle("d-none");
    sizeHeader.querySelector(".chevronDown").classList.toggle("opened");
    sizeBodyLis.forEach((li) => {
        li.onclick = function () {
            headerText.textContent = li.textContent;
            sizeBody.classList.toggle("d-none");
            sizeHeader.querySelector(".chevronDown").classList.toggle("opened");
        }
    })
}
// size select 
let colorHeader = document.querySelector(".select-color .select-header");
let cHeaderText = colorHeader.querySelector(".inner-header");
let colorBody = document.querySelector(".select-color .selections-body");
let colorBodyLis = document.querySelectorAll(".selections-body .color");
colorHeader.onclick = function () {
    sizeBody.classList.add("d-none");
    colorBody.classList.toggle("d-none");
    colorHeader.querySelector(".chevronDown").classList.toggle("opened");
    colorBodyLis.forEach((li) => {
        li.onclick = function () {
            cHeaderText.textContent = li.textContent;
            colorBody.classList.toggle("d-none");
            colorHeader.querySelector(".chevronDown").classList.toggle("opened");
        }
    })
}
//quantity selection
let minBtn = document.querySelector(".Product-amount .minus");
let plusBtn = document.querySelector(".Product-amount .positive");
minBtn.onclick = function () {
    let q = document.querySelector(".Product-amount .amount");
    let currentQ = parseInt(q.textContent);
    if (currentQ > 1) {
        currentQ--;
    }
    q.textContent = currentQ;
}
plusBtn.onclick = function () {
    let q = document.querySelector(".Product-amount .amount");
    let currentQ = parseInt(q.textContent);
    if (currentQ < 12) {
        currentQ++;
    }
    q.textContent = currentQ;
}
//add to cart button
const addToCartBtn = document.getElementById('addToCartBtn');
addToCartBtn.addEventListener('click', () => {
    let toastContainer = document.createElement("div");
    toastContainer.classList.add("toast-container", "position-fixed", "bottom-0", "end-0", "p-3");
    toastContainer.innerHTML = `
<div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-header">
        <i class="fas fa-check-circle text-primary me-2"></i>
        <strong class="me-auto">RenoshopBee</strong>
        <small>Now</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
        Product has been added to your cart successfully
    </div>
</div>`
    document.body.appendChild(toastContainer);
    const cartToast = document.getElementById('liveToast');
    const toast = new bootstrap.Toast(cartToast);
    toast.show();
    setTimeout(function () {
        toastContainer.remove();
    }, 5000)
})
//add to wishlist btn
let wishlistBtn = document.getElementById("addToWL");
wishlistBtn.onclick = function () {
    if (wishlistBtn.firstElementChild.classList.contains("text-danger")) {
        wishlistBtn.firstElementChild.classList.remove("fas", "fa-heart", "text-danger");
        wishlistBtn.firstElementChild.classList.add("far", "fa-heart");
    }
    else {
        wishlistBtn.firstElementChild.classList.remove("far", "fa-heart");
        wishlistBtn.firstElementChild.classList.add("fas", "fa-heart", "text-danger");
    }
}
//navtap section
let navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
    link.onclick = function () {
        navLinks.forEach((link) => {
            link.classList.remove("bg-light");
        })
        link.classList.add("bg-light");
    }
})
//comments section
let ratingSec = document.querySelector(".rating-selection");
let chosenRate;
ratingSec.addEventListener("click", function (target) {
    if (target.path[1].classList.contains("one")) {
        document.querySelectorAll(".rating-selection div").forEach((div) => {
            div.classList.remove("text-primary");
        })
        target.path[1].classList.add("text-primary");
        chosenRate = target.path[1];
    } else if (target.path[1].classList.contains("two")) {
        document.querySelectorAll(".rating-selection div").forEach((div) => {
            div.classList.remove("text-primary");
        })
        target.path[1].classList.add("text-primary");
        chosenRate = target.path[1];
    } else if (target.path[1].classList.contains("three")) {
        document.querySelectorAll(".rating-selection div").forEach((div) => {
            div.classList.remove("text-primary");
        })
        target.path[1].classList.add("text-primary");
        chosenRate = target.path[1];
    } else if (target.path[1].classList.contains("four")) {
        document.querySelectorAll(".rating-selection div").forEach((div) => {
            div.classList.remove("text-primary");
        })
        target.path[1].classList.add("text-primary");
        chosenRate = target.path[1];
    } else if (target.path[1].classList.contains("five")) {
        document.querySelectorAll(".rating-selection div").forEach((div) => {
            div.classList.remove("text-primary");
        })
        target.path[1].classList.add("text-primary");
        chosenRate = target.path[1];
    }
})
let addComment = document.querySelector("button#newComment");
addComment.onclick = function () {
    let commentName = document.querySelector(".review-form #name");
    let comment = document.querySelector(".reviewTA");
    let userImg = document.querySelector(".user-info img");
    if (commentName.value != "" && comment.value != "" && chosenRate != null) {
        let newComment = document.createElement("div");
        newComment.classList.add("review-body", "col-12", "row", "mb-4");
        let date = new Date();
        newComment.innerHTML = `
                        <div class="profile-img d-none d-md-block col-md-2 col-lg-1 my-3">
                            <img class="img-fluid" src="${userImg.src}" alt="user">
                        </div>
                        <div class="review-content col-12 col-md-10 col-lg-11 row bg-white p-3 ms-1">
                            <div class="first-row d-flex flex-column flex-md-row order-2 py-1">
                                <div class="product-rating pe-md-4 border-md-end">
                                    <i class="${chosenRate.classList.contains("one") ? "fas" : chosenRate.classList.contains("two") ? "fas" : chosenRate.classList.contains("three") ? "fas" : chosenRate.classList.contains("four") ? "fas" : chosenRate.classList.contains("five") ? "fas" : "far"} fa-star"></i>
                                    <i class="${chosenRate.classList.contains("one") ? "far" : chosenRate.classList.contains("two") ? "fas" : chosenRate.classList.contains("three") ? "fas" : chosenRate.classList.contains("four") ? "fas" : chosenRate.classList.contains("five") ? "fas" : "far"} fa-star"></i>
                                    <i class="${chosenRate.classList.contains("one") ? "far" : chosenRate.classList.contains("two") ? "far" : chosenRate.classList.contains("three") ? "fas" : chosenRate.classList.contains("four") ? "fas" : chosenRate.classList.contains("five") ? "fas" : "far"} fa-star"></i>
                                    <i class="${chosenRate.classList.contains("one") ? "far" : chosenRate.classList.contains("two") ? "far" : chosenRate.classList.contains("three") ? "far" : chosenRate.classList.contains("four") ? "fas" : chosenRate.classList.contains("five") ? "fas" : "far"} fa-star"></i>
                                    <i class="${chosenRate.classList.contains("one") ? "far" : chosenRate.classList.contains("two") ? "far" : chosenRate.classList.contains("three") ? "far" : chosenRate.classList.contains("four") ? "far" : chosenRate.classList.contains("five") ? "fas" : "far"} fa-star"></i>
                                </div>
                                <span id="reviewDate" class="reviewDate ps-md-4 text-black-50 fst-italic">${date.getFullYear()}/${date.getMonth()+1}/${date.getUTCDate()}</span>
                            </div>
                            <div class="userName order-1 order-md-2">
                                <h6 class="text-uppercase py-3 fw-bold">${commentName.value}</h6>
                            </div>
                            <div class="review-text order-3">
                                ${comment.value}
                            </div>
                        </div>
                    `
        //change the value of reviews number
        document.querySelector(".reviews").appendChild(newComment);
        document.querySelectorAll("span#revNumber").forEach((span) => {
            let currentVal = parseInt(span.textContent);
            currentVal++;
            span.textContent = currentVal
        })
        //reset all values
        commentName.value = "";
        comment.value = "";
        document.querySelectorAll(".rating-selection div").forEach((div) => {
            div.classList.remove("text-primary");
        });
    }
}