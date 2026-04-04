const products = [
  { id: "p1", name: "Smartphone X" },
  { id: "p2", name: "Laptop Pro" },
  { id: "p3", name: "Wireless Headphones" },
  { id: "p4", name: "Smartwatch Fit" },
  { id: "p5", name: "Gaming Console Z" }
];

const select = document.getElementById("product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.name;
  option.textContent = product.name;
  select.appendChild(option);
});