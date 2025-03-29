function updateLoveDuration() {
    const startDate = new Date('2024-03-22T00:00:00');
    const now = new Date();
  
    let diff = now - startDate;
  
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    diff -= years * 1000 * 60 * 60 * 24 * 365.25;
  
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
    diff -= months * 1000 * 60 * 60 * 24 * 30.44;
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * 1000 * 60 * 60 * 24;
  
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * 1000 * 60 * 60;
  
    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * 1000 * 60;
  
    const seconds = Math.floor(diff / 1000);
  
    document.getElementById('timeTogether').innerText =
      `${years} years, ${months} months, ${days} days, ${hours} hrs, ${minutes} mins, ${seconds} secs 💖`;
  }
  
  setInterval(updateLoveDuration, 1000);
  updateLoveDuration();
  
const fadeElements = document.querySelectorAll('.scroll-fade');

function handleScroll() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerText = '💖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = 4 + Math.random() * 3 + 's';
    document.getElementById('float-container').appendChild(heart);
  
    setTimeout(() => heart.remove(), 7000);
  }, 500);
  

  // Confetti Hearts Generator (optional but cute!)
const hearts = ["💖", "💘", "💕", "💝"];
let confettiInterval = setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "confetti-heart";
  heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 2 + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 200);

// Stop confetti after popup disappears
setTimeout(() => clearInterval(confettiInterval), 6000);

window.addEventListener("scroll", () => {
    document.querySelectorAll('.reveal').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add("visible");
      }
    });
  });
  

  

let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach(slide => slide.style.display = "none");

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change every 4s
}

showSlides();


// --- PASSWORD LOGIC ---
const dailyPasswords = [
  "love", "kiss", "hug", "date", "cute", "heart", "smile", "sweet", "roses", "light",
  "dream", "magic", "honey", "angel", "stars", "happy", "blush", "shine", "gift", "peace",
  "dear", "soul", "wish", "touch", "snack", "candy", "cozy", "laugh", "dance", "charm",
  "warm", "hello", "shine", "babe", "wink", "soft", "sunny", "calm", "petal", "bloom",
  "sweetie", "choco", "sunset", "moon", "note", "sugar", "bunny", "cutee", "spark", "jelly",
  "snack", "juice", "mint", "vanilla", "cookie", "cloud", "tea", "jam", "snug", "peach",
  "tiny", "joy", "hope", "minty", "blue", "gold", "kind", "rosy", "huggy", "muffin",
  "sleep", "nap", "cuddle", "music", "song", "lighty", "pink", "shiny", "shiney", "caring",
  "nicer", "smile", "gaze", "hello", "yay", "sunny", "berry", "angel", "nice", "grape",
  "loveu", "true", "feels", "yes", "softie", "cutie", "care", "trust", "faith", "home"
];

const baseDate = new Date("2024-03-30");
const today = new Date();
const dayIndex = Math.floor((today - baseDate) / (1000 * 60 * 60 * 24));
const todayPassword = dailyPasswords[dayIndex % dailyPasswords.length].toLowerCase();

const firstLetter = todayPassword[0];
const tileCount = todayPassword.length;

document.getElementById("first-letter").innerText = firstLetter.toUpperCase();

const tilesContainer = document.getElementById("tiles-container");

// Render tiles
for (let i = 0; i < tileCount; i++) {
  const input = document.createElement("input");
  input.maxLength = 1;
  input.classList.add("tile");

  if (i === 0) {
    input.value = firstLetter.toUpperCase();
    input.disabled = true;
    input.classList.add("locked");
  } else {
    input.addEventListener("input", (e) => {
      e.target.value = e.target.value.toUpperCase();
      // Move to next tile
      if (e.target.value && i < tileCount - 1) {
        document.querySelectorAll(".tile")[i + 1].focus();
      }
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && !e.target.value && i > 1) {
        document.querySelectorAll(".tile")[i - 1].focus();
      }
    });
  }

  tilesContainer.appendChild(input);
}


// Validate guess
document.getElementById("check-button").addEventListener("click", () => {
  const tiles = document.querySelectorAll(".tile");
  let guess = "";
  let allCorrect = true;

  tiles.forEach((tile, idx) => {
    if (idx === 0) {
      guess += todayPassword[0];
      return;
    }
    const letter = tile.value.toLowerCase();
    if (letter === todayPassword[idx]) {
      tile.classList.add("locked");
      tile.disabled = true;
      tile.style.backgroundColor = "#d63384";
      tile.style.color = "#fff";
      guess += letter;
    } else {
      tile.value = "";
      tile.classList.remove("locked");
      tile.style.backgroundColor = "#fff0f5";
      tile.style.color = "#d63384";
      allCorrect = false;
      guess += "_";
    }
  });

  document.getElementById("error-msg").style.display = allCorrect ? "none" : "block";

  if (allCorrect) {
    const successMsg = document.getElementById("success-msg");
    const screen = document.getElementById("password-screen");
    const main = document.getElementById("main-content");
  
    successMsg.style.display = "block";
  
    // Add fade-out to password screen
    screen.classList.add("fade-out");
  
    // After 2s, show main content with fade-in
    setTimeout(() => {
      screen.style.display = "none";
      main.style.display = "block";
      //main.classList.add("fade-in");
    }, 2000);
  }
  
});

// Optional: Allow Enter key to trigger check
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    document.getElementById("check-button").click();
  }
});
