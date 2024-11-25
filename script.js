document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById('hero-title');
  const finalText = "Bully to Mars";
  const letters = finalText.split("");

  title.textContent = ""; // Clear initial content

  letters.forEach((letter, index) => {
    const span = document.createElement('span');
    span.textContent = letter;
    span.style.opacity = "0";
    span.style.transition = `opacity 0.8s ease, transform 0.8s ease`;
    span.style.transform = "translateY(-20px)";
    title.appendChild(span);

    setTimeout(() => {
      span.style.opacity = "1";
      span.style.transform = "translateY(0)";
    }, index * 300); // Slower staggered delay
  });
});

// Set the date for the event
const targetDate = new Date("2024-12-08T03:00:00Z").getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update the HTML
    document.getElementById("days").textContent = days.toString().padStart(2, '0');
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');

    // Stop the countdown when time is up
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown-timer").innerHTML = "<h3>We're Live!</h3>";
    }
}, 1000);
