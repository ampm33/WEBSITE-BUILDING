menu.js
// 1. Grab the button that opens the menu
const menuBtn = document.getElementById("menuBtn");

// 2. Grab the dark background behind the menu
const backdrop = document.getElementById("backdrop");

// 3. Function that opens or closes the menu
function setMenu(open) {
  // Adds or removes the "menu-open" class on <body>
  document.body.classList.toggle("menu-open", open);

  // Update accessibility state
  if (menuBtn) {
    menuBtn.setAttribute("aria-expanded", String(open));
  }

  // Show or hide the dark background
  if (backdrop) {
    backdrop.hidden = !open;
  }
}

// 4. When the menu button is clicked
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    const isOpen = document.body.classList.contains("menu-open");
    setMenu(!isOpen);
  });
}

// 5. Clicking the dark background closes the menu
if (backdrop) {
  backdrop.addEventListener("click", () => {
    setMenu(false);
  });
}

// 6. Pressing ESC closes the menu
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    setMenu(false);
  }
});
<body>
  <aside class="sidebar">
    <a class="brand__link" href="index.html">PRANAPHOTOS</a>
  

    <nav class="nav">
      <a class="nav__link" href="index.html">HOME</a>
      <a class="nav__link" href="about.html">ABOUT</a>
      <a class="nav__link" href="portfolio.html">PORTFOLIO</a>
      <a class="nav__link" href="videography.html">VIDEOGRAPHY</a>
      <a class="nav__link" href="contact.html">CONTACT</a>
    </nav>

    <div class="sidebar__footer">© PRANAPHOTOS</div>
  </aside>

  <main class="content">
  </main>
</body>
