// ACTIVE ROUTES FUCNTIONALITY
const links = document.querySelectorAll(".headerMenu a");
const mobileLinks =document.querySelectorAll(".mobileMenuHeader a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
  let linkPage = link.getAttribute("href");
  linkPage = linkPage.replace("./", "");

  if (linkPage === currentPage) {
    link.classList.add("text-[#1148A9]");
  }
});
mobileLinks.forEach(link => {
  let linkPage = link.getAttribute("href");
  linkPage = linkPage.replace("./", "");
  console.log(linkPage)

  if (linkPage === currentPage) {
    link.classList.add("text-white");
  }
});


// HAMBURGER FUCNTIONALITY
const menuOpen = document.getElementById('menuOpen');
const menuClose = document.getElementById('menuClose');
const menu = document.getElementById("menu");

// Open
menuOpen.addEventListener("click", () => {
  menu.classList.remove("opacity-0", "-translate-y-full");
  menu.classList.add("opacity-100", "translate-y-0");
});

// Close
menuClose.addEventListener("click", () => {
  menu.classList.add("opacity-0", "-translate-y-full");
  menu.classList.remove("opacity-100", "translate-y-0");
});