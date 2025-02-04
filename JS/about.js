const numCount = document.querySelectorAll('.nums .numCount span');
const numsSec = document.querySelector('.nums');
let started = false ;
window.onscroll = () => {
    if (window.scrollY >= (numsSec.offsetTop / 2)){
        if (!started){
        numCount.forEach((num) => startCount(num));
    }
    started = true
    }
}


function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal ){
            clearInterval(count);
        }
    } , 10)
    
}