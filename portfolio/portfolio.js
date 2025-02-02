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
