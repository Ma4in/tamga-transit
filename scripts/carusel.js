let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

let isHover = false;
function goToSlide(index) {
    if(!isHover){
        if (index < 0) {
            index = carouselItems.length - 1;
        } else if (index >= carouselItems.length-1) {
            index = 0;
        }
        currentIndex = index;
        
        document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * (carouselItems[0].offsetWidth + 20)}px)`;
    }
}
 
function goToNextSlide() {
  goToSlide(currentIndex + 1);
}
 
function goToPrevSlide() {
  goToSlide(currentIndex - 1);
}

const crsl = document.getElementById('crsl');

crsl.onmouseover = function (){
    isHover = true;
};
  
crsl.onmouseout  = function (){
    isHover = false
};

setInterval(goToNextSlide, 3000);
