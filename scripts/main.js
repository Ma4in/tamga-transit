var oldScrollY = window.scrollY;

window.onscroll = function(e) {
    var lg = document.getElementById("lg");
    if(oldScrollY < window.scrollY){  
        if ((window.scrollY > 50) && (window.scrollY < 170)) {
            lg.style.height = `calc(150px - ${(window.scrollY - 50)*2}px)`;
        };
    } else {
        if (window.scrollY < 170) {
            lg.style.height = `calc(0px + ${150 - window.scrollY}px)`;
        }
    }
    oldScrollY = window.scrollY;
}

window.addEventListener('resize', (e) => {
    changeSize(window.innerWidth)
});

function changeSize(size){
    if (window.innerWidth > 1200){
       // console.log('bigformat')
    }
    if (window.innerWidth < 1200){
       // console.log('smallformat')
    }
}

var startSize = window.innerWidth;
changeSize(startSize)