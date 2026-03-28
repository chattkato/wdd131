// ===============================
// TEMPLE DATA
// ===============================
const temples = [
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893-04-06",
    area: 253000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple.jpg"
  },
  {
    name: "Laie Hawaii Temple",
    location: "Laie, Hawaii, USA",
    dedicated: "1919-11-27",
    area: 42100,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple.jpg"
  },
  {
    name: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004-01-11",
    area: 17500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple.jpg"
  },
  {
    name: "Aba Nigeria Temple",
    location: "Aba, Nigeria",
    dedicated: "2005-08-07",
    area: 11500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple.jpg"
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 41000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple.jpg"
  },
  {
    name: "Paris France Temple",
    location: "Paris, France",
    dedicated: "2017-05-21",
    area: 44000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple.jpg"
  },
  {
    name: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedicated: "1980-10-27",
    area: 52000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple.jpg"
  },
  {
    name: "Freiberg Germany Temple",
    location: "Freiberg, Germany",
    dedicated: "1985-06-29",
    area: 21000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/freiberg-germany-temple.jpg"
  },
  {
    name: "Bern Switzerland Temple",
    location: "Bern, Switzerland",
    dedicated: "1955-09-11",
    area: 35500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bern-switzerland-temple.jpg"
  }
];

// ===============================
// DOM REFERENCES
// ===============================
const container = document.querySelector("#cards");

// ===============================
// DISPLAY FUNCTION
// ===============================
const displayTemples = (templeList) => {
  container.innerHTML = "";

  templeList.forEach(temple => {
    const card = document.createElement("article");
    card.classList.add("card");

    card.innerHTML = `
      <h2>${temple.name}</h2>
      <p><span class="label">Location:</span> ${temple.location}</p>
      <p><span class="label">Dedicated:</span> ${formatDate(temple.dedicated)}</p>
      <p><span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="Image of ${temple.name}" loading="lazy">
    `;

    container.appendChild(card);
  });
};

// ===============================
// HELPERS
// ===============================
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
};

// ===============================
// FILTER FUNCTIONS
// ===============================
const filters = {
  home: () => temples,
  old: () => temples.filter(t => new Date(t.dedicated).getFullYear() < 1900),
  new: () => temples.filter(t => new Date(t.dedicated).getFullYear() > 2000),
  large: () => temples.filter(t => t.area > 90000),
  small: () => temples.filter(t => t.area < 10000)
};

// ===============================
// EVENT LISTENERS (CLEAN VERSION)
// ===============================
document.querySelectorAll("nav button").forEach(button => {
  button.addEventListener("click", (e) => {
    const filter = e.target.id;
    displayTemples(filters[filter]());
  });
});

// ===============================
// FOOTER
// ===============================
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// ===============================
// INITIAL LOAD
// ===============================
displayTemples(temples);