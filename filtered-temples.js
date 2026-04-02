const container = document.getElementById("cards");

function displayTemples(list) {
  container.innerHTML = "";
  list.forEach(t => {
    const card = document.createElement("div");
    card.innerHTML = `<h2>${t.name}</h2>`;
    container.appendChild(card);
  });
}

displayTemples([{ name: "Test Temple" }]);