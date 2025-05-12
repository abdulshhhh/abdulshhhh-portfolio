// Create sparkling stars
const starsContainer = document.getElementById('stars');
const starCount = 100;

for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    // Random properties
    const size = Math.random() * 3;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.setProperty('--duration', `${2 + Math.random() * 3}s`);
    star.style.animationDelay = `${Math.random() * 5}s`;
    
    starsContainer.appendChild(star);
}

// Create light streaks
const streaksContainer = document.getElementById('lightStreaks');
const streakCount = 20;

for (let i = 0; i < streakCount; i++) {
    const streak = document.createElement('div');
    streak.classList.add('streak');
    
    // Random properties for each streak
    streak.style.left = `${Math.random() * 100}%`;
    streak.style.animationDuration = `${5 + Math.random() * 10}s`;
    streak.style.animationDelay = `${Math.random() * 5}s`;
    streak.style.opacity = `${0.2 + Math.random() * 0.8}`;
    
    // Random length variation
    const length = 150 + Math.random() * 200;
    streak.style.height = `${length}px`;
    
    streaksContainer.appendChild(streak);
}
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Animate hamburger to X
        const bars = document.querySelectorAll('.bar');
        bars[0].classList.toggle('rotate-45');
        bars[1].classList.toggle('opacity-0');
        bars[2].classList.toggle('rotate-neg-45');
    });
    
    // Close menu when clicking a link
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});

// Typewriter effect
const phrases = [
    "Crafting Stunning Websites 🚀",
    "Building Scalable Web Apps 💡",
    "Designing Beautiful UIs 🎨",
    "Bringing Ideas to Life 🔥"
];

const typewriterElement = document.getElementById('typewriter');
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeWriter() {
    const currentPhrase = phrases[phraseIndex % phrases.length];

    if (isDeleting) {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50; 
    } else {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = Math.random() * (120 - 80) + 80; // Natural typing effect
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex++;
        typingSpeed = 600; // Pause before typing next phrase
    }

    setTimeout(typeWriter, typingSpeed);
}

setTimeout(typeWriter, 1000);

