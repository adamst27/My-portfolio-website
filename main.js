const theToggler = document.querySelector("#theme-toggler");
const theMenu = document.querySelector(".burger-menu");
const navList = document.querySelector("nav ul");

theToggler.addEventListener("change", () => {
  document.body.classList.toggle("dark-theme");
});
theMenu.addEventListener("click", () => {
  navList.classList.toggle("active");
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElement = document.querySelectorAll(".hidden");
hiddenElement.forEach((el) => observer.observe(el));
const skillsSection = document.getElementById("skills");
const skillsBarSpan = document.querySelectorAll(".skills .progress span");
window.onscroll = function () {
  const ract = skillsSection.getBoundingClientRect();
  if (ract.bottom >= 0 && ract.top <= window.innerHeight) {
    console.log("reached");
    skillsBarSpan.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  } else {
    skillsBarSpan.forEach((span) => {
      span.style.width = 0;
    });
  }
};
