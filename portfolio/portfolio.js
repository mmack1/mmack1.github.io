// Filter Projects
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Reset the display of all items
            projectItems.forEach(item => {
                // Check if the category is "all" or the item matches the selected category
                if (category === 'all') {
                    item.style.display = 'block';
                    item.classList.add('visible');
                } else if (item.classList.contains(category)) {
                    item.style.display = 'block';
                    item.classList.add('visible');
                } else {
                    item.style.display = 'none';
                    item.classList.remove('visible');
                }
            });
        });
    });
});
