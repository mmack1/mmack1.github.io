document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    const seeMoreButtons = document.querySelectorAll('.see-more-btn');
  
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;
  
            projectItems.forEach(item => {
                if (category === 'all' || item.classList.contains(category)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });

    // Initially hide the exit and info elements
        document.querySelectorAll(".exit").forEach(exit => exit.style.display = "none");
        document.querySelectorAll(".info").forEach(info => info.style.display = "none");

        let open = true;

        document.querySelectorAll(".info-card").forEach(card => {
        card.addEventListener("click", function() {
            if (open) {
            // Remove 'full' and add 'side' to all siblings
            this.parentElement.querySelectorAll(".info-card").forEach(sibling => sibling.classList.remove("full"));
            this.classList.add("full");
            this.classList.remove("side");
            this.parentElement.querySelectorAll(".info-card").forEach(sibling => sibling.classList.add("side"));

            // Show the exit button for the clicked card
            this.querySelector(".exit").style.display = "inline";

            // Show the .info content
            document.querySelectorAll(".info").forEach(info => info.style.display = "block");

            open = !open;
            } else {
            // Reset classes for all cards
            this.parentElement.querySelectorAll(".info-card").forEach(sibling => sibling.classList.remove("full", "side"));
            
            // Hide the exit button and .info content
            this.querySelector(".exit").style.display = "none";
            document.querySelectorAll(".info").forEach(info => info.style.display = "none");

            open = !open;
                }
            });
            });

            
    // Loop through each button and add an event listener
    document.querySelectorAll('.see-more-btn').forEach(button => {
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
});
  



    // Hover effect for project items
    projectItems.forEach(item => {
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
    });
  
    // Process images
    async function processImages() {
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
});

