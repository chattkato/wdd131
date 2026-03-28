const temples = [
  { name: "Salt Lake Temple", location: "Utah, USA", dedicated: "1893-04-06", area: 253000, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple.jpg" },
  { name: "Laie Hawaii Temple", location: "Hawaii, USA", dedicated: "1919-11-27", area: 42100, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple.jpg" },
  { name: "Cardston Alberta Temple", location: "Canada", dedicated: "1923-08-26", area: 88562, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/cardston-alberta-temple.jpg" },
  { name: "Mesa Arizona Temple", location: "Arizona, USA", dedicated: "1927-10-23", area: 113916, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mesa-arizona-temple.jpg" },
  { name: "Idaho Falls Temple", location: "Idaho, USA", dedicated: "1945-09-23", area: 92171, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/idaho-falls-idaho-temple.jpg" },
  { name: "Bern Switzerland Temple", location: "Switzerland", dedicated: "1955-09-11", area: 35546, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple.jpg" },
  { name: "Tokyo Japan Temple", location: "Japan", dedicated: "1980-10-27", area: 52000, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple.jpg" },

  { name: "Accra Ghana Temple", location: "Ghana", dedicated: "2004-01-11", area: 17500, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple.jpg" },
  { name: "Aba Nigeria Temple", location: "Nigeria", dedicated: "2005-08-07", area: 11500, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple.jpg" },
  { name: "Rome Italy Temple", location: "Italy", dedicated: "2019-03-10", area: 41000, imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple.jpg" }
];

const container = document.getElementById("cards");

function displayTemples(list) {
  container.innerHTML = "";

  list.forEach(temple => {
    const card = document.createElement("article");
    card.classList.add("card");

    card.innerHTML = `
      <h2>${temple.name}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${new Date(temple.dedicated).getFullYear()}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
    `;

    container.appendChild(card);
  });
}

/* ✅ NAV FILTER EVENTS (FOR <a> LINKS) */
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = link.id;

    if (id === "home") displayTemples(temples);
    if (id === "old") displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
    if (id === "new") displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
    if (id === "large") displayTemples(temples.filter(t => t.area > 90000));
    if (id === "small") displayTemples(temples.filter(t => t.area < 10000));
  });
});

/* FOOTER */
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

/* LOAD */
displayTemples(temples);