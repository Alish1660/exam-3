const addBtn = document.querySelector("#hamburger");
const remove = document.querySelector(".remove");
const nav_items = document.querySelector(".nav_items");

addBtn.addEventListener("click", () => {
  nav_items.classList.add("d-block");
  // nav_items.style = "transform: translateY(0%)";
  console.log(1);
});
remove.addEventListener("click", () => {
  nav_items.classList.remove("d-block");
  // nav_items.style = "transform: translateY(0%)";
  console.log(1);
});
