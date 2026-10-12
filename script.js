
const themeButton = document.getElementById("themeButton");
const yearElement = document.getElementById("year");

// Display the current year
yearElement.textContent = new Date().getFullYear();

// Toggle between light and dark themes
themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  const isDarkMode = document.body.classList.contains("dark");

  themeButton.textContent = isDarkMode ? "☀️" : "🌙";
  themeButton.setAttribute(
    "aria-label",
    isDarkMode ? "Switch to light mode" : "Switch to dark mode"
  );
});
