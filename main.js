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
