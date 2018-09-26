const explore = document.getElementById("explore");

explore.addEventListener("click", () => {
  window.scrollTo({
    top: 650,
    behavior: "smooth"
  });
});

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
});

const header = document.getElementsByTagName("header")[0];

window.addEventListener("scroll", () => {
  if (window.scrollY >= 848) {
  }
});
