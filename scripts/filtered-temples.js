// ===============================
// TEMPLE ARRAY (7 + 3 = 10)
// ===============================
const temples = [
  { name: "Salt Lake Temple", location: "Utah, USA", dedicated: "1893-04-06", area: 253000, imageUrl: "https://churchofjesuschristtemples.org/salt-lake-temple/photographs/#Gallery-7.jpg" },
  { name: "Laie Hawaii Temple", location: "Hawaii, USA", dedicated: "1919-11-27", area: 42100, imageUrl: "https://churchofjesuschristtemples.org/laie-hawaii-temple/photographs/#Gallery-1.jpg" },
  { name: "Cardston Alberta Temple", location: "Canada", dedicated: "1923-08-26", area: 88562, imageUrl: "https://churchofjesuschristtemples.org/cardston-alberta-temple/photographs/#Gallery-1.jpg" },
  { name: "Mesa Arizona Temple", location: "Arizona, USA", dedicated: "1927-10-23", area: 113916, imageUrl: "https://churchofjesuschristtemples.org/mesa-arizona-temple/photographs/#Gallery-1.jpg" },
  { name: "Idaho Falls Temple", location: "Idaho, USA", dedicated: "1945-09-23", area: 92171, imageUrl: "https://churchofjesuschristtemples.org/idaho-falls-idaho-temple/photographs/#Official-2.jpg" },
  { name: "Bern Switzerland Temple", location: "Switzerland", dedicated: "1955-09-11", area: 35546, imageUrl: "https://churchofjesuschristtemples.org/bern-switzerland-temple/photographs/#Gallery-2.jpg" },
  { name: "Tokyo Japan Temple", location: "Japan", dedicated: "1980-10-27", area: 52000, imageUrl: "https://churchofjesuschristtemples.org/tokyo-japan-temple/photographs/#Gallery-2" },

  // Added temples
  { name: "Accra Ghana Temple", location: "Ghana", dedicated: "2004-01-11", area: 17500, imageUrl: "https://churchofjesuschristtemples.org/accra-ghana-temple/photographs/#Gallery-5.jpg" },
  { name: "Aba Nigeria Temple", location: "Nigeria", dedicated: "2005-08-07", area: 11500, imageUrl: "https://churchofjesuschristtemples.org/temples/aba-nigeria-temple/photographs/#Official-1.jpg" },
  { name: "Rome Italy Temple", location: "Italy", dedicated: "2019-03-10", area: 41000, imageUrl: "https://churchofjesuschristtemples.org/rome-italy-temple/photographs/#Gallery-2.jpg" }
];

// ===============================
// DOM ELEMENT
// ===============================
const container = document.getElementById("cards");

// ===============================
// DISPLAY FUNCTION
// ===============================
function displayTemples(templeList) {
  container.innerHTML = "";

  templeList.forEach(temple => {
    const card = document.createElement("article");
    card.classList.add("card");

    card.innerHTML = `
      <h2>${temple.name}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${new Date(temple.dedicated).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      })}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="Image of ${temple.name}" loading="lazy" width="400" height="250">
    `;

    container.appendChild(card);
  });
}

// ===============================
// FILTER EVENTS
// ===============================
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = link.id;

    if (id === "home") displayTemples(temples);

    if (id === "old") {
      displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
    }

    if (id === "new") {
      displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
    }

    if (id === "large") {
      displayTemples(temples.filter(t => t.area > 90000));
    }

    if (id === "small") {
      displayTemples(temples.filter(t => t.area < 10000));
    }
  });
});

// ===============================
// FOOTER
// ===============================
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// ===============================
// INITIAL LOAD
// ===============================
displayTemples(temples);