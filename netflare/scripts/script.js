// ============================================================
// NETFLARE NIGERIA — script.js
// Meets W06 requirements:
//  ✔ Multiple functions
//  ✔ DOM selection, modification, and event listeners
//  ✔ Conditional branching
//  ✔ Objects, arrays, and array methods
//  ✔ Template literals for all string output
//  ✔ localStorage usage
// ============================================================


// ============================================================
// DATA — OBJECTS AND ARRAYS
// ============================================================

const services = [
  {
    name: "Broadband Solutions",
    desc: "High-speed fiber, wireless, and VSAT connectivity for enterprises. Dedicated leased lines from 10Mbps to 10Gbps with 99.9% uptime SLA.",
    icon: "📡",
    tag: "Connectivity"
  },
  {
    name: "Cybersecurity",
    desc: "Next-gen firewall, 24/7 SOC monitoring, vulnerability assessments, and NDPR compliance support to protect your business from evolving threats.",
    icon: "🔐",
    tag: "Security"
  },
  {
    name: "Cloud Services",
    desc: "Flexible public, private, and hybrid cloud environments. Managed backup, disaster recovery, and Microsoft 365 licensing with local data residency.",
    icon: "☁️",
    tag: "Cloud"
  },
  {
    name: "FlareDMS",
    desc: "Our enterprise document management system built for African businesses. OCR search, role-based access control, and automated approval workflows.",
    icon: "🗂️",
    tag: "Software"
  }
];


// ============================================================
// DISPLAY SERVICES — DOM + TEMPLATE LITERALS + ARRAY METHOD
// ============================================================

function displayServices(data) {
  const container = document.getElementById("servicesContainer");
  if (!container) return;

  if (data.length === 0) {
    container.innerHTML = `
      <p class="search-empty" style="grid-column:1/-1; color:var(--gray); padding:1rem 0;">
        No services found matching your search.
      </p>
    `;
    return;
  }

  container.innerHTML = data.map(service => `
    <div class="service-card" role="article">
      <span class="service-card-icon" aria-hidden="true">${service.icon}</span>
      <h3>${service.name}</h3>
      <p>${service.desc}</p>
      <a href="services.html" class="service-card-link">Learn more →</a>
    </div>
  `).join("");
}


// ============================================================
// SEARCH — ARRAY FILTER + CONDITIONAL
// ============================================================

function setupSearch() {
  const input = document.getElementById("searchBox");
  if (!input) return;

  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();

    const filtered = services.filter(service =>
      service.name.toLowerCase().includes(query) ||
      service.desc.toLowerCase().includes(query) ||
      service.tag.toLowerCase().includes(query)
    );

    displayServices(filtered);
  });
}


// ============================================================
// CTA BUTTON — EVENT LISTENER + localStorage
// ============================================================

function setupCTA() {
  const btn = document.getElementById("ctaBtn");
  const msg = document.getElementById("welcomeMsg");

  if (!btn || !msg) return;

  btn.addEventListener("click", () => {
    const storedName = localStorage.getItem("username");

    if (storedName) {
      msg.textContent = `Welcome back, ${storedName}. Let us build your digital future.`;
    } else {
      msg.textContent = "Let us build your digital future.";
    }

    // Navigate to contact page after short delay
    setTimeout(() => {
      window.location.href = "contact.html";
    }, 900);
  });
}


// ============================================================
// FORM VALIDATION — CONDITIONAL + localStorage
// ============================================================

function setupForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput    = document.getElementById("name");
    const emailInput   = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const feedback     = document.getElementById("formFeedback");

    const nameError    = document.getElementById("nameError");
    const emailError   = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    // Clear previous state
    [nameInput, emailInput, messageInput].forEach(field => {
      field.classList.remove("invalid");
    });

    if (nameError)    nameError.textContent    = "";
    if (emailError)   emailError.textContent   = "";
    if (messageError) messageError.textContent = "";
    feedback.textContent = "";
    feedback.className   = "form-feedback";

    const name    = nameInput.value.trim();
    const email   = emailInput.value.trim();
    const message = messageInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let hasError = false;

    // Validate name
    if (name === "") {
      nameInput.classList.add("invalid");
      if (nameError) nameError.textContent = "Please enter your full name.";
      hasError = true;
    }

    // Validate email
    if (email === "") {
      emailInput.classList.add("invalid");
      if (emailError) emailError.textContent = "Please enter your email address.";
      hasError = true;
    } else if (!emailPattern.test(email)) {
      emailInput.classList.add("invalid");
      if (emailError) emailError.textContent = "Please enter a valid email address.";
      hasError = true;
    }

    // Validate message
    if (message === "") {
      messageInput.classList.add("invalid");
      if (messageError) messageError.textContent = "Please include a message.";
      hasError = true;
    }

    if (hasError) {
      feedback.textContent = "Please fix the errors above before submitting.";
      feedback.className   = "form-feedback error";
      return;
    }

    // Persist user name to localStorage
    localStorage.setItem("username", name);
    localStorage.setItem("userEmail", email);

    feedback.textContent = `Thank you, ${name}. Your message has been received and a Netflare engineer will reach out to ${email} shortly.`;
    feedback.className   = "form-feedback success";

    form.reset();
  });
}


// ============================================================
// LOAD RETURNING USER — localStorage READ
// ============================================================

function loadUser() {
  const storedName = localStorage.getItem("username");
  const welcomeMsg = document.getElementById("welcomeMsg");

  if (storedName && welcomeMsg) {
    welcomeMsg.textContent = `Welcome back, ${storedName}.`;
  }
}


// ============================================================
// MOBILE NAVIGATION TOGGLE
// ============================================================

function setupMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav    = document.querySelector("nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close nav when a link is clicked
  nav.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}


// ============================================================
// SCROLL REVEAL — SUBTLE ENTRANCE ANIMATION
// ============================================================

function setupScrollReveal() {
  const targets = document.querySelectorAll(
    ".service-detail-card, .why-card, .trust-item, .service-card"
  );

  if (!targets.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity    = "1";
        entry.target.style.transform  = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(el => {
    el.style.opacity   = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(el);
  });
}


// ============================================================
// INIT — RUN ALL SETUP FUNCTIONS ON DOM READY
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  displayServices(services);
  setupSearch();
  setupCTA();
  setupForm();
  loadUser();
  setupMobileNav();
  setupScrollReveal();
});