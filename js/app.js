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

// extract html sections
const Sections = document.getElementsByTagName('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


// get Ids of the sections
function getSectionIds(Sections) {
    
    let idSelections = []; 
    
    for (let i = 0; i < Sections.length; i++) {
        idSelections.push(Sections[i].attributes.id.textContent);
    }
    
    return idSelections;
    
}


// gets the sections headings as text in an array
// Headings used later to dynamically populate the buttons
function getSectionsHeadings(Sections) {
    
    let headingSections = [];
    
    for (let i = 0; i < Sections.length; i++) {
        
        headingSections.push(Sections[i].getElementsByTagName('h2')[0].textContent);
        
    }
    
    return headingSections;
    
}


// create button Ids, 
function getButtonId(Ids) {
    let buttonIds = [];
    for (let i = 0; i < Ids.length; i++) {
        buttonIds.push('buttonsection' + (i + 1)); 
    }
            
    return buttonIds
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

//puts together the headings list on top

function assembleSectionList(Headings) {
    
    for (let i = 0; i < Headings.length; i++) {
        
        let node = document.createElement("LI");
        node.className = 'navbar__menu menu__link';
        node.id = 'button' + Ids[i];
        node.appendChild(document.createTextNode(Headings[i]));
        document.getElementById("navbar__list").appendChild(node);
        
    }
    
    
}


// Add class 'active' to section when near top of viewport


function capture(Ids) {

    for (let i = 0; i < Ids.length; i++) {
        
        let section = document.getElementById(Ids[i]);

        // section needs to be in a reasonable range of the visual screen before the conditional is executed
        if (0 <= section.getBoundingClientRect().y && section.getBoundingClientRect().y < 300 && document.querySelector('.your-active-class') !== null) {
            
            // in case section still highlighted class will be removed
            document.querySelector('.your-active-class').classList.toggle('your-active-class');
            // active class applied to active section
            section.className = 'your-active-class';

        }

    }

}

// starts the event listener and sends to function capture
function highlight() {

    window.addEventListener('scroll',(event) => {
            capture(Ids);
        }
    );

}


// Scroll to anchor ID using scrollTO event

function scrollThereNow() {

    for(let i = 0; i < Sections.length; i++){
        
        // activates the event listener in the respective numbered button i
        let elmnt = document.getElementById(buttonIds[i]);
        let targetLoc = document.getElementById(Ids[i]);
        elmnt.addEventListener('click', function() {
            
            targetLoc.scrollIntoView();
            
        });
        
    }
}




/**
 * End Main Functions
 * Begin Events
 * 
*/

// bring neccessary arrays into scope
const Ids = getSectionIds(Sections);
const Headings = getSectionsHeadings(Sections);
const buttonIds = getButtonId(Headings);


// Build menu 

assembleSectionList(Headings);

// Scroll to section on link click

scrollThereNow();

// Set sections as active

highlight();

