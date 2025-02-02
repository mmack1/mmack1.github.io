const words = ["developer", "data scientist", "explorer", "problem solver"]; // List of words
let wordIndex = 0;
let currentWord = "";
let currentCharIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 90;
const cycleDelay = 800;

const container = document.getElementById('typing-container');

function type() {
  if (currentCharIndex < words[wordIndex].length) {
    currentWord += words[wordIndex][currentCharIndex];
    container.innerHTML = `<span class="typing-text">${currentWord}</span>`; // Displaying typed text
    currentCharIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, cycleDelay); // Wait before starting to erase
  }
}

function erase() {
  if (currentCharIndex > 0) {
    currentWord = currentWord.slice(0, -1);
    container.innerHTML = `<span class="typing-text">${currentWord}</span>`; // Erasing text
    currentCharIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    wordIndex = (wordIndex + 1) % words.length; // Move to the next word
    setTimeout(type, cycleDelay); // Wait before starting to type next word
  }
}

// Initial typing sequence
setTimeout(type, cycleDelay);
