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

ScrollReveal().reveal(
  ".main-title, .vission, .mission, .our-team, .book-now1, .main-para1, .volunteers",
  {
    delay: 500,
    origin: "left",
  }
);

ScrollReveal().reveal(".main-img, .vissionpic, .missionpic", {
  delay: 600,
  origin: "bottom",
});

ScrollReveal().reveal(
  ".main-para, .book-now, .text-box1, .wrapper1, .service-title1, .core-team",
  {
    delay: 700,
    origin: "right",
  }
);

ScrollReveal().reveal(".volunteers-members", {
  delay: 500,
  origin: "top",
});

ScrollReveal().reveal(".core-members, .volunteers-members1", {
  delay: 700,
  origin: "bottom",
});
