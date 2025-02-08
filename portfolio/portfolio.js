document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
  
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

<script>
  // Select all "See More" buttons
  document.querySelectorAll('.see-more-btn').forEach(button => {
    button.addEventListener('click', () => {
      const fullDesc = button.nextElementSibling;  // Get the associated full description
      const isVisible = fullDesc.style.display === 'block';

      // Toggle the visibility of the full description
      fullDesc.style.display = isVisible ? 'none' : 'block';
      button.textContent = isVisible ? 'See More' : 'See Less';  // Change the button text
    });
  });
</script>
