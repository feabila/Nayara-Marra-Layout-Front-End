var slideItem = 1;
showSlide(slideItem);

function plusSlide(n) {
  showSlide(slideItem += n);
}
function currentSlide(n) {
  showSlide(slideItem = n);
}

function showSlide(n) {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) slideItem = 1
  if (n < 1) {slideItem = slides.length}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideItem-1].style.display = "block"; 
  dots[slideItem-1].className += " active";
}

// shop releases
var slideIndexShop = 1;
showSlidesShop(slideIndexShop);

function showSlidesShop(n) {
  var slides = document.getElementsByClassName("shop-item");
  for(let i=0; i<3; i++){
    slides[i].style.display = "block"; 
  }
}

var slideIndexShop = 1;
showSlidesShopInsta(slideIndexShop);
function showSlidesShopInsta(n) {
  var slides = document.getElementsByClassName("shop-item-insta");
  for(let i=0; i<3; i++){
    slides[i].style.display = "block"; 
  }
}