console.log('services.js loaded');
const text = document.querySelector('.text p');
let charNum = text.innerText.split('');
console.log(charNum.length);
text.innerHTML = charNum.map((letter, i) => `<span style="transform:rotate(${ i * (360 / charNum.length)}deg);">${letter}</span>`).join('');