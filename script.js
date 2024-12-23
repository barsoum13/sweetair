document.addEventListener("DOMContentLoaded", () => {
    const learnMoreBtn = document.querySelector(".circle-button");
    const aboutSection = document.getElementById("about");

    learnMoreBtn.addEventListener("click", () => {
        aboutSection.scrollIntoView({ behavior: "smooth" });
    });

    // Add interactivity for accordion in methodology
    const accordionHeaders = document.querySelectorAll(".accordion-button");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", (e) => {
            const accordionContent = header.nextElementSibling;
            if (accordionContent.classList.contains("show")) {
                accordionContent.classList.remove("show");
            } else {
                document.querySelectorAll(".accordion-collapse").forEach(collapse => collapse.classList.remove("show"));
                accordionContent.classList.add("show");
            }
        });
    });

    // Enhance cards with animation effects
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)"; // Corrected this line
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
        });
    });

    // Handle contact form submission
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for your message! We will get back to you soon.");
        contactForm.reset();
    });
});
