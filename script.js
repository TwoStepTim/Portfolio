// JavaScript for flipping words in the <p> tag
const words = ["FRONT END", "APP DEVELOPER", "BACK END", "PROJECT LEADER", "DESIGNER & DEVELOPER"];
let currentWordIndex = 0;
const wordFlip = document.getElementById("word-flip");

function flipWords() {
    setTimeout(() => {
        wordFlip.textContent = words[currentWordIndex];
        currentWordIndex = (currentWordIndex + 1) % words.length;
    }, 2000); // Adjust the delay to a longer time in milliseconds (e.g., 1000 milliseconds for a slower change)
}

setInterval(flipWords, 4000); // Change words every 3 seconds (adjust as needed)

// Add smooth scrolling to in-page navigation links
document.querySelectorAll('.navbar-inpage a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
const navbar = document.querySelector(".navbar");
const homeSection = document.querySelector(".home");
const sidebarCheckbox = document.getElementById("sidebar-checkbox");

// Function to toggle the visibility of the navbar based on scroll position
function toggleNavbarVisibility() {
    // Check the screen width here
    if (window.innerWidth >= 1202) {
        const homeSectionBottom = homeSection.getBoundingClientRect().bottom;

        if (homeSectionBottom <= 0) {
            navbar.style.display = "block"; // Show the navbar
            navbar.style.opacity = "1"; // Make it fully visible
            navbar.style.transform = "translateY(0)"; // Move it down
            navbar.classList.add("animate"); // Add a class for animation
        } else {
            navbar.style.display = "none"; // Hide the navbar
            navbar.classList.remove("animate"); // Remove the animation class
        }
    }
}

// Add an event listener to run the function on scroll
window.addEventListener("scroll", toggleNavbarVisibility);

// Add an event listener to run the function on window resize
window.addEventListener("resize", toggleNavbarVisibility);

// Initial check when the page loads
toggleNavbarVisibility();


// Add an event listener to the window's scroll event
window.addEventListener("scroll", toggleNavbarVisibility);

// Initial call to set the initial state based on the initial scroll position
toggleNavbarVisibility();

const hamburger = document.querySelector('.hamburger');
const navbar_moblie = document.querySelector(".navbar_moblie");
const navLinks = document.querySelectorAll('.nav-link'); // Select all navigation links

// Function to close the navigation bar
function closeNavBar() {
    navbar_moblie.style.opacity = '0';
    navbar_moblie.style.transform = 'translateY(-100%)';
    hamburger.style.color = 'rgb(255, 255, 255)';
   // Uncheck the checkbox to close the navigation bar
}

hamburger.addEventListener('click', () => {
    if (sidebarCheckbox.checked) {
        closeNavBar();
    } else {
        navbar_moblie.style.opacity = '1';
        navbar_moblie.style.transform = 'translateY(0)';
        hamburger.style.color = 'rgb(0, 0, 0)';
    }
});

// Add an event listener to each navigation link to close the navigation bar
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeNavBar(); // Call the function to close the navigation bar
    });
});






const scroller = document.querySelector('.scroller');
const episodes = document.querySelector('.projects');
const episodeItems = document.querySelectorAll('.project');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
const episodeWidth = episodeItems[0].offsetWidth;

let currentIndex = 0;

leftArrow.addEventListener('click', () => scrollEpisodes(-1));
rightArrow.addEventListener('click', () => scrollEpisodes(1));

function scrollEpisodes(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = episodeItems.length - 1;
  } else if (currentIndex >= episodeItems.length) {
    currentIndex = 0;
  }
  const offset = -currentIndex * episodeWidth;
  episodes.style.transform = `translateX(${offset}px)`;
}

// script.js


let startTouchX = 0;

scroller.addEventListener('touchstart', (e) => {
  startTouchX = e.touches[0].clientX;
});

scroller.addEventListener('touchmove', (e) => {
  const currentTouchX = e.touches[0].clientX;
  const touchDelta = startTouchX - currentTouchX;

  // Check if there's significant horizontal touch movement before preventing default
  if (Math.abs(touchDelta) > 10) {
    // Adjust the scroll position based on touch movement
    scroller.scrollLeft += touchDelta;

    // Update the starting touch position
    startTouchX = currentTouchX;

    // Prevent the default touch scroll behavior
    e.preventDefault();
  }
});

