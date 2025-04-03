document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("popup-modal");
    const popupImg = document.getElementById("popup-image");
    const closeBtn = document.querySelector(".close");
    const images = document.querySelectorAll(".popup-img"); // All images in the gallery
    let currentIndex = 0;

    // Buttons for previous & next images
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    // Function to open popup & display image
    function openPopup(index) {
        currentIndex = index;
        popupImg.src = images[index].src;
        modal.style.display = "flex"; // Show modal
    }

    // Function to close popup
    function closePopup() {
        modal.style.display = "none";
    }

    console.log("Total images found:", document.querySelectorAll(".popup-img").length);
    // Function to navigate images
    function changeImage(step) {
        let images = document.querySelectorAll(".popup-img");
        
        if (images.length === 0) {
            console.error("No images found. Ensure images have class='popup-img'.");
            return;
        }
    
        currentIndex += step;
    
        if (currentIndex < 0) {
            currentIndex = images.length - 1; // Wrap to last image
        } else if (currentIndex >= images.length) {
            currentIndex = 0; // Wrap to first image
        }
    
        console.log("Changing to image index:", currentIndex);
        
        if (images[currentIndex]) {
            popupImg.src = images[currentIndex].src;
        } else {
            console.error("Image at currentIndex is undefined.");
        }
    }
    

    // Attach click event to all images
    images.forEach((img, index) => {
        img.addEventListener("click", () => openPopup(index));
    });

    // Close button event
    closeBtn.addEventListener("click", closePopup);

    // Navigation buttons
    prevBtn.addEventListener("click", () => changeImage(-1));
    nextBtn.addEventListener("click", () => changeImage(1));

    // Close popup when clicking outside image
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closePopup();
        }
    });
});
