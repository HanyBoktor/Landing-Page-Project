/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
/// navigation global var
const navigation = document.getElementById('navbar__list');

/// sections global var
const sections = document.querySelectorAll('section');

const navCreator = () => {
    let navLink = '';
    /// looping over all sections
    sections.forEach(section =>{
        const sectionID = section.id;
        const dataNav = section.dataset.nav;

        navLink += `<li><a class="menu__link" href= "#${sectionID}"> ${dataNav}</a></li>`;

    });
    // append all elements to the navigation
    navigation.innerHTML = navLink;




}


navCreator ();
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
//getting the largest value that's less or equal to the number 
const offSet = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const elemOffset = offSet(section);

        inViewPort = () => elemOffset < 250 && elemOffset >= -250;

        removeActive(section);
        addActive(inViewPort(), section);
    });
}
);

// to remove the active class
const removeActive = (section) => {
    section.classList.remove('your-active-class');
    section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);"
};

// to add the active class
const addActive = (conditional, section) => {
    if(conditional){
        section.classList.add('your-active-class');
        section.style.cssText = "background-color: linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 100%);"

    };
};



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


