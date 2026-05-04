window.addEventListener("load", () => {

    const intro = document.getElementById("intro");
    const pageContent = document.getElementById("pageContent");

    // intro fades out
    setTimeout(() => {
        intro.classList.add("fadeOut");
    }, 3000);

    // page into focus
    setTimeout(() => {
        pageContent.classList.add("pageLoaded");
    }, 4000);

    // remove intro
    setTimeout(() => {
        intro.style.display = "none";
    }, 5000);

});