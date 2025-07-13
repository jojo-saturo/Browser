const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const themeCheck = () => {
  const userTheme = localStorage.getItem("theme");

  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  } else {
    document.documentElement.classList.remove("dark");
    moonIcon.classList.remove("hidden");
    sunIcon.classList.add("hidden");
  }
};

const themeSwitch = () => {
  const isDark = document.documentElement.classList.contains("dark");
  if (isDark) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    moonIcon.classList.add("hidden");
    sunIcon.classList.remove("hidden");
  }
};

sunIcon.addEventListener("click", themeSwitch);
moonIcon.addEventListener("click", themeSwitch);

themeCheck();
