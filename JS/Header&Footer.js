//* THEME SWITCHING FUNCTION ;
function theme(){
const body = document.body;
const themeSwitchBtn = document.querySelector("#themeSwitchBtn");
let themeIcon = document.querySelector("#themeSwitchBtn i");
const themeIcons={
    "dark":"bi-sun",
    "light":"bi-moon"
}

// Local theme storage
localStorage = window.localStorage;
let currentTheme = localStorage.getItem("theme");
// Make theme as local storage
body.setAttribute('data-bs-theme', currentTheme);
body.classList.add(currentTheme)
// add btn theme icon
themeIcon.classList.add(themeIcons["light"])
themeIcon.classList.add(themeIcons[currentTheme])
// add theme logo
// Theme switch button function
function switchTheme() {
    if (body.classList.contains('dark')) {
        //switch to light
        body.classList.remove('dark');
        body.setAttribute('data-bs-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeIcon.classList.remove(themeIcons["dark"]);
        themeIcon.classList.add(themeIcons["light"]);
        themeIcon.setAttribute('title', 'Switch to dark Theme');
    } else {
        //switch to dark
        body.classList.add('dark');
        body.setAttribute('data-bs-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeIcon.classList.remove('bi-moon');
        themeIcon.classList.remove(themeIcons["light"]);
        themeIcon.classList.add(themeIcons["dark"]);
        themeIcon.setAttribute('title', 'Switch to light Theme');
    }
}
// Event listener for theme switch button
themeSwitchBtn.addEventListener('click', () => {
    switchTheme()
})
}
theme()
// //* HEADER TRANSITION FUNCTION ;
function headerTransition() {
    const header = document.querySelector("#navbar");
    let lastScroll = 0;
    // console.log(header);
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        if (currentScroll > lastScroll) {
            //scroll down
            header.style="top:-50%";
        } else {
            //scroll up
            header.style="top:0px";
        }
        lastScroll = currentScroll;
    })
}
headerTransition()
//* SCROLL TO TOP FUNCTION ;
function scrollToTop() {
    const scrollBtn = document.querySelector('#toTop');
    window.addEventListener('scroll', () => {
        if (this.scrollY < 500) {
            scrollBtn.classList.add('d-none');
        } else {
            scrollBtn.classList.remove('d-none');
        }
    })
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
}
scrollToTop();