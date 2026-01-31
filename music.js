const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");
const icon = btn.querySelector("i");

music.volume = 0.25;

btn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    icon.className = "bx bx-volume-full";
    btn.classList.add("active");
  } else {
    music.pause();
    icon.className = "bx bx-volume-mute";
    btn.classList.remove("active");
  }
});
