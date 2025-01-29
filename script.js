window.addEventListener("load", () => {
  // Hide loader after all images and content are loaded
  const loader = document.getElementById("page-loader");
  setTimeout(() => {
    loader.style.opacity = "0"; // Remove from view
  }, 500); // Matches fade-out duration (optional)
  setTimeout(() => {
    loader.style.display = "none"; // Remove from view
  }, 1000); // Matches fade-out duration (optional)
});

const nav = document.querySelector("nav");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("change", () => {
  if (hamburger.checked) {
    setTimeout(() => {
      nav.style.display = "block";
    }, 410);
  } else {
    setTimeout(() => {
      nav.style.display = "none";
    }, 410);
  }
});
