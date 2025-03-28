document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("popup-modal");
  const modalImg = document.getElementById("popup-image");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".photo-card img").forEach((img) => {
    img.addEventListener("click", function () {
      modal.style.display = "flex"; // Show modal
      modalImg.src = this.src; // Set clicked image in popup
    });
  });

  // Close popup on clicking "X" or outside the image
  closeBtn.addEventListener("click", () => (modal.style.display = "none"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
