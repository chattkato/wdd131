// scripts/getdates.js

// Dynamically populate the current year in the footer
const currentYearSpan = document.getElementById("currentyear");
if (currentYearSpan) {
    const today = new Date();
    currentYearSpan.textContent = today.getFullYear();
}

// Dynamically set the last modified date/time in the second footer paragraph
const lastModifiedPara = document.getElementById("lastModified");
if (lastModifiedPara) {
    // document.lastModified returns a string like "03/08/2025 14:35:42"
    lastModifiedPara.textContent = `Last modified: ${document.lastModified}`;
}

// Optional: confirm no runtime errors (can be checked via console)
console.log("getdates.js loaded successfully. Copyright year and last modified updated.");