//dark - light mode

let darkModeEnabled= localStorage.getItem('darkModeEnabled') === 'true';

const enebleDarkMode = () => {
    darkModeEnabled = true;
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkModeEnabled', 'true');
}

const disableDarkMode = () => {
    darkModeEnabled = false;
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkModeEnabled', 'false');
}

document.addEventListener('DOMContentLoaded', () =>{
    darkModeButton.checked = darkModeEnabled;
    document.body.classList.toggle('dark-mode', darkModeEnabled);
});

const  darkModeButton= document.getElementById('darkModeButton');

darkModeButton.addEventListener('change', ()=>{
    if(darkModeButton.checked){
        enebleDarkMode();
    }else{
        disableDarkMode();
    }
});

//menu

const hamburger = document.querySelector('hamburger');
const navList = document.querySelector('nav ul');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
})

//Multiple Text

const typed = new typed('.multiple', {
    strings: ['developpeur front-end', 'Designer', 'autre'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:100,
    loop:true
});