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
    `;
    
    const popupImage = document.createElement("img"); // Create popup image dynamically
    popupImage.id = "popup-image";
    popupImage.style.cssText = `
        max-width: 80%;
        max-height: 80%;
        border-radius: 10px;
    `;
    
    overlay.appendChild(popupImage);
    document.body.appendChild(overlay); // Add overlay to the body

    images.forEach(img => {
        img.addEventListener("click", function () {
            console.log("Image clicked:", this.src);  // Debugging log
            popupImage.src = this.src;
            overlay.style.display = "flex"; // Show overlay
        });
    });

    overlay.addEventListener("click", function (e) {
        if (e.target === overlay) { // Close only if clicking outside the image
            overlay.style.display = "none";
            popupImage.src = ""; // Reset image source
        }
    });
});