// Grayscale to color effect
const profileImg = document.getElementById('profileImg');
if (profileImg) {
    const container = profileImg.parentElement;

    // Add pulsating ring on hover
    profileImg.addEventListener('mouseenter', () => {
        profileImg.style.filter = 'grayscale(0%)';
        profileImg.style.transform = 'scale(1.2) rotate(-5deg)';
        profileImg.style.boxShadow = '0 10px 50px rgba(249, 18, 145, 0.9)';
        profileImg.style.transition = 'all 0.5s ease';

        // Create glowing particle effect
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            container.appendChild(particle);

            // Animate particle
            setTimeout(() => {
                if (container.contains(particle)) {
                    container.removeChild(particle);
                }
            }, 2000);
        }
    });

    profileImg.addEventListener('mouseleave', () => {
        profileImg.style.filter = 'grayscale(100%)';
        profileImg.style.transform = 'scale(1) rotate(0deg)';
        profileImg.style.boxShadow = 'none';
        profileImg.style.transition = 'all 0.5s ease';
    });

    // Style particles
    const style = document.createElement('style');
    style.textContent = `
        .particle {
            position: absolute;
            width: 10px;
            height: 10px;
            background: radial-gradient(circle, rgba(249, 18, 145, 0.8), transparent);
            border-radius: 50%;
            animation: float 2s ease-in-out;
            pointer-events: none;
        }

        @keyframes float {
            0% { transform: scale(1) translateY(0); opacity: 1; }
            100% { transform: scale(0) translateY(-20px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Trigger image reveal after page loads
    const imageContainer = document.querySelector('.about-image-container');
    if (imageContainer) {
        setTimeout(() => {
            imageContainer.classList.add('reveal-image');
        }, 500);
    }

    // Use GSAP if available
    if (typeof gsap !== 'undefined') {
        // GSAP floating animation
        gsap.to('.about-image-container', {
            y: 15,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Subtle animation for sections
        gsap.from('.about-content, .contact-form', {
            duration: 1,
            y: 50,
            opacity: 0,
            stagger: 0.2,
            ease: 'power3.out'
        });
    }

    // Animate skill bars on page load
    const levelBars = document.querySelectorAll('.level-bar');
    levelBars.forEach(bar => {
        // Reset width to 0 first
        bar.style.width = '0';
        // Trigger reflow
        void bar.offsetWidth;
        // Animate to actual width
        const width = bar.getAttribute('data-level') || '100%';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });

    // Set current year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// Input Focus Effects
const inputs = document.querySelectorAll('.neon-input');
inputs.forEach(input => {
    const label = input.parentElement.querySelector('label');
    if (label) {
        input.addEventListener('focus', () => {
            label.style.textShadow = '0 0 10px var(--accent-color)';
        });
        input.addEventListener('blur', () => {
            label.style.textShadow = 'none';
        });
    }
});

// Initialize particles.js if available
if (typeof particlesJS !== 'undefined') {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 100,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": ["#ff0099", "#00eaff", "#ff416c", "#ff4b2b"]
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.1,
                    "sync": false
                }
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
                "speed": 2
            }
        },
        "interactivity": {
            "events": {
                "onhover": { "enable": true, "mode": "repulse" }
            }
        }
    });
}

// Back to Top Button Functionality
const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Active Navigation Link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - sectionHeight/3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Skills Section Canvas Animation
const skillsCanvas = document.getElementById('skills-canvas');
if (skillsCanvas) {
    const ctx = skillsCanvas.getContext('2d');

    // Set canvas size
    function resizeCanvas() {
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            skillsCanvas.width = window.innerWidth;
            skillsCanvas.height = skillsSection.offsetHeight;
        }
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    const particles = [];
    const particleCount = 150;
    const colors = ['#f91291', '#8a2be2', '#ffffff'];

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * skillsCanvas.width,
            y: Math.random() * skillsCanvas.height,
            radius: Math.random() * 3 + 1,
            color: colors[Math.floor(Math.random() * colors.length)],
            speedX: Math.random() * 2 - 1,
            speedY: Math.random() * 2 - 1,
            opacity: Math.random() * 0.5 + 0.1,
            pulse: Math.random() * 0.1
        });
    }

    // Animate particles
    function animateParticles() {
        ctx.clearRect(0, 0, skillsCanvas.width, skillsCanvas.height);
        
        particles.forEach(particle => {
            // Pulsating effect
            particle.radius += Math.sin(Date.now() * 0.001) * particle.pulse;
            
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            
            // Glow effect
            const gradient = ctx.createRadialGradient(
                particle.x, particle.y, 0,
                particle.x, particle.y, particle.radius * 2
            );
            gradient.addColorStop(0, particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0'));
            gradient.addColorStop(1, particle.color + '00');
            
            ctx.fillStyle = gradient;
            ctx.fill();
            
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Wrap around edges
            if (particle.x < 0) particle.x = skillsCanvas.width;
            if (particle.x > skillsCanvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = skillsCanvas.height;
            if (particle.y > skillsCanvas.height) particle.y = 0;
        });
        
        requestAnimationFrame(animateParticles);
    }

    animateParticles();

    // Animate level bars on scroll
    function animateLevelBars() {
        const skillCards = document.querySelectorAll('.skill-card');
        
        skillCards.forEach(card => {
            const levelBar = card.querySelector('.level-bar');
            if (levelBar) {
                const width = levelBar.getAttribute('data-level') || '100%';
                
                levelBar.style.width = '0';
                
                const observer = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            setTimeout(() => {
                                levelBar.style.width = width;
                            }, 200);
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.5 });
                
                observer.observe(card);
            }
        });
    }

    // Fade in categories on scroll
    function fadeInCategories() {
        const categories = document.querySelectorAll('.category');
        
        categories.forEach((category, index) => {
            category.style.opacity = '0';
            category.style.transform = 'translateY(50px)';
            category.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            category.style.opacity = '1';
                            category.style.transform = 'translateY(0)';
                        }, index * 200); // Staggered animation
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });
            
            observer.observe(category);
        });
    }

    // Interactive hover effects for skill cards
    function addCardInteractivity() {
        const skillCards = document.querySelectorAll('.skill-card');
        
        skillCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px)';
                card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
            });
        });
    }

    animateLevelBars();
    fadeInCategories();
    addCardInteractivity();
    
    // Refresh animations on page resize
    window.addEventListener('resize', () => {
        setTimeout(() => {
            animateLevelBars();
            fadeInCategories();
        }, 300);
    });
}
document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll to Achievements section
    const link = document.querySelector('a[href="#achievements"]');
    if (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.getElementById('achievements');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  });
  


// Function to create stars in the background
function createStars(section) {
    const starContainer = document.createElement('div');
    starContainer.className = 'star-container';
    
    // Create stars with random positions and sizes
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 2 + 1}px`;
        star.style.height = star.style.width;
        star.style.animationDelay = `${Math.random() * 5}s`;
        starContainer.appendChild(star);
    }
    
    section.appendChild(starContainer);
}

