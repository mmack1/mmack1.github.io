document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const filter = e.target.dataset.filter;
        filterItems(filter);
      });
    });
    
    function filterItems(filter) {
      portfolioItems.forEach(item => {
        const itemClasses = item.className.split(' ');
        
        if (filter === 'all' || itemClasses.includes(filter)) {
          item.classList.add('visible');
        } else {
          item.classList.remove('visible');
        }
      });
    }
  });
  