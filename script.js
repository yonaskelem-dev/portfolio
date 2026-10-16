const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".sidebar a");

function showSection(id) {
  sections.forEach(function (section) {
    section.classList.toggle("active", section.id === id);
  });

  links.forEach(function (link) {
    link.classList.toggle("active", link.getAttribute("href") === "#" + id);
  });

  window.scrollTo(0, 0);
}

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (event) {
    const id = link.getAttribute("href").slice(1);
    if (id === "") return;
    event.preventDefault();
    showSection(id);
  });
});

showSection("home");

const menuBtn = document.getElementById("menuBtn");
const sidebarEl = document.querySelector(".sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");

function openSidebar() {
  sidebarEl.classList.add("open");
  menuBtn.classList.add("open");
  if (sidebarOverlay) sidebarOverlay.classList.add("visible");
  document.body.style.overflow = "hidden";
}

function closeSidebar() {
  sidebarEl.classList.remove("open");
  menuBtn.classList.remove("open");
  if (sidebarOverlay) sidebarOverlay.classList.remove("visible");
  document.body.style.overflow = "";
}

// Toggle menu on click
if (menuBtn) {
  menuBtn.addEventListener("click", function () {
    const isOpen = sidebarEl.classList.contains("open");
    if (isOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });
}

// Tap overlay to close
if (sidebarOverlay) {
  sidebarOverlay.addEventListener("click", closeSidebar);
}

// Close the menu after clicking any nav link
document.querySelectorAll(".sidebar a").forEach(function (link) {
  link.addEventListener("click", function () {
    closeSidebar();
  });
});

// Close menu with Escape key
window.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && sidebarEl.classList.contains("open")) {
    closeSidebar();
  }
});