// Function to add cosmic animation effects
function addCosmicAnimation(section) {
    // Add parallax effect to nebulae
    document.addEventListener('mousemove', function(e) {
        const xPos = e.clientX / window.innerWidth;
        const yPos = e.clientY / window.innerHeight;
        
        const nebulas = section.querySelectorAll('.nebula');
        nebulas.forEach((nebula, index) => {
            const intensity = 30 - (index * 10);
            nebula.style.transform = `translate(${xPos * intensity}px, ${yPos * intensity}px)`;
        });
        
        // Add parallax to achievement cards
        const cards = section.querySelectorAll('.achievement-card');
        cards.forEach((card, index) => {
            const cardIndex = parseInt(card.getAttribute('data-index'));
            const xOffset = (xPos - 0.5) * 10 * (cardIndex + 1);
            const yOffset = (yPos - 0.5) * 5 * (cardIndex + 1);
            card.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });
    
    // Add shooting stars at random intervals
    setInterval(() => createShootingStar(section), 5000);
}

// Function to create a shooting star
function createShootingStar(section) {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    
    // Random position and angle
    const startTop = Math.random() * 50;
    const startLeft = Math.random() * 100;
    const angle = Math.random() * 45 + 15; // 15-60 degrees
    
    shootingStar.style.top = `${startTop}%`;
    shootingStar.style.left = `${startLeft}%`;
    shootingStar.style.transform = `rotate(${angle}deg)`;
    
    section.appendChild(shootingStar);
    
    // Remove shooting star after animation completes
    setTimeout(() => {
        if (shootingStar.parentNode) {
            shootingStar.parentNode.removeChild(shootingStar);
        }
    }, 1000);
}

// Function to initialize particles
function initParticles() {
    particlesJS('achievements-particles', {
        "particles": {
            "number": {
                "value": 100,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": ["#ffffff", "#4F46E5", "#10B981", "#EC4899", "#6366F1"]
            },
            "shape": {
                "type": ["circle", "triangle", "star"],
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.2,
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
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });
}

// Function to add custom cursor effect
function addCustomCursor(section) {
    // Create cursor elements
    const cursorOuter = document.createElement('div');
    cursorOuter.className = 'cursor-outer';
    
    const cursorInner = document.createElement('div');
    cursorInner.className = 'cursor-inner';
    
    document.body.appendChild(cursorOuter);
    document.body.appendChild(cursorInner);
    
    // Update cursor position
    document.addEventListener('mousemove', (e) => {
        cursorOuter.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        cursorInner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        
        // Check if hovering over achievement cards
        const hoveredCard = document.elementFromPoint(e.clientX, e.clientY);
        if (hoveredCard && hoveredCard.closest('.achievement-card')) {
            cursorOuter.classList.add('cursor-hover');
            cursorInner.classList.add('cursor-hover');
        } else {
            cursorOuter.classList.remove('cursor-hover');
            cursorInner.classList.remove('cursor-hover');
        }
    });
    
    // Hide default cursor when inside the section
    section.addEventListener('mouseenter', () => {
        document.body.classList.add('custom-cursor');
    });
    
    section.addEventListener('mouseleave', () => {
        document.body.classList.remove('custom-cursor');
    });
    
    // Handle cursor click effect
    document.addEventListener('mousedown', () => {
        cursorOuter.classList.add('cursor-down');
        cursorInner.classList.add('cursor-down');
    });
    
    document.addEventListener('mouseup', () => {
        cursorOuter.classList.remove('cursor-down');
        cursorInner.classList.remove('cursor-down');
    });
}

// Add CSS for cosmic effects
const achievementStyles = document.createElement('style');
achievementStyles.textContent = `
    #achievements {
        position: relative;
        padding: 100px 0;
        min-height: 100vh;
        color: #ffffff;
        overflow: hidden;
        font-family: 'Inter', 'Poppins', sans-serif;
    }
    
    .cosmic-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(125deg, rgba(10,10,30,0.95) 0%, rgba(25,15,50,0.95) 50%, rgba(20,10,40,0.95) 100%);
        z-index: -3;
    }
    
    #achievements-particles {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -2;
    }
    
    .nebula {
        position: absolute;
        border-radius: 50%;
        filter: blur(60px);
        opacity: 0.25;
        z-index: -2;
        transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
    }
    
    .nebula-1 {
        width: 600px;
        height: 600px;
        background: radial-gradient(circle, rgba(120,50,255,0.6) 0%, rgba(50,0,100,0.2) 70%, rgba(0,0,0,0) 100%);
        top: -100px;
        left: -100px;
    }
    
    .nebula-2 {
        width: 700px;
        height: 700px;
        background: radial-gradient(circle, rgba(0,200,180,0.5) 0%, rgba(0,50,100,0.2) 60%, rgba(0,0,0,0) 100%);
        top: 30%;
        right: -200px;
    }
    
    .nebula-3 {
        width: 500px;
        height: 500px;
        background: radial-gradient(circle, rgba(255,50,150,0.4) 0%, rgba(100,0,50,0.2) 60%, rgba(0,0,0,0) 100%);
        bottom: -100px;
        left: 30%;
    }
    
    .section-title-container {
        position: relative;
        text-align: center;
        margin-bottom: 60px;
        z-index: 1;
    }
    
    .section-title {
        font-size: 3rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin: 0;
        background: linear-gradient(45deg, #f5f5f5, #ffffff);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        position: relative;
        display: inline-block;
    }
    
    .title-text {
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
    }
    
    .neon-dot {
        color: #5D5DFF;
        text-shadow: 0 0 10px #5D5DFF, 0 0 20px #5D5DFF, 0 0 30px #5D5DFF;
        font-size: 1.5em;
        position: relative;
        animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
        0% { opacity: 0.6; }
        50% { opacity: 1; }
        100% { opacity: 0.6; }
    }
    
    .achievements-container {
        display: flex;
        flex-direction: column;
        gap: 30px;
        max-width: 800px;
        margin: 0 auto;
        position: relative;
        z-index: 1;
        padding: 0 20px;
    }
    
    .achievement-card {
        background: rgba(15, 15, 35, 0.7);
        backdrop-filter: blur(10px);
        border-radius: 12px;
        padding: 30px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2),
                    inset 0 0 0 1px rgba(255, 255, 255, 0.1);
        position: relative;
        overflow: hidden;
        transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        border-left: 4px solid var(--card-color, #5D5DFF);
        cursor: pointer;
    }
    
    .achievement-card:hover, .achievement-card.expanded {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3),
                    inset 0 0 0 1px rgba(255, 255, 255, 0.15),
                    0 0 20px rgba(var(--card-color-rgb, 93, 93, 255), 0.4);
    }
    
    .achievement-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, 
                    rgba(255, 255, 255, 0.1) 0%, 
                    rgba(255, 255, 255, 0) 100%);
        z-index: 0;
    }
    
    .achievement-glow {
        position: absolute;
        width: 100px;
        height: 100px;
        background: radial-gradient(circle, var(--card-color, #5D5DFF) 0%, rgba(0,0,0,0) 70%);
        border-radius: 50%;
        opacity: 0;
        transition: opacity 0.3s ease;
        filter: blur(20px);
        z-index: -1;
    }
    
    .achievement-card:hover .achievement-glow {
        opacity: 0.15;
        animation: glow-move 3s infinite alternate;
    }
    
    @keyframes glow-move {
        0% { transform: translate(-50%, -50%) scale(1); }
        100% { transform: translate(150%, 150%) scale(1.5); }
    }
    
    .achievement-header {
        margin-bottom: 20px;
        position: relative;
        z-index: 1;
    }
    
    .achievement-header h3 {
        margin: 0;
        font-size: 1.5rem;
        font-weight: 700;
        background: linear-gradient(45deg, #ffffff, var(--card-color, #5D5DFF));
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }
    
    .achievement-body {
        position: relative;
        z-index: 1;
    }
    
    .description {
        margin-bottom: 20px;
        line-height: 1.6;
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.9);
    }
    
    .tech-stack, .impact {
        margin-bottom: 20px;
    }
    
    .tech-stack h4, .impact h4 {
        font-size: 1.1rem;
        margin-bottom: 10px;
        color: var(--card-color, #5D5DFF);
        text-shadow: 0 0 5px rgba(var(--card-color-rgb, 93, 93, 255), 0.5);
    }
    
    .tech-stack ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }
    
    .tech-stack li {
        background: rgba(255, 255, 255, 0.05);
        padding: 6px 12px;
        border-radius: 20px;
       color: rgba(255, 255, 255, 0.9);
        font-size: 0.85rem;
        transition: all 0.3s ease;
    }
    
    .tech-stack li:hover {
        background: rgba(var(--card-color-rgb, 93, 93, 255), 0.2);
        transform: translateY(-2px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    }
    
    .impact p {
        line-height: 1.6;
        color: rgba(255, 255, 255, 0.85);
    }
    
    .star-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        pointer-events: none;
    }
    
    .star {
        position: absolute;
        background-color: #ffffff;
        border-radius: 50%;
        animation: twinkle 3s infinite ease-in-out alternate;
    }
    
    @keyframes twinkle {
        0% { opacity: 0.3; transform: scale(0.8); }
        100% { opacity: 1; transform: scale(1.2); }
    }
    
    .shooting-star {
        position: absolute;
        width: 100px;
        height: 2px;
        background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%);
        animation: shoot 1s linear forwards;
        z-index: -1;
    }
    
    @keyframes shoot {
        0% { transform: translateX(0) translateY(0); opacity: 1; }
        100% { transform: translateX(200px) translateY(200px); opacity: 0; }
    }
    
    .cursor-outer, .cursor-inner {
        position: fixed;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: width 0.2s, height 0.2s, transform 0.1s;
    }
    
    .cursor-outer {
        width: 40px;
        height: 40px;
        border: 1px solid rgba(255, 255, 255, 0.5);
        transition: transform 0.2s ease-out, width 0.3s, height 0.3s, border 0.3s;
    }
    
    .cursor-inner {
        width: 6px;
        height: 6px;
        background-color: white;
        transition: transform 0.15s ease-out, width 0.3s, height 0.3s, background 0.3s;
    }
    
    .cursor-hover {
        mix-blend-mode: difference;
    }
    
    .cursor-outer.cursor-hover {
        width: 60px;
        height: 60px;
        border-color: var(--card-color, #5D5DFF);
    }
    
    .cursor-inner.cursor-hover {
        width: 12px;
        height: 12px;
        background-color: var(--card-color, #5D5DFF);
    }
    
    .cursor-down {
        transform: translate(-50%, -50%) scale(0.8);
    }
    
    .custom-cursor {
        cursor: none;
    }
    
    /* Responsive styles */
    @media (max-width: 768px) {
        .achievements-container {
            padding: 0 10px;
        }
        
        .achievement-card {
            padding: 20px;
        }
        
        .section-title {
            font-size: 2.5rem;
        }
        
        .nebula {
            opacity: 0.15;
        }
    }
    
    @media (max-width: 480px) {
        .section-title {
            font-size: 2rem;
        }
        
        .achievement-header h3 {
            font-size: 1.2rem;
        }
        
        .achievement-card {
            padding: 15px;
        }
        
        .tech-stack ul {
            flex-direction: column;
            gap: 5px;
        }
    }
`;

document.head.appendChild(achievementStyles);

// Add mobile navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (navToggle && mobileNav) {
        navToggle.addEventListener('click', function() {
            mobileNav.classList.toggle('open');
            navToggle.classList.toggle('active');
            document.body.classList.toggle('nav-open');
        });
        
        // Close mobile nav when clicking outside
        document.addEventListener('click', function(e) {
            if (mobileNav.classList.contains('open') && 
                !mobileNav.contains(e.target) && 
                !navToggle.contains(e.target)) {
                mobileNav.classList.remove('open');
                navToggle.classList.remove('active');
                document.body.classList.remove('nav-open');
            }
        });
        
        // Close mobile nav when clicking on a link
        const mobileNavLinks = mobileNav.querySelectorAll('a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNav.classList.remove('open');
                navToggle.classList.remove('active');
                document.body.classList.remove('nav-open');
            });
        });
    }
});

