// Set footer year and last modified
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    const menu = navMenu.querySelector('ul');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        hamburger.innerHTML = '&#9776;'; // Hamburger icon
    } else {
        menu.style.display = 'block';
        hamburger.innerHTML = '&times;'; // Close icon
    }
});
