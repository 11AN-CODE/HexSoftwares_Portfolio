const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
        navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
        navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.9)';
    }
});



// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Offset for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});
