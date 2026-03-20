// Footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Static values
const temp = 28;
const windSpeed = 10;

// Wind Chill Function
function calculateWindChill(t, v) {
    return 13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16);
}

// Conditions check
let windChill = "N/A";

if (temp <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temp, windSpeed).toFixed(1) + " °C";
}

document.getElementById("windChill").textContent = windChill;
