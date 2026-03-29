// Temple array with 7 original entries + 3 additional temples
const temples = [
  // Original 7 temples
  { name: "Salt Lake Temple", location: "Utah, USA", dedicated: "1893-04-06", area: 253000, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple.jpg" },
  { name: "Laie Hawaii Temple", location: "Hawaii, USA", dedicated: "1919-11-27", area: 42100, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple.jpg" },
  { name: "Cardston Alberta Temple", location: "Canada", dedicated: "1923-08-26", area: 88562, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/cardston-alberta-temple.jpg" },
  { name: "Mesa Arizona Temple", location: "Arizona, USA", dedicated: "1927-10-23", area: 113916, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mesa-arizona-temple.jpg" },
  { name: "Idaho Falls Temple", location: "Idaho, USA", dedicated: "1945-09-23", area: 92171, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/idaho-falls-idaho-temple.jpg" },
  { name: "Bern Switzerland Temple", location: "Switzerland", dedicated: "1955-09-11", area: 35546, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple.jpg" },
  { name: "Tokyo Japan Temple", location: "Japan", dedicated: "1980-10-27", area: 52000, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple.jpg" },
  
  // 3 Additional temples added by student
  { name: "Accra Ghana Temple", location: "Ghana", dedicated: "2004-01-11", area: 17500, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple.jpg" },
  { name: "Aba Nigeria Temple", location: "Nigeria", dedicated: "2005-08-07", area: 11500, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple.jpg" },
  { name: "Rome Italy Temple", location: "Italy", dedicated: "2019-03-10", area: 41000, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple.jpg" }
];

const container = document.getElementById("cards");

// Function to display temple cards dynamically
function displayTemples(list) {
  if (!container) return;
  
  container.innerHTML = "";
  
  if (list.length === 0) {
    container.innerHTML = '<p style="text-align:center; grid-column:1/-1;">No temples match this filter. Try another option!</p>';
    return;
  }
  
  list.forEach(temple => {
    const card = document.createElement("article");
    card.classList.add("card");
    
    // Format dedication year
    const dedicationYear = new Date(temple.dedicated).getFullYear();
    const formattedDate = new Date(temple.dedicated).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    
    card.innerHTML = `
      <h2>${temple.name}</h2>
      <p><strong>📍 Location:</strong> ${temple.location}</p>
      <p><strong>📅 Dedicated:</strong> ${formattedDate}</p>
      <p><strong>📐 Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="Exterior view of ${temple.name}" loading="lazy">
    `;
    
    container.appendChild(card);
  });
}

// Filter functions
function filterTemples(criteria) {
  switch(criteria) {
    case 'home':
      displayTemples(temples);
      break;
    case 'old':
      // Old: temples dedicated before 1900
      displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
      break;
    case 'new':
      // New: temples dedicated after 2000
      displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
      break;
    case 'large':
      // Large: temples with area greater than 90,000 sq ft
      displayTemples(temples.filter(t => t.area > 90000));
      break;
    case 'small':
      // Small: temples with area less than 10,000 sq ft
      displayTemples(temples.filter(t => t.area < 10000));
      break;
    default:
      displayTemples(temples);
  }
}

// Add event listeners to all navigation links
document.addEventListener('DOMContentLoaded', () => {
  // Get all navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Remove active class from all links
      navLinks.forEach(l => l.classList.remove('active'));
      
      // Add active class to clicked link
      link.classList.add('active');
      
      // Apply filter based on link id
      const filterId = link.id;
      filterTemples(filterId);
    });
  });
  
  // Set Home as active by default
  const homeLink = document.getElementById('home');
  if (homeLink) {
    homeLink.classList.add('active');
  }
  
  // Display all temples initially
  displayTemples(temples);
});

// Update footer with current year and last modified date
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

const lastModifiedSpan = document.getElementById("lastModified");
if (lastModifiedSpan) {
  lastModifiedSpan.textContent = document.lastModified;
}

// Add error handling for images
document.addEventListener('error', (e) => {
  if (e.target.tagName === 'IMG') {
    e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available';
    e.target.alt = 'Image not available';
  }
}, true);