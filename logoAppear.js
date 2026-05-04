window.addEventListener("load", function () {
  const logo = document.querySelector(".mainLogo");

  if (!logo) return;

  setTimeout(function () {
    logo.classList.add("show");
  }, 1000);
});