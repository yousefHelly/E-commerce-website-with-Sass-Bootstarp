//product Add Admin section

function openAddPage(){
    window.location.assign("admin-add-product.html");
}

let delBtns = document.querySelectorAll(".product-card .del");
delBtns.forEach((btn)=>{
    btn.onclick = function(){
        document.querySelector("span.deletedEl").innerHTML = btn.parentElement.previousElementSibling.previousElementSibling.innerHTML;
        document.querySelector(".modal-footer button.del").onclick = function(){
            setTimeout(()=>{
                btn.parentElement.parentElement.remove();
            },500)
        }
    }
})


let uploadBtn = document.querySelector(".img-upload input");

uploadBtn.addEventListener("change",function(){
    let fr = new FileReader();
    fr.onload = function(){
        let img = document.createElement("div");
        img.classList.add("img","mb-3","col-2","p-0")
        img.innerHTML = `
        <img class="img-fluid p-3 border rounded d-flex flex-column align-items-center h-100 w-100"
            src="${fr.result}" alt="">
        <div class="expand bg-light rounded-circle justify-content-center align-items-center">
            <i class="fas fa-expand text-black-50"></i>
        </div>
        <div class="del bg-light rounded-circle justify-content-center align-items-center">
            <i class="fas fa-trash text-black-50"></i>
        </div>`;
    document.querySelector(".img-upload").before(img);
    }
    fr.readAsDataURL(uploadBtn.files[0])
})
setInterval(function(){
    let delBtns = document.querySelectorAll(".imgs-holder .img .del");
    delBtns.forEach((btn)=>{
        btn.onclick = function(){
            btn.parentElement.remove();
        }
    })
    let expandBtn = document.querySelectorAll(".imgs-holder .img .expand");
    expandBtn.forEach((btn)=>{
        btn.onclick = function(){
            document.querySelector(".expanded-img").style.display = 'flex';
            document.querySelector(".expanded-img img").src = btn.previousElementSibling.src;
        }
    })
})
document.querySelector(".expanded-img .close").onclick = function(){
    document.querySelector(".expanded-img").style.display = "none";
}
function addTag(){
    if(inputTag.value != ""){
       let span = document.createElement("span");
       span.classList.add(`tag`,`tag-${inputTag.value}`,`border`,`rounded`,`ps-2`,`pe-5`,`py-1`,`me-md-1`,`my-1`,`col-6`,`col-md-2`);
       span.textContent = inputTag.value;
       inputTag.before(span);
       inputTag.value = "";
       }
}
let tagSection = document.querySelector(".product-tags"),
    tags = tagSection.querySelectorAll(".tag"),
    inputTag = tagSection.querySelector(".addTag");
setInterval(function(){
    tags = tagSection.querySelectorAll(".tag");
    tags.forEach ((tag)=>{
        tag.onclick = function(){
            tag.outerHTML = "";
        }
        inputTag.onblur = addTag;
        inputTag.onkeydown = function(e){
            if(e.keyCode == 13){
                    addTag();
                }
        };
    })
},100);

