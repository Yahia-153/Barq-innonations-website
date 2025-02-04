const text = document.querySelector('.text p');
let charNum = text.innerText.split('');
console.log(charNum.length);
text.innerHTML = charNum.map((letter, i) => `<span style="transform:rotate(${ i * (360 / charNum.length)}deg);">${letter}</span>`).join('');

const portfolioLink = document.querySelector('.nav-link.portfolio')
const portfolioSec = document.querySelector('.projects-sec')
const servicesLink = document.querySelector('.nav-link.services')
window.onscroll = () => {
    if (window.scrollY >= (portfolioSec.offsetTop - 30) ){
        portfolioLink.classList.add('active');
        servicesLink.classList.remove('active')
    }else{
        portfolioLink.classList.remove('active');
        servicesLink.classList.add('active')

    }
}