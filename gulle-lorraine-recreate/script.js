/* ===== 1. Dark mode switch ===== */
const darkToggle = document.querySelector("#dark-toggle");

function applyTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
  darkToggle.checked = isDark;
}

applyTheme(localStorage.getItem("theme") === "dark");

darkToggle.addEventListener("change", () => {
  applyTheme(darkToggle.checked);
  localStorage.setItem("theme", darkToggle.checked ? "dark" : "light");
});

/* ===== 2. Nav links show one section at a time ===== */
const navLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");

function showPage(id) {
  pages.forEach((page) => {
    page.hidden = page.id !== id;
  });
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.target === id);
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    showPage(link.dataset.target);
  });
});

document.querySelector(".brand").addEventListener("click", (e) => {
  e.preventDefault();
  showPage("home");
});

/* ===== 3. Like and Reset buttons ===== */
const START_LIKES = 24;
const likeBtn = document.querySelector("#like-btn");
const resetBtn = document.querySelector("#reset-btn");
const likeCount = document.querySelector("#like-count");

const saved = localStorage.getItem("likes");
let likes = saved === null ? START_LIKES : Number(saved);

function renderLikes() {
  likeCount.textContent = likes;
  localStorage.setItem("likes", likes);
}

likeBtn.addEventListener("click", () => {
  likes++;
  renderLikes();
});

resetBtn.addEventListener("click", () => {
  likes = START_LIKES;
  renderLikes();
});

renderLikes();