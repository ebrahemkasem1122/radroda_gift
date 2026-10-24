const giftButton = document.getElementById("giftButton");
const surprise = document.getElementById("surprise");
const tapHint = document.getElementById("tapHint");
const againButton = document.getElementById("againButton");
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");
let opened = false;

giftButton.addEventListener("click", () => {
  if (opened) return;
  opened = true;
  giftButton.classList.add("opened");
  tapHint.textContent = "الهدية بتتفتح عشانك يا Radroda... 💗";
  window.setTimeout(() => {
    surprise.classList.remove("hidden");
    tapHint.textContent = "المفاجأة اتفتحت 💖";
    surprise.scrollIntoView({ behavior: "smooth", block: "start" });
    launchHearts();
  }, 720);
});

againButton.addEventListener("click", () => {
  surprise.classList.add("hidden");
  giftButton.classList.remove("opened");
  tapHint.textContent = "اضغطي على الصندوق عشان تفتحيه ✨";
  opened = false;
  document.getElementById("intro").scrollIntoView({ behavior: "smooth", block: "start" });
});

musicBtn.addEventListener("click", async () => {
  try {
    if (bgMusic.paused) {
      await bgMusic.play();
      musicBtn.innerHTML = '<span aria-hidden="true">♫</span> إيقاف الموسيقى';
      musicBtn.setAttribute("aria-pressed", "true");
    } else {
      bgMusic.pause();
      musicBtn.innerHTML = '<span aria-hidden="true">♫</span> تشغيل الموسيقى';
      musicBtn.setAttribute("aria-pressed", "false");
    }
  } catch (error) {
    musicBtn.textContent = "ضيفي ملف music.mp3 داخل assets";
  }
});

function launchHearts() {
  const symbols = ["♡", "♥", "✦", "💗", "✧"];
  for (let i = 0; i < 22; i++) {
    const heart = document.createElement("span");
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.setAttribute("aria-hidden", "true");
    Object.assign(heart.style, {
      position: "fixed",
      zIndex: "20",
      left: `${Math.random() * 94 + 3}%`,
      bottom: "-35px",
      color: ["#e52f7e", "#ff6ba9", "#b82b68"][i % 3],
      fontSize: `${18 + Math.random() * 22}px`,
      pointerEvents: "none",
      transition: `transform ${2.2 + Math.random() * 1.5}s ease-out, opacity 3s ease-out`
    });
    document.body.appendChild(heart);
    requestAnimationFrame(() => {
      heart.style.transform = `translateY(-${window.innerHeight + 100}px) rotate(${Math.random() * 100 - 50}deg)`;
      heart.style.opacity = "0";
    });
    window.setTimeout(() => heart.remove(), 4000);
  }
}
