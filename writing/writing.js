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


fetch("https://script.google.com/macros/s/AKfycbyCdRsRJ7fmupfMlxIIPFlPspJMzTCenlfjYfonzzGLFftjK1lmB7IZTL66fE0coq8/exec", {
  method: "GET",
  mode: "cors",
  headers: {
    "Content-Type": "text/plain;charset=utf-8",
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  let tableHead = document.getElementById("header-row");
  let tbody = document.querySelector("#sheet-data tbody");

  // Clear previous content
  tableHead.innerHTML = "";
  tbody.innerHTML = "";

  // Add header row
  data.data[0].forEach(header => {
    let th = document.createElement("th");
    th.textContent = typeof header === "object" && header.text ? header.text : header;
    tableHead.appendChild(th);
  });

  // Add table rows
  data.data.slice(1).forEach(row => {
    let tr = document.createElement("tr");
    row.forEach(cell => {
      let td = document.createElement("td");
      
      if (typeof cell === "object" && cell.text) {
        if (cell.link) {
          let a = document.createElement("a");
          a.href = cell.link;
          a.textContent = cell.text;
          a.target = "_blank"; // Opens in a new tab
          td.appendChild(a);
        } else {
          td.textContent = cell.text;
        }
      } else {
        td.textContent = cell !== null ? cell : ""; // Fallback for plain text and null values
      }
      
      tr.appendChild(td);
    });
    
    tbody.appendChild(tr);
  });

  // Add class to trigger opacity transition
  document.querySelector('table').classList.add('loaded');
})
.catch(error => console.error("Error fetching Google Sheets data:", error));

// Poem text
const quotes = `<p class="animated-text">building, breaking, and fixing things, 
Trying to make sense of the <span>digital</span> & the <span>human</span>, 
data isn’t just numbers; it’s <span>stories</span> waiting to be told, 
any sufficiently advanced technology is indistinguishable from <span>magic</span>, 
every <span>large system</span> that works started as a <span>small system</span> that worked
</p>`;

// Function to insert quotes into divs
function insertPoemIntoDivs() {
  // Get all .text divs
  const textDivs = document.querySelectorAll(".text");

  // Insert poem into all .text divs
  textDivs.forEach((div) => {
    div.innerHTML = quotes;
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