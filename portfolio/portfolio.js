document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
  
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;
  
            projectItems.forEach(item => {
                if (category === 'all' || item.classList.contains(category) || Array.from(item.classList).some(cls => cls === category)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

// JavaScript for controlling hover behavior or additional interactivity
const projectItems = document.querySelectorAll('.project-item');

projectItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const moreInfo = item.querySelector('.more-info');
        moreInfo.style.opacity = '1'; // Show extra content
    });

    item.addEventListener('mouseleave', () => {
        const moreInfo = item.querySelector('.more-info');
        moreInfo.style.opacity = '0'; // Hide extra content
    });
});


async function processImages() {
    const bodyChildren = Array.from(document.body.children);
    const imgElements = bodyChildren.flatMap(child => 
      child.tagName === 'IMG' ? [child] : Array.from(child.querySelectorAll('img'))
    );
  
    const img = imgElements[0];
  
    if (img) {
      // Ensure setElementStyles is an async function, otherwise remove 'await'
      await setElementStyles(img, {
        'flex-shrink': '0',
        'align-self': 'flex-start',
        'min-height': 'fit-content'
      });
    }
  
    const data = {
      imgStyles: {
        flexShrink: window.getComputedStyle(img)['flex-shrink'],
        alignSelf: window.getComputedStyle(img)['align-self'],
        minHeight: window.getComputedStyle(img)['min-height'],
        width: window.getComputedStyle(img)['width'],
        height: window.getComputedStyle(img)['height'],
        boundingRect: img.getBoundingClientRect(),
      }
    };
  
    console.log(data);
  }
  
  // Call the function to execute
  processImages();
  