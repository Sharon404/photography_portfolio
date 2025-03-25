document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Popup Effect
    const images = document.querySelectorAll(".photo-card img");
    const overlay = document.createElement("div"); // Create overlay dynamically
    overlay.id = "overlay";
    overlay.style.cssText = `
        position: fixed;
        top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: none; justify-content: center; align-items: center;
        z-index: 9999;
        transition: opacity 0.3s ease-in-out;
        opacity: 0;
    `;
    
    const popupImage = document.createElement("img"); // Create popup image dynamically
    popupImage.id = "popup-image";
    popupImage.style.cssText = `
        max-width: 80%;
        max-height: 80%;
        border-radius: 10px;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    `;
    
    overlay.appendChild(popupImage);
    document.body.appendChild(overlay); // Add overlay to the body

    images.forEach(img => {
        img.addEventListener("click", function () {
            console.log("Image clicked:", this.src);  // Debugging log
            popupImage.src = this.src;
            overlay.style.display = "flex";
            setTimeout(() => {
                overlay.style.opacity = "1";
                popupImage.style.opacity = "1";
            }, 10);
        });
    });

    overlay.addEventListener("click", function (e) {
        if (e.target === overlay) { // Close only if clicking outside the image
            overlay.style.opacity = "0";
            popupImage.style.opacity = "0";
            setTimeout(() => {
                overlay.style.display = "none";
                popupImage.src = ""; // Reset image source
            }, 300); // Wait for fade-out effect
        }
    });

    // Image Loading Animation
    document.querySelectorAll(".photo-card img").forEach(img => {
        img.style.opacity = "0"; // Initially hide images
        img.addEventListener("load", function () {
            this.style.opacity = "1"; // Fade in on load
        });
    });
});