// Add contact form functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = contactForm.querySelector('[name="name"]').value;
            const email = contactForm.querySelector('[name="email"]').value;
            const message = contactForm.querySelector('[name="message"]').value;
            
            // Simple validation
            if (!name || !email || !message) {
                showFormMessage('Please fill in all fields', 'error');
                return;
            }
            
            // Email validation regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormMessage('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission
            showFormMessage('Sending message...', 'sending');
            
            // Simulating server response
            setTimeout(() => {
                // Here you would normally send data to your server
                console.log('Form submitted', { name, email, message });
                
                // Show success message
                showFormMessage('Message sent successfully!', 'success');
                
                // Reset form
                contactForm.reset();
            }, 1500);
        });
    }
});

// Function to show form message
function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    if (!formMessage) return;
    
    formMessage.textContent = message;
    formMessage.className = 'form-message';
    formMessage.classList.add(type);
    formMessage.style.display = 'block';
    
    if (type === 'success' || type === 'error') {
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
}

// Add theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    
    if (themeToggle) {
        // Check if theme preference is stored
        const currentTheme = localStorage.getItem('theme') || 'dark';
        document.body.className = currentTheme;
        
        themeToggle.addEventListener('click', function() {
            if (document.body.className === 'light') {
                document.body.className = 'dark';
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.className = 'light';
                localStorage.setItem('theme', 'light');
            }
        });
    }
    document.addEventListener('DOMContentLoaded', function() {
    // Project filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                // Show all projects if "All" is selected
                if (filterValue === 'all') {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    // Check if card has the selected category
                    if (card.getAttribute('data-category').includes(filterValue)) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 100);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });
});
           // Optimized Animations Script
