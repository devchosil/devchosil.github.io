const title = document.querySelector("h2");

function handleMouseEnter() {
  title.style.color = "#1abc9c";
  title.innerText = "The mouse is here!";
}

function handleMouseLeave() {
  title.style.color = "#3498db";
  title.innerText = "The mouse is gone!";
}

function onClick() {
  title.style.color = "#e74c3c";
  title.innerText = "That was a right click!";
}

function resize() {
  title.style.color = "#9b59b6";
  title.innerText = "You just resized!"
}

const superEventHandler = {
  title.addEventListener("mouseenter", handleMouseEnter),
  title.addEventListener("mouseleave", handleMouseLeave),
  title.addEventListener("contextmenu", onClick),
  title.addEventListener("resize", resize),
};
