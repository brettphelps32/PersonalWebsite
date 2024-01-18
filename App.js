const menu = document.querySelector('#mobileMenu');
const menuLinks = document.querySelector('.navBarMenu');
const navLogo = document.querySelector('#navBarLogo')

//Displays mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

//Show actice menu when scrolling
const highlightMenu = () =>{
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#homePage');
    const about = document.querySelector('#aboutPage');
    const resume = document.querySelector('#resumePage');
    const projects = document.querySelector('#projectsPage');
    let scrollPos = window.scrollY;

    //adds highlighs class to my menu items
    if(window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('highlight');
        about.classList.remove('highlight');
        return;
    }
    else if(window.innerWidth > 960 && scrollPos < 1400){
        about.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        resume.classList.remove('highlight');
        return;
    }
    else if(window.innerWidth > 960 && scrollPos < 2345){
        resume.classList.add('highlight');
        about.classList.remove('highlight');
        return;
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Close mobile Menu when clicking on menu item

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 780 && menuBars){
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active')
    }
}
menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

document.getElementById("webBtn").addEventListener("click", redirectWeb);
function redirectWeb(){ window.location = "https://github.com/brettphelps32/BrettPhelpsPersonalWebsite"; }

document.getElementById("mavBtn").addEventListener("click", redirectMav);
function redirectMav(){ window.location = "https://github.com/brettphelps32/MaverickMotorsports"; }

document.getElementById("capBtn").addEventListener("click", redirectCap);
function redirectCap(){ window.location = "https://github.com/brettphelps32/CSCI4970-Capstone-dev"; }