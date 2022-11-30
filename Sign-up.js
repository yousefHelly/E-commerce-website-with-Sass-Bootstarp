var userFirstName;
var userLastName;
//testing validation
let inputs = document.querySelectorAll(".input input.important");
let emailRe = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
let passRe = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,.?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
let PnumberRe = /\(\+\d{1,3}\)\d{10}/
let NameRe = /[a-zA-Z\-]{3,15}/
let phoneNumber = document.querySelector("input#pnumber");
let names = document.querySelectorAll(".name input");
let signUP = document.querySelector(`input[type="submit"]`);
signUP.addEventListener("click", function (ev) {
    let email = inputs[0].value;
    let password = inputs[1].value;
    if (!emailRe.test(email) || !passRe.test(password) || !PnumberRe.test(phoneNumber.value) || !NameRe.test(names[0].value) || !NameRe.test(names[1].value)) {
        if (!emailRe.test(email)) {
            inputs[0].classList.add("border-danger");
        }
        else if (emailRe.test(email)) {
            inputs[0].classList.remove("border-danger");
        }
        if (!passRe.test(password)) {
            inputs[1].classList.add("border-danger");
        }
        else if (passRe.test(password)) {
            inputs[1].classList.remove("border-danger");
        }
        if (!PnumberRe.test(phoneNumber.value)) {
            phoneNumber.classList.add("border-danger");
        }
        else if (PnumberRe.test(phoneNumber.value)) {
            phoneNumber.classList.remove("border-danger");
        }
        if (!NameRe.test(names[0].value)) {
            names[0].classList.add("border-danger");
        } else if (NameRe.test(names[0].value)) {
            names[0].classList.remove("border-danger");
        }
        if (!NameRe.test(names[1].value)) {
            names[1].classList.add("border-danger");
        }
        else if (NameRe.test(names[1].value)) {
            names[1].classList.remove("border-danger");
        }
        ev.preventDefault();
    }
    if (emailRe.test(email) && passRe.test(password) && PnumberRe.test(phoneNumber.value ) && NameRe.test(names[0].value) && NameRe.test(names[1].value)) {
        inputs[0].classList.remove("border-danger");
        inputs[1].classList.remove("border-danger");
        phoneNumber.classList.remove("border-danger");
        names[0].classList.remove("border-danger");
        names[1].classList.remove("border-danger");
        let profilePicModal = new bootstrap.Modal(document.querySelector("#prfilePicModalToggle"));
        userFirstName = names[0].value;
        userLastName = names[1].value;
        document.querySelector(".modal-body .username span.fName").textContent = userFirstName;
        document.querySelector(".modal-body .username span.lName").textContent = userLastName;
        document.querySelector(".registerConfirmation span.userName").textContent = userFirstName;
        profilePicModal.show();
        ev.preventDefault();
    }
})
//Live Password Tracking
let passChecker = document.querySelector(".check-pass");
let checks = passChecker.querySelectorAll("span");
inputs[1].oninput = function () {
    if (/(?=[a-z])/.test(inputs[1].value)) {
        console.log(checks[0].childNodes[1].classList.remove("far", "fa-circle"));
        console.log(checks[0].childNodes[1].classList.add("far", "fa-check-circle", "text-primary"));
    } else {
        console.log(checks[0].childNodes[1].classList.remove("far", "fa-check-circle", "text-primary"));
        console.log(checks[0].childNodes[1].classList.add("far", "fa-circle"));
    }
    if (/(?=[^A-Za-z0-9])/.test(inputs[1].value)) {
        console.log(checks[1].childNodes[1].classList.remove("far", "fa-circle"));
        console.log(checks[1].childNodes[1].classList.add("far", "fa-check-circle", "text-primary"));
    } else {
        console.log(checks[1].childNodes[1].classList.remove("far", "fa-check-circle", "text-primary"));
        console.log(checks[1].childNodes[1].classList.add("far", "fa-circle"));
    }
    if (/(?=[A-Z])/.test(inputs[1].value)) {
        console.log(checks[2].childNodes[1].classList.remove("far", "fa-circle"));
        console.log(checks[2].childNodes[1].classList.add("far", "fa-check-circle", "text-primary"));
    } else {
        console.log(checks[2].childNodes[1].classList.remove("far", "fa-check-circle", "text-primary"));
        console.log(checks[2].childNodes[1].classList.add("far", "fa-circle"));
    }
    if (inputs[1].value.length >= 8) {
        console.log(checks[3].childNodes[1].classList.remove("far", "fa-circle"));
        console.log(checks[3].childNodes[1].classList.add("far", "fa-check-circle", "text-primary"));
    } else {
        console.log(checks[3].childNodes[1].classList.remove("far", "fa-check-circle", "text-primary"));
        console.log(checks[3].childNodes[1].classList.add("far", "fa-circle"));
    }
    if (/(?=[0-9])/.test(inputs[1].value)) {
        console.log(checks[4].childNodes[1].classList.remove("far", "fa-circle"));
        console.log(checks[4].childNodes[1].classList.add("far", "fa-check-circle", "text-primary"));
    } else {
        console.log(checks[4].childNodes[1].classList.remove("far", "fa-check-circle", "text-primary"));
        console.log(checks[4].childNodes[1].classList.add("far", "fa-circle"));
    }
}

//uplading user img
let img = document.querySelector(".modal-body .img img");
let uploadBtn = document.querySelector("input#userImg");
uploadBtn.onchange = function () {
    let fr = new FileReader();
    fr.onload = function () {
        img.src = fr.result;
    }
    fr.readAsDataURL(uploadBtn.files[0]);
}
// credit card validation
let creditCard = document.querySelector("input#cardNumber");
let cardImg = document.querySelector("img.credit-cart-type");
creditCard.oninput = function () {
    creditCard.onkeydown = function (e) {
        if (e.keyCode == 8) {
            creditCard.value.length--;
        }
        else {
            if (creditCard.value.length == 4 || creditCard.value.length == 9 || creditCard.value.length == 14) {
                creditCard.value = creditCard.value + " ";
            }
        }
        if (/(^(34)|^(37))/.test(creditCard.value)) {
            cardImg.src = "imgs/american-express.png";
        } else if (/^(4)/.test(creditCard.value)) {
            cardImg.src = "imgs/visa.png";
        } else if (/^(5)/.test(creditCard.value)) {
            cardImg.src = "imgs/master-card.png";
        }
        else {
            cardImg.src = "imgs/credit-card.png";
        }
    }
}
//Show Confirmation

function showConfirmation(){
    document.querySelector(".sign-up-body").classList.add("d-none");
    document.querySelector(".registerConfirmation").classList.remove("d-none");
}
