const words = ["Building, breaking, and fixing things...", "Trying to make sense of the digital & the human.", "Data isn’t just numbers; it’s stories waiting to be told."]; // List of words
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

// JavaScript to handle fade-in effect on scroll
window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('.scroll-section');
  const scrollPosition = window.scrollY + window.innerHeight;

  sections.forEach(function (section) {
    if (scrollPosition > section.offsetTop) {
      section.classList.add('visible'); // Add the class to make it visible
    }
  });
});

// Fetch data from Google Sheets and populate the table
fetch("https://script.google.com/macros/s/AKfycbwvxFd7w_Mg6sH88jtrS4jSCtnNqkk_qNhP16kQ6fuB4KO5ZXHkn5beUeApmwSgqPmE/exec", {
      redirect: "follow",
      method: "GET",
      headers: {
        "Content-Type": "text/plain", // Set correct content-type for JSON
      }, })
  .then(response => response.json())  // Parse response to JSON
  .then(data => {
      let tableHead = document.getElementById("header-row");
      console.log(data); // Check the structure of the data
      
      let tbody = document.querySelector("#sheet-data tbody");

      // ✅ Clear previous content (avoids duplication)
      tableHead.innerHTML = "";
      tbody.innerHTML = "";

      // ✅ Add header row
      data[0].forEach(header => {
          let th = document.createElement("th");
          th.textContent = header;
          tableHead.appendChild(th);
      });

      // ✅ Add table rows
      data.slice(1).forEach(row => {
          let tr = document.createElement("tr");
          row.forEach(cell => {
              let td = document.createElement("td");
              td.textContent = cell;
              tr.appendChild(td);
          });
          tbody.appendChild(tr);
          console.log("split");
          console.log(tr);
      });

      // Add class to trigger opacity transition
      document.querySelector('table').classList.add('loaded');
  })
  .catch(error => console.error("Error fetching Google Sheets data:", error));

