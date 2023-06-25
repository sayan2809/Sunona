let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

ScrollReveal({
  //reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});

ScrollReveal().reveal(".main-title, .vission, .mission, .our-team", {
  delay: 500,
  origin: "left",
});

ScrollReveal().reveal(".main-img, .vissionpic, .missionpic", {
  delay: 600,
  origin: "bottom",
});

ScrollReveal().reveal(".main-para, .book-now, .text-box1, .wrapper1", {
  delay: 700,
  origin: "right",
});
