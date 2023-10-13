// splide carousel

let splide = new Splide(".splide", {
  type: "loop",
  perPage: 3,
  focus: "center",
  updateOnMove: true,
  padding: "2%",
  breakpoints: {
    1280: {
      perPage: 1,
      padding: "30%",
    },
    678: {
      padding: "18%",
    },
  },
});

splide.mount();

// progress bar

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  let winScroll = document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// header section

function moveToHome() {
  const home = document.getElementById("home");
  home.scrollIntoView({ behavior: "smooth" });
}

function moveToAbout() {
  const about = document.getElementById("about");
  about.scrollIntoView({ behavior: "smooth" });
}

function moveToWork() {
  const work = document.getElementById("work");
  work.scrollIntoView({ behavior: "smooth" });
}

function moveToContact() {
  const contact = document.getElementById("contact");
  contact.scrollIntoView({ behavior: "smooth" });
}

let hamMenu = document.querySelector(".nav-list");
let menuIcon = document.querySelector(".ham-menu");

function sideMenu() {
  hamMenu.classList.toggle("menu-toggle");
  menuIcon.classList.toggle("ham-menu-close");
}

// form section

function showForm() {
  document.getElementById("formShow").style.visibility = "visible";
  document.body.style.overflowY = "hidden";
}

function closeForm() {
  document.getElementById("formShow").style.visibility = "hidden";
  document.body.style.overflowY = "scroll";
}

// dark mode
let favicon = document.querySelector('link[rel="icon"]');

function darkMode() {
  document.body.classList.toggle("light-mode");

  if (favicon.type == "image/png") {
    favicon.href = "assets/favicon-sun.svg";
    favicon.type = "image/svg";
  } else {
    favicon.href = "assets/favicon-moon.png";
    favicon.type = "image/png";
  }
}
