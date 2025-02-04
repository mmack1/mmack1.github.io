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


fetch("https://script.google.com/macros/s/AKfycbyboifMBsBXrc-jbkosgGBeLO2MpM-1Z5hrcQwKYmnUXWdldqw7-RFtnYQs8612iw/exec", {
  method: "GET",
  mode: "cors", // Ensure CORS mode is set
  headers: {
    /* "Content-Type": "application/json", */ // Expect JSON response
    "Content-Type": "text/plain", 
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
  //console.log(data); // Check the structure of the data
  
  let tbody = document.querySelector("#sheet-data tbody");

  // Clear previous content (avoids duplication)
  tableHead.innerHTML = "";
  tbody.innerHTML = "";

  // Add header row
  data.data[0].forEach(header => {
    let th = document.createElement("th");
    th.textContent = header;
    th.textContent = typeof header === "object" ? JSON.stringify(header) : header;
    tableHead.appendChild(th);
  });
  // Add table rows
  data.data.slice(1).forEach(row => {
    let tr = document.createElement("tr");
    row.forEach(cell => {
      let td = document.createElement("td");
      
      if (typeof cell === "object" && cell.text) {
        // If the cell has a link, create an anchor element
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
        td.textContent = cell; // Fallback for plain text
      }
      
      tr.appendChild(td);
    });
    
    tbody.appendChild(tr);

    
  });

  // Add class to trigger opacity transition
  document.querySelector('table').classList.add('loaded');
})
.catch(error => console.error("Error fetching Google Sheets data:", error));
/* 
// Fetch data from Google Sheets and populate the table
fetch("https://script.google.com/macros/s/AKfycbyKFgWOeYTa31eSib280OwfUSx0soH8jKQkC2eENZpLHHJRCvZ9HpEAXpWQybPpw0RY/exec", {
      redirect: "follow",
      method: "GET",
      headers: {
        "Accept": "application/json", // Ensure response is treated as JSON
        "Content-Type": "application/json", // Set correct content-type
      } })
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
          
              if (typeof cell === "object" && cell.text) {
                  // If the cell has a link, create an anchor element
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
                  td.textContent = cell; // Fallback for plain text
              }
          
              tr.appendChild(td);
          });
        
          tbody.appendChild(tr);
      });

      // Add class to trigger opacity transition
      document.querySelector('table').classList.add('loaded');
  })
  .catch(error => console.error("Error fetching Google Sheets data:", error));
 */
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