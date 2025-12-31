const envelope = document.getElementById("envelope");
const music = document.getElementById("music");
const letter = document.getElementsByClassName("letter")[0];

let opened = false;

function openEnvelope() {
  if (opened) return;

  opened = true;
  envelope.classList.add("open");
  music.play();
  letter.position
}

/* Desktop click */
envelope.addEventListener("click", openEnvelope);

/* Mobile touch */
envelope.addEventListener("touchstart", openEnvelope);
