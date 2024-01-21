var typed = new Typed("#element", {
  strings: ["Web Developer.", "MERN Stack Developer.", "Gamer."],
  typeSpeed: 80,
  loop: true,
});

document.getElementById("project").addEventListener("click", function () {
  alert("Soon to be added");
});

document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".toggler");
  const menuItems = document.querySelectorAll(".menu-item");
  const body = document.body;

  toggler.addEventListener("change", function () {
    body.style.overflow = toggler.checked ? "hidden" : "";
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      toggler.checked = false;
      body.style.overflow = "";
    });
  });
});
