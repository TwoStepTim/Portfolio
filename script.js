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
// Get references to the navbar and home section
const navbar = document.querySelector(".navbar");
const homeSection = document.querySelector(".home");
const sidebarCheckbox = document.getElementById("sidebar-checkbox");

// Function to toggle the visibility of the navbar based on scroll position
function toggleNavbarVisibility() {
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

// Add an event listener to the window's scroll event
window.addEventListener("scroll", toggleNavbarVisibility);

// Initial call to set the initial state based on the initial scroll position
toggleNavbarVisibility();

// Add an event listener to the hamburger icon checkbox
sidebarCheckbox.addEventListener("change", function () {
    if (this.checked) {
        // If the checkbox is checked (hamburger icon is clicked), show the navbar
        navbar.style.display = "block";
        navbar.style.opacity = "1";
        navbar.style.transform = "translateY(0)";
        navbar.classList.add("animate");
    } else {
        // If the checkbox is unchecked (hamburger icon is clicked again), hide the navbar
        navbar.style.display = "none";
        navbar.classList.remove("animate");
    }
});

const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    sidebarCheckbox.checked = !sidebarCheckbox.checked; // Toggle the checkbox state
});

