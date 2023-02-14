const btn = document.getElementById("humberger");
const wrapperHeader = document.querySelector(".wrapper-header");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  this.classList.toggle("active");
  const parentElement = this.parentElement;
  parentElement.classList.toggle("activeCon");
});
//end hendel humberger menu
// handle quantities chart
const wrapperChart = document.getElementById("wrapperChart");
const saveResult = document.getElementById("resultChart");
wrapperChart.addEventListener("click", function (e) {
  const priorVal = parseInt(saveResult.dataset.val);
  let result;
  if (e.target.getAttribute("id") == "minus") {
    result = priorVal - 1;
  }
  if (e.target.getAttribute("id") == "plus") {
    result = priorVal + 1;
  }
  saveResult.dataset.val = result;
  saveResult.innerText = result;
});
//end handle quantities chart

// thumbnail image
const wrapperThumbnail = document.getElementsByClassName("thumbnail")[0];
const mainImage = document.getElementsByClassName("main-image")[0];
let temporaryImg = document.querySelector(".activeImg");
wrapperThumbnail.addEventListener("click", function (e) {
  if (temporaryImg != null) {
    temporaryImg.classList.remove("activeImg");
    temporaryImg = null;
  }
  if (e.target.className.includes("thumbnail-item")) {
    temporaryImg = e.target;
    const clickedImg = e.target.dataset.img;
    mainImage.src = `assets/images/image-product-${clickedImg}.jpg`;
    e.target.classList.add("activeImg");
  }
});
// edn thumbnail image
// event click mainImage
const modalImg = document.getElementById("myModal");
mainImage.addEventListener("click", function (e) {
  modalImg.style.display = "block";
});
// event click mainImage
// img modal
const close = document.getElementsByClassName("close")[0];
close.addEventListener("click", function (e) {
  e.preventDefault();
  modalImg.style.display = "none";
});
// end img modal
// checkout
const wrapperCheckout = document.getElementsByClassName("wrapper-icon-check-out")[0];
const infoChart = document.querySelector(".chart-wrapper");
wrapperCheckout.addEventListener("click", function (e) {
  if (e.target.className.includes("check-out")) {
    infoChart.classList.toggle("active-check-out");
    // console.log("true");
  }
});
// end checkout

// hold component checkout
function componentCheckout(quantities,price,img) {
  return `
    <div class="chart-content-active">
        <img class="chart-img" src="${img.src}" alt="">
        <div class="chart-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. ${quantities} x ${price} ${Number.parseInt(quantities)*Number.parseInt(price)}.00</div>
        <img src="assets/images/icon-delete.svg" alt="" id="delete-checkout" class="chart-icon"> 
    </div>
    <a href="" class="btn">Checkout</a>`;
}

function blankCheckout(){
    return `<div>
    <h4>Your chart empty</h4>
</div>`;
}
// end hold component checkout

// addEvent For btn checkout
const btnCheckout=document.getElementById("btn-checkout");
const containerCheckout=document.querySelector(".chart-content");
btnCheckout.addEventListener("click",function(e){
    e.preventDefault();
    const quantities=saveResult.dataset.val;//got data from element which has name var saveResult
    const priceShoes=document.getElementById("priceShoes").dataset.val; // get  data from previllage attribute
    containerCheckout.innerHTML=componentCheckout(quantities,priceShoes,temporaryImg); //put the element html into checkout
    
    const notification=document.querySelector(".notif"); 
    notification.classList.add("active-check-out");//give notification    
});
//end addEvent For btn checkout

// add event delete checkout
const deleteIcon=document.getElementById("delete-checkout");
console.log(deleteIcon);
deleteIcon.addEventListener("click",function(e){
    e.preventDefault();
    containerCheckout.innerHTML=blankCheckout();

})
// end add event delete checkout

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "none",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
