/*
*----------------------------------------
* Animation on Scroll for WORK section
*----------------------------------------
*/

const square = document.querySelector('.intro');
square.classList.remove('swing-in-top-bck');

// Create the observer
const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
        // If the element is visible    
        if (entry.isIntersecting) {
            // Add the animation class  
            square.classList.add('swing-in-top-bck');
            return; // If added the class exit the function
        }

        // Remove the class after animation
        square.classList.remove('swing-in-top-bck');
    });
});

// Tell the observer which elements to track
observer.observe(document.querySelector('.myworkclass'));


/*
*---------------------------------------
* Animation on Scroll for project work
*---------------------------------------
*/
const project = document.querySelector('.myproject');
project.classList.remove('fade-in-project');

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            project.classList.add('fade-in-project');
            return;
        }

        project.classList.remove('fade-in-project');
    });
});

observer1.observe(document.querySelector('.myworkclass'));

/*
*---------------------------------------
* Animation on Scroll for contact-me
*---------------------------------------
*/
const contact = document.querySelector('.highlight-clean');
contact.classList.remove('fade-in-fwd');

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            contact.classList.add('fade-in-fwd');
            return; 
        }

        contact.classList.remove('fade-in-fwd');
    });
});

observer2.observe(document.querySelector('.contactme'));

/*
*-------------------------
*    LOADING ANIMATION
*-------------------------
*/

var load = document.getElementById('loading');
function loadfun() {
    load.style.display = 'none';
}