// Place this in your script.js file

// Utility to check if element is in viewport
const isInViewport = (element, offset = 0) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
        rect.bottom >= 0 &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth) - offset &&
        rect.right >= 0
    );
};

// Initialize on document ready
document.addEventListener('DOMContentLoaded', function() {
    // Particles.js optimization - only initialize where needed
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    // Reduced number for better performance
                    value: 50,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#0ff'
                },
                opacity: {
                    value: 0.5,
                    random: true
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#0ff',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    // Slower movement for better performance
                    speed: 2
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    }
                }
            },
            retina_detect: false // Disable for better performance
        });
    }

    // Initialize AOS with performance settings
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true, // Only animate once
            mirror: false,
            disable: window.innerWidth < 768 ? true : false // Disable on mobile
        });
    }

    // Typewriter effect - more efficient implementation
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        const phrases = ['designing websites', 'coding', 'building apps', 'solving problems', 'learning new tech'];
        let currentPhraseIndex = 0;
        let currentCharIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        function typeEffect() {
            const currentPhrase = phrases[currentPhraseIndex];
            
            if (isDeleting) {
                currentCharIndex--;
                typingSpeed = 50; // Faster when deleting
            } else {
                currentCharIndex++;
                typingSpeed = 100; // Normal speed when typing
            }
            
            typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex);
            
            if (!isDeleting && currentCharIndex === currentPhrase.length) {
                isDeleting = true;
                typingSpeed = 1000; // Pause at the end
            } else if (isDeleting && currentCharIndex === 0) {
                isDeleting = false;
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                typingSpeed = 500; // Pause before typing next phrase
            }
            
            setTimeout(typeEffect, typingSpeed);
        }
        
        // Start the typewriter effect
        typeEffect();
    }

    // Custom cursor - with performance optimization
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (cursor && cursorFollower) {
        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;
        let followerX = 0;
        let followerY = 0;
        
        document.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        // Use requestAnimationFrame for smoother performance
        function animateCursor() {
            // Easing effect for smoother cursor movement
            cursorX += (mouseX - cursorX) * 0.2;
            cursorY += (mouseY - cursorY) * 0.2;
            followerX += (mouseX - followerX) * 0.1; followerY += (mouseY - followerY) * 0.1; 
            
            // Update cursor and follower positions
            cursor.style.transform = `translate3d(${cursorX - 10}px, ${cursorY - 10}px, 0)`;
            cursorFollower.style.transform = `translate3d(${followerX - 20}px, ${followerY - 20}px, 0)`;
            
            // Call the next frame
            requestAnimationFrame(animateCursor);
        }
        
        // Start the animation loop
        animateCursor();
    }
});

});