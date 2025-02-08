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

    // Loop through each button and add an event listener
    seeMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const fullDesc = button.nextElementSibling;  // Get the associated full description div
            const isVisible = fullDesc.style.display === 'block';  // Check if it's already visible
            
            // Toggle the visibility of the full description
            fullDesc.style.display = isVisible ? 'none' : 'block';
            
            // Change the button text based on the visibility state
            button.textContent = isVisible ? 'See More' : 'See Less';  // Toggle between 'See More' and 'See Less'
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

