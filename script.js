
// Function to Display Live Digital Clock
function updateClock() {

    const now = new Date();

    let hours = String(now.getHours()).padStart(2, "0");
    let minutes = String(now.getMinutes()).padStart(2, "0");
    let seconds = String(now.getSeconds()).padStart(2, "0");

    document.getElementById("clock").textContent =
        `${hours}:${minutes}:${seconds}`;

    // Display Current Date
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    document.getElementById("date").textContent =
        now.toLocaleDateString("en-IN", options);
}


// Function to Display New Year Countdown
function updateCountdown() {

    const now = new Date();

    // Target Date: January 1, 2027
    const newYear = new Date(2027, 0, 1, 0, 0, 0);

    const difference = newYear - now;

    if (difference <= 0) {
        document.querySelector(".countdown").innerHTML =
            "<h2>Happy New Year 2027! 🎉</h2>";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


// Update Clock and Countdown Every Second
updateClock();
updateCountdown();

setInterval(updateClock, 1000);
setInterval(updateCountdown, 1000);
