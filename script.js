document.addEventListener("DOMContentLoaded", () => {
    const learnMoreBtn = document.getElementById("learn-more-btn");
    const aboutSection = document.getElementById("about");

    learnMoreBtn.addEventListener("click", () => {
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });
});
