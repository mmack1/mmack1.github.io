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

/* ALT options for improvement: Instead of fetching the data every
 time the page loads, store it in localStorage. OR Use a proxy server. 
and only refresh it occasionally. OR Instead of showing nothing while waiting, 
can display a loading placeholder and update it once the data arrives. 
WANT: Instead of fetching directly from Google Apps Script, 
    Use a Node.js/Express backend to fetch the data once.
    Store it in a server-side cache (Redis, Firebase, etc.).
    Serve the cached response quickly.

    Google Apps Script can be slow since it's running a script for each request. 
    The Google Sheets API is faster. Use Fetch with API Key

    JSON file on a CDN (e.g., Cloudflare, Firebase)
    Static JSON hosted on GitHub Pages
    Fast NoSQL database (Firestore, Supabase)

*/
function fetchSheetData(){
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
}
window.addEventListener("DOMContentLoaded", fetchSheetData);

// Poem text
const quotes = `<p class="animated-text">Here to build, break, and fix things...
Hoping to bridge the gap between the <span>digital</span> and the <span>human</span> one step at a time...
Data isn’t just numbers; it’s <span>stories</span> waiting to be told...
Any sufficiently advanced technology is indistinguishable from <span>magic</span>...
Every <span>large system</span> that works started as a <span>small system</span> that worked...
You cannot endow even the best machine with <span>initiative</span>; 
the jolliest steamroller will not plant flowers...
Every challenge is an invitation to <span>transform</span>; it’s not the obstacle, but our response, that shapes us...
<span>wisdom</span> isn't in knowing the right <span>answer</span>, but in asking the right question...
It’s never too late to <span>pursue</span> a better world...
To <span>strive</span>, to <span>seek</span>, to <span>find</span>, and <span>not</span> to yield...
</p>`;

/* - Walter Lippmann (Author), - Walter Lippmann (Author), Ulysses by Alfred Lord Tennyson */


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


let currentIndex = 0;

function changeSlide(direction) {
  const images = document.querySelectorAll('.carousel-images img');
  const totalImages = images.length;
  currentIndex = (currentIndex + direction + totalImages) % totalImages;
  document.querySelector('.carousel-images').style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Optional: Auto-slide every 3 seconds
setInterval(() => changeSlide(1), 3000);