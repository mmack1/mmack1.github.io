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


  // Poem text
const kiplingPoem = `<p>If you can <span>keep</span> your head when all about you    
Are <span>losing</span> theirs and <span>blaming</span> it on you; 
If you can <span>trust</span> yourself when all men <span>doubt</span> you,    
But make <span>allowance</span> for their doubting too; 
If you can <span>wait</span> and not be tired by waiting,    
Or, being <span>lied</span> about, don't deal in <span>lies</span>, 
Or, being <span>hated</span>, don't give way to <span>hating</span>,    
And yet don't look too good, nor talk too wise;
If you can <span>dream</span>—and not make dreams your <span>master</span>; 
If you can <span>think</span>—and not make thoughts your <span>aim</span>; 
If you can meet with <span>triumph</span> and <span>disaster</span>    
And treat those two <span>impostors</span> just the same; 
If you can bear to hear the <span>truth</span> you've spoken    
<span>Twisted</span> by knaves to make a <span>trap</span> for fools, 
Or watch the things you gave your life to <span>broken</span>,    
And <span>stoop</span> and build 'em up with wornout tools;
If you can make one <span>heap</span> of all your <span>winnings</span>    
And <span>risk</span> it on one turn of pitch-and-toss, 
And <span>lose</span>, and start again at your beginnings    
And never breathe a word about your <span>loss</span>; 
If you can <span>force</span> your heart and nerve and <span>sinew</span>    
To <span>serve</span> your turn long after they are gone, 
And so <span>hold on</span> when there is nothing in you    
Except the <span>Will</span> which says to them: "Hold on";
If you can <span>talk</span> with crowds and keep your <span>virtue</span>,    
Or <span>walk</span> with kings—nor lose the common <span>touch</span>; 
If neither <span>foes</span> nor loving friends can hurt you;    
If all men <span>count</span> with you, but none too much; 
If you can fill the unforgiving <span>minute</span> 
With sixty seconds' worth of distance <span>run</span>—    
Yours is the <span>Earth</span> and everything that's in it, 
And—which is more—you'll be a <span>Man</span>, my son!     -Rudyard Kipling</p>`;

// Function to insert poem into divs
function insertPoemIntoDivs() {
	// Get all .text divs
	const textDivs = document.querySelectorAll(".text");

	// Insert poem into all .text divs
	textDivs.forEach((div) => {
		div.innerHTML = kiplingPoem;
	});
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", insertPoemIntoDivs);

const contentDiv = document.querySelector(".con");
function adjustContentSize() {
	const viewportWidth = window.innerWidth;
	const baseWidth = 1000;
	const scaleFactor =
		viewportWidth < baseWidth ? (viewportWidth / baseWidth) * 0.8 : 1;
	contentDiv.style.transform = `scale(${scaleFactor})`;
}
window.addEventListener("load", adjustContentSize);
window.addEventListener("resize", adjustContentSize);
