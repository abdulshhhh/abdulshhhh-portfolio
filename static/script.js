// Enhanced cosmic animations script
document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM loaded - initializing cosmic animations");
  
  // Create cosmic background elements
  createCosmicBackground();
  
  // Initialize particles.js with enhanced settings
  if (typeof particlesJS !== 'undefined') {
    const particleContainers = ['particles-js', 'experience-particles', 'achievements-particles'];
    
    particleContainers.forEach(containerId => {
      const container = document.getElementById(containerId);
      if (container) {
        console.log(`Initializing enhanced particles for ${containerId}`);
        particlesJS(containerId, {
          "particles": {
            "number": {"value": 100},
            "color": {"value": ["#ff0099", "#00eaff", "#6366f1", "#f9ca24"]},
            "shape": {
              "type": ["circle", "triangle", "polygon"],
              "polygon": {"nb_sides": 6},
              "stroke": {"width": 1, "color": "#00eaff"}
            },
            "opacity": {
              "value": 0.6,
              "random": true,
              "anim": {"enable": true, "speed": 0.8, "opacity_min": 0.1, "sync": false}
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {"enable": true, "speed": 2, "size_min": 0.1, "sync": false}
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#ff0099",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 1.5,
              "direction": "none",
              "random": true,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {"enable": true, "rotateX": 600, "rotateY": 1200}
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {"enable": true, "mode": "bubble"},
              "onclick": {"enable": true, "mode": "repulse"},
              "resize": true
            },
            "modes": {
              "bubble": {
                "distance": 250,
                "size": 6,
                "duration": 2,
                "opacity": 0.8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              }
            }
          },
          "retina_detect": true
        });
      }
    });
  } else {
    console.error("particles.js not found");
  }
  
  // Initialize AOS with enhanced settings
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
      once: true
    });
  } else {
    console.error("AOS not found");
  }
  
  // Enhanced custom cursor with trail
  initializeEnhancedCursor();
  
  // Mobile navigation
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }
  
  // Add parallax effect to sections
  initializeParallaxEffect();
});

// Create cosmic background elements
function createCosmicBackground() {
  // Create stars with enhanced effects
  createStars();
  
  // Create nebula effects
  createNebulae();
  
  // Create light streaks
  createLightStreaks();
  
  // Create digital grid
  createDigitalGrid();
  
  // Create floating particles
  createFloatingParticles();
}

