// ARRAY + OBJECTS
const services = [
  { name: "Broadband", desc: "Fast internet solutions" },
  { name: "Cybersecurity", desc: "Secure your data" },
  { name: "Cloud", desc: "Reliable cloud infrastructure" }
];

// DISPLAY FUNCTION (DOM + TEMPLATE LITERALS)
function displayServices(data) {
  const container = document.getElementById("servicesContainer");
  if (!container) return;

  container.innerHTML = data.map(service => `
    <div class="card">
      <h3>${service.name}</h3>
      <p>${service.desc}</p>
    </div>
  `).join("");
}

// SEARCH (ARRAY METHOD + CONDITIONAL)
function setupSearch() {
  const input = document.getElementById("searchBox");

  if (!input) return;

  input.addEventListener("input", () => {
    const value = input.value.toLowerCase();

    const filtered = services.filter(service =>
      service.name.toLowerCase().includes(value)
    );

    displayServices(filtered);
  });
}

// BUTTON EVENT
function setupCTA() {
  const btn = document.getElementById("ctaBtn");
  const msg = document.getElementById("welcomeMsg");

  if (btn) {
    btn.addEventListener("click", () => {
      msg.textContent = "Let’s build your digital future.";
    });
  }
}

// FORM (CONDITIONAL + localStorage)
function setupForm() {
  const form = document.getElementById("contactForm");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const feedback = document.getElementById("formFeedback");

    if (name.trim() === "") {
      feedback.textContent = "Name is required.";
    } else {
      localStorage.setItem("username", name);
      feedback.textContent = `Thank you ${name}. We will contact you shortly.`;
    }
  });
}

// LOAD USER (localStorage)
function loadUser() {
  const user = localStorage.getItem("username");

  if (user) {
    const msg = document.getElementById("welcomeMsg");
    if (msg) {
      msg.textContent = `Welcome back, ${user}`;
    }
  }
}

// INIT
displayServices(services);
setupSearch();
setupCTA();
setupForm();
loadUser();