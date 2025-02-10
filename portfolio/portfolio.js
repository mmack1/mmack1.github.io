/* document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    const exitButtons = document.querySelectorAll(".exit");
    const infoElements = document.querySelectorAll(".info");
    const infoCards = document.querySelectorAll(".info-card");
    let open = true; */
    /* const seeMoreButtons = document.querySelectorAll('.see-more-btn'); */
  
/*     filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;
  
            projectItems.forEach(item => {
                if (category === 'all' || item.classList.contains(category)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }); */

    // Initially hide the exit and info elements
        /* document.querySelectorAll(".exit").forEach(exit => exit.style.display = "none");
        document.querySelectorAll(".info").forEach(info => info.style.display = "none"); */
/* 
        exitButtons.forEach(button => button.style.display = "none");
        infoElements.forEach(info => info.style.display = "none");

        infoCards.forEach(card => {
            card.addEventListener("click", function() {
                const projectItem = this; // This refers to the clicked .info-card
    
                if (open) {
                    // Remove 'full' class from siblings
                    const siblings = Array.from(projectItem.parentElement.children).filter(child => child !== projectItem);
                    siblings.forEach(sibling => sibling.classList.remove("full"));
                    
                    // Add 'full' class to the clicked project item
                    projectItem.classList.add("full");
    
                    // Remove 'side' class from clicked item and add to siblings
                    projectItem.classList.remove("side");
                    siblings.forEach(sibling => sibling.classList.add("side"));
    
                    // Show the 'exit' button and the '.info' element
                    const exitButton = projectItem.querySelector(".exit");
                    if (exitButton) exitButton.style.display = "inline";
    
                    const info = document.querySelector(".info");
                    if (info) info.style.display = "block";
    
                    open = !open;  // Toggle the open state
                } else {
                    // Remove 'full' and 'side' class from the clicked item and its siblings
                    projectItem.classList.remove("full");
                    projectItem.classList.remove("side");
    
                    // Hide the 'exit' button and the '.info' element
                    const exitButton = projectItem.querySelector(".exit");
                    if (exitButton) exitButton.style.display = "none";
    
                    const info = document.querySelector(".info");
                    if (info) info.style.display = "none";
    
                    open = !open;  // Toggle the open state
                }
            });
        });
    }); */

            
    // Loop through each button and add an event listener
/*     document.querySelectorAll('.see-more-btn').forEach(button => {
        button.addEventListener('click', function() {
            const projectItem = button.closest('.project-item');  // Get the parent .project-item element
            const fullDesc = projectItem.querySelector('.full-desc');  // Get the full description element
    
            // Toggle the expanded class on the clicked project item
            projectItem.classList.toggle('expanded');
    
            // Toggle the visibility of the full description
            const isVisible = fullDesc.style.display === 'block';
            fullDesc.style.display = isVisible ? 'none' : 'block';  // Toggle visibility
    
            // Toggle button text based on visibility
            button.textContent = isVisible ? 'See More' : 'See Less';
    
            // Optionally collapse other items when one is expanded
            document.querySelectorAll('.project-item.expanded').forEach(expandedItem => {
                if (expandedItem !== projectItem) {
                    expandedItem.classList.remove('expanded');
                    expandedItem.querySelector('.full-desc').style.display = 'none';
                    expandedItem.querySelector('.see-more-btn').textContent = 'See More';
                }
            });
        });
     }); 
   */



    // Hover effect for project items
/*     projectItems.forEach(item => {
        const moreInfo = item.querySelector('.more-info');
        if (moreInfo) {
            item.addEventListener('mouseenter', () => {
                moreInfo.style.opacity = '1';
                moreInfo.style.visibility = 'visible';
            });
  
            item.addEventListener('mouseleave', () => {
                moreInfo.style.opacity = '0';
                moreInfo.style.visibility = 'hidden';
            });
        }
    }); */
  
    // Process images
 /*    async function processImages() {
        const imgElements = document.querySelectorAll('.more-info img');
  
        imgElements.forEach(img => {
            setElementStyles(img, {
                'flex-shrink': '0',
                'align-self': 'flex-start',
                'min-height': 'fit-content',
                'max-width': '100%',
                'display': 'block'
            });
        });
    }
  
    function setElementStyles(element, styles) {
        for (let property in styles) {
            element.style[property] = styles[property];
        }
    }
  
    processImages();
}); */

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    const exitButtons = document.querySelectorAll(".exit");
    const infoElements = document.querySelectorAll(".info");
    const infoCards = document.querySelectorAll(".info-card");
    let open = true;

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;

            // When 'All' is clicked, reset display for all items
            if (category === 'all') {
                projectItems.forEach(item => {
                    item.style.display = 'block'; // Show all project items
                });
            } else {
                projectItems.forEach(item => {
                    // Show only items belonging to the selected category
                    if (item.classList.contains(category)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            }
        });
    });

    // Initially hide the exit and info elements
    exitButtons.forEach(button => button.style.display = "none");
    infoElements.forEach(info => info.style.display = "none");

    infoCards.forEach(card => {
        card.addEventListener("click", function() {
            const projectItem = this; // This refers to the clicked .info-card

            if (open) {
                // Remove 'full' class from siblings
                const siblings = Array.from(projectItem.parentElement.children).filter(child => child !== projectItem);
                siblings.forEach(sibling => sibling.classList.remove("full"));

                // Add 'full' class to the clicked project item
                projectItem.classList.add("full");

                // Remove 'side' class from clicked item and add to siblings
                projectItem.classList.remove("side");
                siblings.forEach(sibling => sibling.classList.add("side"));

                // Show the 'exit' button and the '.info' element
                const exitButton = projectItem.querySelector(".exit");
                if (exitButton) exitButton.style.display = "inline";

                const info = document.querySelector(".info");
                if (info) info.style.display = "block";

                open = !open;  // Toggle the open state
            } else {
                // Remove 'full' and 'side' class from the clicked item and its siblings
                projectItem.classList.remove("full");
                projectItem.classList.remove("side");

                // Hide the 'exit' button and the '.info' element
                const exitButton = projectItem.querySelector(".exit");
                if (exitButton) exitButton.style.display = "none";

                const info = document.querySelector(".info");
                if (info) info.style.display = "none";

                open = !open;  // Toggle the open state
            }
        });
    });
});
