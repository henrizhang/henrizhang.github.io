import styles from "./css/index.css";
import template from "html-loader!../index.html";

//hides the entire header div and displays the links
function displayLinks() {
  let headers = document.getElementsByClassName("header");
  for (var i = 0; i < headers.length; i++) {
    headers[i].style.display = "none";
  }
  document.getElementsByClassName("content")[0].style.display = "block";
}

function createRipple(event) {
  const noRip = ".header";
  if (!event.target.matches(noRip)) {
    let rip = document.createElement("span");
    rip.classList.add("ripple");
    rip.style.position = "absolute";
    rip.style.top = event.clientY + document.body.scrollTop - 75 + "px";
    rip.style.left = event.clientX + document.body.scrollLeft - 75 + "px";
    document.body.appendChild(rip);
    setTimeout(function() {
      rip.remove();
    }, 800);
  }
}

document.body.addEventListener("click", createRipple);
document
  .getElementsByClassName("enter-button")[0]
  .addEventListener("click", displayLinks);