// Create enhanced stars
function createStars() {
  const starsContainer = document.getElementById('stars');
  if (!starsContainer) return;
  
  // Clear existing stars
  starsContainer.innerHTML = '';
  
  const starCount = 200;
  const starColors = ['#ff0099', '#00eaff', '#f5f5f5', '#6366f1', '#ffd700'];
  
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    // Enhanced random properties
    const size = Math.random() * 3 + 0.5;
    const colorIndex = Math.floor(Math.random() * starColors.length);
    
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.backgroundColor = starColors[colorIndex];
    star.style.boxShadow = `0 0 ${size * 2}px ${starColors[colorIndex]}`;
    star.style.setProperty('--duration', `${2 + Math.random() * 5}s`);
    star.style.animationDelay = `${Math.random() * 5}s`;
    
    // Add occasional "shooting star" effect
    if (Math.random() < 0.05) {
      star.classList.add('shooting-star');
    }
    
    starsContainer.appendChild(star);
  }
  
  // Add CSS for shooting stars if not already in styles.css
  if (!document.getElementById('shooting-star-style')) {
    const style = document.createElement('style');
    style.id = 'shooting-star-style';
    style.textContent = `
      .shooting-star {
        position: absolute;
        width: 2px !important;
        height: 2px !important;
        background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%) !important;
        box-shadow: 0 0 10px #fff, 0 0 20px #fff !important;
        animation: shootingStarAnimation 3s linear infinite !important;
        opacity: 0;
      }
      
      @keyframes shootingStarAnimation {
        0% {
          transform: translateX(0) translateY(0) rotate(215deg) scale(0);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        70% {
          opacity: 1;
        }
        100% {
          transform: translateX(500px) translateY(500px) rotate(215deg) scale(1);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

// Create nebula effects
function createNebulae() {
  // Check if nebulae already exist
  if (document.querySelector('.cosmic-nebula')) return;
  
  const body = document.body;
  const nebulaCount = 3;
  
  for (let i = 0; i < nebulaCount; i++) {
    const nebula = document.createElement('div');
    nebula.classList.add('cosmic-nebula', `nebula-${i+1}`);
    
    // Random position and size
    nebula.style.top = `${Math.random() * 100}%`;
    nebula.style.left = `${Math.random() * 100}%`;
    nebula.style.width = `${300 + Math.random() * 500}px`;
    nebula.style.height = `${300 + Math.random() * 500}px`;
    
    body.appendChild(nebula);
  }
  
  // Add CSS for nebulae if not already in styles.css
  if (!document.getElementById('nebula-style')) {
    const style = document.createElement('style');
    style.id = 'nebula-style';
    style.textContent = `
      .cosmic-nebula {
        position: fixed;
        border-radius: 50%;
        filter: blur(60px);
        opacity: 0.15;
        z-index: -1;
        pointer-events: none;
        animation: nebulaPulse 20s infinite alternate ease-in-out;
      }
      
      .nebula-1 {
        background: radial-gradient(circle, rgba(255,0,255,0.8), rgba(0,255,255,0.4), transparent 70%);
        animation-delay: 0s;
      }
      
      .nebula-2 {
        background: radial-gradient(circle, rgba(153,0,255,0.6), rgba(0,255,255,0.3), transparent 70%);
        animation-delay: 5s;
      }
      
      .nebula-3 {
        background: radial-gradient(circle, rgba(255,0,128,0.6), rgba(255,153,0,0.3), transparent 70%);
        animation-delay: 10s;
      }
      
      @keyframes nebulaPulse {
        0% { opacity: 0.1; transform: scale(1); }
        50% { opacity: 0.2; transform: scale(1.1); }
        100% { opacity: 0.1; transform: scale(1); }
      }
    `;
    document.head.appendChild(style);
  }
}

// Create enhanced light streaks
function createLightStreaks() {
  const streaksContainer = document.getElementById('lightStreaks');
  if (!streaksContainer) return;
  
  // Clear existing streaks
  streaksContainer.innerHTML = '';
  
  const streakCount = 20;
  const streakColors = [
    'rgba(99, 102, 241, 0.6)', 
    'rgba(249, 18, 145, 0.6)', 
    'rgba(0, 234, 255, 0.6)'
  ];
  
  for (let i = 0; i < streakCount; i++) {
    const streak = document.createElement('div');
    streak.classList.add('streak');
    
    // Enhanced random properties
    const colorIndex = Math.floor(Math.random() * streakColors.length);
    const length = 150 + Math.random() * 300;
    const width = 1 + Math.random() * 2;
    const angle = Math.random() * 60 - 30; // -30 to 30 degrees
    
    streak.style.left = `${Math.random() * 100}%`;
    streak.style.height = `${length}px`;
    streak.style.width = `${width}px`;
    streak.style.background = `linear-gradient(to bottom, transparent, ${streakColors[colorIndex]}, transparent)`;
    streak.style.transform = `rotate(${angle}deg)`;
    streak.style.filter = 'blur(1px)';
    streak.style.animationDuration = `${5 + Math.random() * 15}s`;
    streak.style.animationDelay = `${Math.random() * 5}s`;
    
    streaksContainer.appendChild(streak);
  }
}

// Create digital grid effect
function createDigitalGrid() {
  // Check if grid already exists
  if (document.querySelector('.digital-grid')) return;
  
  const grid = document.createElement('div');
  grid.classList.add('digital-grid');
  document.body.appendChild(grid);
  
  // Add CSS for digital grid if not already in styles.css
  if (!document.getElementById('digital-grid-style')) {
    const style = document.createElement('style');
    style.id = 'digital-grid-style';
    style.textContent = `
      .digital-grid {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: 50px 50px;
        background-image: 
          linear-gradient(to right, rgba(249, 18, 145, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 234, 255, 0.05) 1px, transparent 1px);
        z-index: -1;
        opacity: 0.3;
        pointer-events: none;
        transform-style: preserve-3d;
        transform: perspective(500px) rotateX(80deg) translateZ(-100px);
        animation: gridMove 20s linear infinite;
      }
      
      @keyframes gridMove {
        0% { background-position: 0 0; }
        100% { background-position: 50px 50px; }
      }
    `;
    document.head.appendChild(style);
  }
}

// Create floating particles
function createFloatingParticles() {
  // Check if particles already exist
  if (document.querySelector('.floating-particles')) return;
  
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'floating-particles';
  document.body.appendChild(particlesContainer);
  
  const particleCount = 15;
  const particleColors = ['#ff0099', '#00eaff', '#6366f1', '#ff416c'];
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'floating-particle';
    
    // Random properties
    const size = 2 + Math.random() * 5;
    const colorIndex = Math.floor(Math.random() * particleColors.length);
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = particleColors[colorIndex];
    particle.style.boxShadow = `0 0 ${size * 2}px ${particleColors[colorIndex]}`;
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;
    
    particlesContainer.appendChild(particle);
  }
  
  // Add CSS for floating particles if not already in styles.css
  if (!document.getElementById('floating-particles-style')) {
    const style = document.createElement('style');
    style.id = 'floating-particles-style';
    style.textContent = `
      .floating-particles {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        pointer-events: none;
      }
      
      .floating-particle {
        position: absolute;
        border-radius: 50%;
        filter: blur(1px);
        animation: floatAnimation 15s infinite alternate ease-in-out;
      }
      
      @keyframes floatAnimation {
        0% {
          transform: translate(0, 0);
        }
        33% {
          transform: translate(30px, -30px);
        }
        66% {
          transform: translate(-20px, 20px);
        }
        100% {
          transform: translate(10px, -10px);
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  // Animate each particle with a different delay
  const particles = document.querySelectorAll('.floating-particle');
  particles.forEach((particle, index) => {
    particle.style.animationDelay = `${index * 0.5}s`;
  });
}

// Enhanced cursor with trail effect
function initializeEnhancedCursor() {
  // Only on desktop
  if (window.innerWidth <= 768) return;
  
  // Create cursor elements if they don't exist
  if (!document.querySelector('.cursor-container')) {
    const cursorContainer = document.createElement('div');
    cursorContainer.className = 'cursor-container';
    
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    
    const cursorTrail = document.createElement('canvas');
    cursorTrail.id = 'cursor-trail';
    cursorTrail.width = window.innerWidth;
    cursorTrail.height = window.innerHeight;
    
    cursorContainer.appendChild(cursorTrail);
    cursorContainer.appendChild(cursor);
    document.body.appendChild(cursorContainer);
    
    // Add CSS for enhanced cursor if not already in styles.css
    if (!document.getElementById('enhanced-cursor-style')) {
      const style = document.createElement('style');
      style.id = 'enhanced-cursor-style';
      style.textContent = `
        .cursor-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9999;
        }
        
        .custom-cursor {
          position: absolute;
          width: 16px;
          height: 16px;
          background-color: rgba(0, 234, 255, 0.8);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          mix-blend-mode: screen;
          box-shadow: 0 0 10px #00eaff, 0 0 20px rgba(0, 234, 255, 0.5);
          transition: width 0.1s, height 0.1s, background-color 0.3s;
        }
        
        .custom-cursor.click {
          width: 24px;
          height: 24px;
          background-color: rgba(249, 18, 145, 0.8);
          box-shadow: 0 0 10px #ff0099, 0 0 20px rgba(249, 18, 145, 0.5);
        }
        
        #cursor-trail {
          position: absolute;
          top: 0;
          left: 0;
          pointer-events: none;
        }
        
        body.custom-cursor-active {
          cursor: none;
        }
        
        .custom-cursor-active a,
        .custom-cursor-active button,
        .custom-cursor-active .nav-link,
        .custom-cursor-active input,
        .custom-cursor-active textarea,
        .custom-cursor-active .project {
          cursor: none !important;
        }
      `;
      document.head.appendChild(style);
    }
  }
  
  // Track mouse position
  document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    const cursorTrail = document.getElementById('cursor-trail');
    
    if (cursor && cursorTrail) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      
      // Draw trail effect
      const ctx = cursorTrail.getContext('2d');
      ctx.globalCompositeOperation = 'destination-out';
      ctx.globalAlpha = 0.2;
      ctx.beginPath();
      ctx.arc(e.clientX, e.clientY, 16, 0, Math.PI * 2);
      ctx.fill();
      
      // Update cursor position
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    }
  });
  
  // Add click effect
  document.addEventListener('mousedown', () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
      cursor.classList.add('click');
    }
  });
  
  document.addEventListener('mouseup', () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
      cursor.classList.remove('click');
    }
  });
  
  // Hide default cursor
  document.body.classList.add('custom-cursor-active');
}

