
function removeTransition(element) {
  if (element.propertyName !== "transform") return;
  element.target.classList.remove("playing");
}

function playSound(element) {
  const audio = document.querySelector(`audio[data-key="${element.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${element.keyCode}"]`);
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll(".key"));
console.log(keys);
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
// document.addEventListener("onclick", playSound);
