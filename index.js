/* Contact panel JS */
const contactBtn = document.getElementById("contactBtn");
const contactCard = document.getElementById("contactCard");

contactBtn.addEventListener("click", () => {
    contactCard.classList.toggle("showCard");
});


/* Logo appearing JS */
window.addEventListener("load", function () {
  const logo = document.querySelector(".mainLogo");
  if (!logo) return;

  // Check if intro exists
  const intro = document.querySelector("#intro"); // or your actual intro selector

  if (intro) {
    // Wait until intro finishes
    setTimeout(() => {
      logo.classList.add("show");
    }, 3800); // match intro
  } else {
    // All other pages
    setTimeout(() => {
      logo.classList.add("show");
    }, 600);
  }
});


/* Mouse tail */
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("mousemove", (e) => {
    const clover = document.createElement("div");
    clover.className = "clover";

    clover.textContent = "🍀";
    clover.style.left = `${e.clientX}px`;
    clover.style.top = `${e.clientY}px`;
    clover.style.fontSize = `${16 + Math.random() * 10}px`;

    document.body.appendChild(clover);

    setTimeout(() => {
      clover.remove();
    }, 900);
  });
});