// Check if script is actually running
console.log("Script file loaded successfully");
// Typewriter Effect - Premium Implementation
document.addEventListener('DOMContentLoaded', () => {
  const typewriterElement = document.getElementById('typewriter');
  const cursorElement = document.querySelector('.cursor');
  
  if (!typewriterElement || !cursorElement) return;

  // Premium phrases with emojis for visual appeal
  const phrases = [
    "crafting stunning 3D websites 🚀",
    "building immersive experiences 🌌",
    "designing pixel-perfect UIs 🎨",
    "optimizing for silky performance ⚡",
    "solving complex frontend puzzles 🧩"
  ];

  // Animation settings
  const config = {
    typeSpeed: 80,       // Base typing speed (ms per character)
    deleteSpeed: 40,     // Backspace speed
    pauseBetween: 1500,  // Pause between phrases
    pauseEnd: 3000,      // Pause at end before restart
    cursorBlinkSpeed: 500 // Cursor blink interval
  };

  // State management
  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  let isPaused = false;
  let animationFrame;

  // Cursor blink animation
  let cursorVisible = true;
  const cursorInterval = setInterval(() => {
    cursorVisible = !cursorVisible;
    cursorElement.style.opacity = cursorVisible ? '1' : '0';
  }, config.cursorBlinkSpeed);

  // Main animation loop with smooth frame timing
  const type = () => {
    animationFrame = requestAnimationFrame(() => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      // Handle typing/erasing
      if (!isPaused) {
        if (!isDeleting && currentCharIndex < currentPhrase.length) {
          // Typing forward
          typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
          currentCharIndex++;
          setTimeout(type, config.typeSpeed + Math.random() * 50); // Natural variation
        } else if (isDeleting && currentCharIndex > 0) {
          // Deleting
          typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
          currentCharIndex--;
          setTimeout(type, config.deleteSpeed);
        } else if (isDeleting) {
          // Switch to typing next phrase
          isDeleting = false;
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
          isPaused = true;
          setTimeout(type, config.pauseBetween);
        } else {
          // Switch to deleting
          isDeleting = true;
          isPaused = true;
          setTimeout(type, currentPhraseIndex === phrases.length - 1 ? config.pauseEnd : config.pauseBetween);
        }
      } else {
        // During pause periods
        isPaused = false;
        setTimeout(type, 0);
      }
    });
  };

  // Start animation with fade-in effect
  typewriterElement.style.opacity = '0';
  typewriterElement.style.transform = 'translateY(10px)';
  typewriterElement.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  
  // Trigger animation after slight delay for better UX
  setTimeout(() => {
    typewriterElement.style.opacity = '1';
    typewriterElement.style.transform = 'translateY(0)';
    type(); // Start typewriter effect
  }, 500);

  // Cleanup on component unmount
  return () => {
    cancelAnimationFrame(animationFrame);
    clearInterval(cursorInterval);
  };
});

// Card Flip functionality
document.addEventListener('DOMContentLoaded', function() {
    const flipBtns = document.querySelectorAll('.flip-btn');
    
    flipBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.achievement-card');
            card.classList.toggle('is-flipped');
        });
    });
});

// Achievement Card Flip
document.addEventListener('DOMContentLoaded', function() {
  const achievementCards = document.querySelectorAll('.achievement-card');
  
  achievementCards.forEach(card => {
    const flipBtns = card.querySelectorAll('.flip-btn');
    
    flipBtns.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        card.classList.toggle('is-flipped');
      });
    });
  });
});