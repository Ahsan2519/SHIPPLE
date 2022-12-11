// global variable declaration start here
const hamburger = document.querySelector(".hamburger"),
html = document.querySelector("html"),
navbar = document.querySelector(".navber"),
scrollUp = document.querySelector(".scroll-up");
console.log(scrollUp);
// global variable declaration end here

// hamburger event start here
hamburger.addEventListener("click",()=>{
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
  html.classList.toggle("hidden");
});
// hamburger event end here

// scroll-up start here
scrollUp.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
});
window.addEventListener("scroll", function () {
  if (window.scrollY > scrollUp.offsetHeight + 25) {
    scrollUp.classList.add("scroll-show")
  } else {
    scrollUp.classList.remove("scroll-show")
  }
});
// scroll-up end here