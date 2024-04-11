// Function to toggle navbar collapse on small screens
document.addEventListener('DOMContentLoaded', function () {
    // Select the navbar toggler button
    const navbarToggler = document.querySelector('.navbar-toggler');
    // Select the navbar collapse element
    const navbarCollapse = document.querySelector('.navbar-collapse');
  
    // Add click event listener to navbar toggler button
    navbarToggler.addEventListener('click', function () {
      // Toggle the 'show' class on navbar collapse element
      navbarCollapse.classList.toggle('show');
    });
  
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  });
  