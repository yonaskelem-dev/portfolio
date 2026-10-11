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
