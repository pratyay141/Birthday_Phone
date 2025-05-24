let stage = 0;

function nextStage() {
  stage++;
  switch (stage) {
    case 1:
      // Fade in background
      const bg = document.querySelector('.background-section');
      bg.classList.add('show');
      launchConfettiAuto();   // Launch immediately
      launchBalloons();       // Launch immediately
      // After fade-in, launch confetti and balloons
      bg.addEventListener('transitionend', function handler(e) {
        // Only trigger on opacity transition, not others!
        if (e.propertyName === "opacity") {
          launchConfettiAuto();
          launchBalloons();
          // Remove this handler so it doesn't run again
          bg.removeEventListener('transitionend', handler);
        }
      });
      break;
    case 2:
      // Show glass blur effect
      document.querySelector('.glass-portrait').style.display = 'flex';
      // Show mohini.png
      document.getElementById('mhohini').style.display = 'block';
      
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 1000,
          spread: 700,
          origin: { y: 0.4 }
        });
      }
      break;
    case 3:{
      // Generate 23 candles
      const candleContainer = document.getElementById('candles-container');
      candleContainer.innerHTML = ''; // Clear previous
      for (let i = 0; i < 23; i++) {
      const candle = document.createElement('div');
      candle.className = 'candle';
      candleContainer.appendChild(candle);
      }
    }
      
    break;
    case 4:
      // Show message
      document.getElementById('message').style.display = 'block';
      document.getElementById('mhohini').style.display = 'block';
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 1000,
          spread: 700,
          origin: { y: 0.4 }
        });
      }
      // Launch confetti effect (using canvas-confetti library)
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 1000,
          spread: 700,
          origin: { y: 0.4 }
        });
        // Show confetti button
      document.getElementById('confetti-btn').style.display = 'inline-block';
      break;
      }
            
    }
}


// For auto confetti after background
function launchConfettiAuto() {
  if (typeof confetti === 'function') {
    // Burst effect, you can customize as you like
    confetti({
      particleCount: 1000,
      spread: 900,
      origin: { y: 0.4 }
    });
  } else {
    console.error('Confetti library not loaded');
  }
}

// For the confetti button (keep this for the button)
// Keep your confetti button function if you want manual confetti
function launchConfetti(event) {
  event.stopPropagation();
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 1000,
      spread: 700,
      origin: { y: 0.4 }
    });
  }
}
// Balloons
function launchBalloons() {
  for (let i = 0; i < 30; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    // Random horizontal position (scattered)
    balloon.style.left = (5 + Math.random() * 90) + 'vw';
    balloon.textContent = '🎈     ❤️     🎉     🥳     ✨     🎈';
    // Random slow duration between 4s and 7s
    const duration = 4 + Math.random() * 3; // seconds
    balloon.style.animationDuration = duration + 's';
    document.body.appendChild(balloon);
    setTimeout(() => balloon.remove(), duration * 1000);
  }
}
// After background fade-in:
const bg = document.querySelector('.background-section');
bg.addEventListener('transitionend', function handler(e) {
  if (e.propertyName === "opacity") {
    launchConfettiAuto();
    launchBalloons();
    bg.removeEventListener('transitionend', handler);
  }
});


// Music on first click
window.addEventListener('DOMContentLoaded', function() {
  function playMusic() {
    const music = document.getElementById('bg-music');
    music.muted = false; // try unmuting
    music.play();
    window.removeEventListener('click', playMusic);
  }
  window.addEventListener('click', playMusic);
});
