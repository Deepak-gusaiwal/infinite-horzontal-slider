let menu = document.querySelector(".menu");
let navToggler = document.querySelector(".navToggler");
let addbanner = document.querySelector("nav .addbanner");

navToggler.addEventListener("click", () => {
  menu.classList.toggle("active");
  navToggler.classList.toggle("active");
  addbanner.classList.toggle("active");
});

let scrollbarContainer = document.querySelector(".scrollbarContainer");
let newScrollItems = scrollbarContainer
  .querySelector(".scrollItems")
  .cloneNode(true);
  newScrollItems.classList.add('red')
  console.log(newScrollItems);

  scrollbarContainer.appendChild(newScrollItems)
// let scrollItems = scroller.querySelector(".scrollItems");
// let elements = [...scrollItems.children];
// elements.forEach((element) => {
//   let clonedElem = element.cloneNode(true);
//   clonedElem.classList.add("red");
//   scrollItems.appendChild(clonedElem);
// });
