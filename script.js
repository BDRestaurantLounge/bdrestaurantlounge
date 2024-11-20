
  document.addEventListener("DOMContentLoaded", function () {
    const reviews = document.querySelectorAll(".review");
    let currentIndex = 0;

    // Function to show the current review
    function showReview(index) {
      reviews.forEach((review, i) => {
        review.style.display = i === index ? "block" : "none";
      });
    }

    // Show the first review initially
    showReview(currentIndex);

    // Auto-rotate reviews every 5 seconds
    setInterval(() => {
      currentIndex = (currentIndex + 1) % reviews.length;
      showReview(currentIndex);
    }, 5000);

    // Optional: Add navigation buttons
    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");

    if (nextButton && prevButton) {
      nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % reviews.length;
        showReview(currentIndex);
      });

      prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        showReview(currentIndex);
      });
    }
  });

  function toggleMenu() {
    const mobileNav = document.getElementById("mobileNav");
    if (mobileNav.style.display === "block") {
      mobileNav.style.display = "none";
    } else {
      mobileNav.style.display = "block";
    }
  }
  