/**
 * theme.js
 * Responsible for setting the initial theme (light/dark) based on user settings or system preference.
 */
(function () {
    const htmlEl = document.documentElement;
    const themes = ["light", "dark"];
  
    function setTheme(theme) {
      // Remove any previously applied theme classes
      htmlEl.classList.remove(...themes);
      // Add the current theme class
      htmlEl.classList.add(theme);
      // Update the color scheme property for CSS (if supported)
      if (themes.includes(theme)) {
        htmlEl.style.colorScheme = theme;
      }
    }
  
    // Retrieve the stored theme or default to "dark"
    let storedTheme = localStorage.getItem("theme") || "dark";
    // If the stored theme is set to "system", choose based on the media query
    if (storedTheme === "system") {
      storedTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    setTheme(storedTheme);
  })();
  