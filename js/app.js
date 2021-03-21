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
// Here is an array for the "creatLists" loop function which selects all section tags.
const sections = Array.from(document.querySelectorAll('section'));
// Here I got the navegation bar variable so later I could append the list at the of the createLists function. 
const menu = document.getElementById("navbar__list")


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
function createlists() {
    for (section of sections)  {
        navData = section.getAttribute('data-nav');
        // Scroll to section on link click
        secLink = section.getAttribute('id');
        //create an item for each one
        lists = document.createElement('li');
        // .. Add the time next 
        lists.innerHTML = `<a class="menu__link" href="#${secLink}">${navData}</a>`;

        // Build menu 
        menu.appendChild(lists);
    }
}


function sectionInViewPort(element) {
    let sectionPos = element.getBoundingClientRect();
    return (sectionPos.top >= 0);
    
}

function toggleActiveClass() {
    for (section of sections) {
        // Set sections as active
        if(sectionInViewPort(section)){
            if (!section.classList.contains('your-active-class')){
                //then add
                section.classList.add('your-active-class');
            }
        }else{ // remove "your-active-class"
        section.classList.remove('your-active-class');
        }
    }
}


// build the nav

createlists();

// Add class 'active' to section when near top of viewport

document.addEventListener('scroll', toggleActiveClass);


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
 * 
*/



