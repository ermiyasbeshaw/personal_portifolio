
function openModal(modalId) {
  const modalElement = document.getElementById(modalId);
  if (modalElement) {
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }
}

document.addEventListener('DOMContentLoaded', function() {
  if (typeof Masonry !== 'undefined') {
    var elem = document.querySelector('[data-masonry]');
    if (elem) {
      var msnry = new Masonry(elem, {
        itemSelector: '.col',
        percentPosition: true,
        gutter: 20
      });
    }
  }
  
 
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.style.cursor = 'pointer';
  });
});


document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const moonIcon = darkModeToggle.nextElementSibling.querySelector('i');
    const body = document.body;
    
    
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');
    

    if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
        enableDarkMode();
        darkModeToggle.checked = true;
    }
    
    
    darkModeToggle.addEventListener('change', function() {
        if (this.checked) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });
  
    function enableDarkMode() {
        body.classList.add('dark-mode');
        document.getElementById('skills').classList.add('text-dark');
        document.getElementById('contact').classList.add('text-dark');
        document.querySelectorAll('.con-card').forEach(e=>e.classList.add('text-white'));
        moonIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
    }
    
    function disableDarkMode() {
        body.classList.remove('dark-mode');
        document.getElementById('contact').classList.remove('text-dark');
        // document.querySelectorAll('.con-card').classList.remove('text-white');
        document.querySelectorAll('.con-card').forEach(e=>e.classList.remove('text-white'));
        moonIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
  const glassElement = document.querySelector('.glassmorphic-background');

 
  let gradientAngle = 0;

  function animateBackground() {
    gradientAngle += 0.1;
    if (gradientAngle >= 360) {
      gradientAngle = 0;
    }
    
   
    glassElement.style.background = `linear-gradient(${gradientAngle}deg, rgba(255, 0, 150, 0.1), rgba(0, 204, 255, 0.1))`;
    requestAnimationFrame(animateBackground);
  }

  animateBackground();
});
