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
