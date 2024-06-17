const icon = document.querySelectorAll(".icon span");
for (let i = 0; i < icon.length; i++) {
  icon[i].addEventListener("click", function () {
    const current = document.querySelector(".icon-active");
    current.classList.remove("icon-active");
    icon[i].classList.add("icon-active");
  });
}
const btnBar = document.querySelectorAll(".btn-bar a");
for (let i = 0; i < btnBar.length; i++) {
  btnBar[i].addEventListener("click", function () {
    const current = document.querySelector(".btn-bar-active");
    current.classList.remove("btn-bar-active");
    btnBar[i].classList.add("btn-bar-active");
  });
}
const footer = document.querySelector(".footer");
// filter Gallery
const cards = document.querySelectorAll(".carts");
for (let i = 0; i < btnBar.length; i++) {
  btnBar[i].addEventListener("click", function () {
    footer.classList.add("active");
    for (let j = 0; j < cards.length; j++) {
      const cardName = cards[j].getAttribute("name");
      console.log(i);
      if (i === 0 || cardName === btnBar[i].textContent) {
        cards[j].style.display = "flex";
      } else {
        cards[j].style.display = "none";
      }
    }
  });
}
