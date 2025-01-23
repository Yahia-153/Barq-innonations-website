const switchBtn = document.querySelector('#device-switch input');
const mobileScreens = document.querySelector('.mobile-screens');
const laptopScreens = document.querySelector('.laptop-screens');
console.log( switchBtn , mobileScreens, laptopScreens);
switchBtn.addEventListener('click', () => {
    if (switchBtn.checked) {
    mobileScreens.style="display: none;";
    laptopScreens.style="display: block;";
    }else{
    mobileScreens.style="display: block;";
    laptopScreens.style="display: none;";
    }
    });