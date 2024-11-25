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
