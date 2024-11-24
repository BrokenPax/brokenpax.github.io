
document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById('hero-title');
  const finalText = "Bully to Mars";
  let tempText = "";
  let iterations = 0;

  function matrixEffect() {
    tempText = Array.from({ length: finalText.length }, () =>
      String.fromCharCode(33 + Math.random() * 94)).join("");
    title.textContent = tempText;

    if (++iterations > 20) {
      title.textContent = finalText;
      clearInterval(animation);
    }
  }

  const animation = setInterval(matrixEffect, 100);
});
