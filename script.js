const envelope = document.getElementById("envelope");
const music = document.getElementById("music");

let opened = false;

envelope.addEventListener("pointerdown", function () {
  if (opened) return;

  opened = true;
  envelope.classList.add("open");

  music.currentTime = 0;
  music.play();
});
