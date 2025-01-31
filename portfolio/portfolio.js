// Filter Projects
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterButtons.forEach(button => {
  button.addEventListener('click', function() {
    const category = this.getAttribute('data-category');
    
    projectItems.forEach(item => {
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

// Fade-in effect for projects
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    projectItems.forEach(item => {
      item.classList.add('visible');
    });
  }, 200); // Delay for fade-in effect
});
