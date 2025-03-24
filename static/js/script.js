document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Lightbox Effect
    const galleryImages = document.querySelectorAll('.gallery-container img');
    galleryImages.forEach(img => {
        img.addEventListener('click', function () {
            const lightbox = document.createElement('div');
            lightbox.id = 'lightbox';
            document.body.appendChild(lightbox);
            const imgElement = document.createElement('img');
            imgElement.src = this.src;
            lightbox.appendChild(imgElement);

            lightbox.addEventListener('click', () => {
                lightbox.remove();
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll(".popup-img");

    // Create popup elements
    const overlay = document.createElement("div");
    overlay.id = "overlay";

    const popupContainer = document.createElement("div");
    popupContainer.id = "popup-container";

    const popupImage = document.createElement("img");
    popupImage.id = "popup-image";

    popupContainer.appendChild(popupImage);
    document.body.appendChild(overlay);
    document.body.appendChild(popupContainer);

    // Click event for images
    galleryImages.forEach(img => {
        img.addEventListener("click", function () {
            popupImage.src = this.src;
            popupContainer.style.display = "block";
            overlay.style.display = "block";
        });
    });

    // Close popup on click or hover out
    overlay.addEventListener("click", function () {
        popupContainer.style.display = "none";
        overlay.style.display = "none";
    });

    popupContainer.addEventListener("mouseover", function () {
        popupContainer.style.display = "none";
        overlay.style.display = "none";
    });
});
