// JavaScript Document



// Mobile menu functionality
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileNav = document.querySelector('.mobile-nav');

        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });

        // Close mobile menu when clicking on links
        document.querySelectorAll('.mobile-nav a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
            }
        });

        // Enhanced smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                
                // Skip if href is just "#"
                if (targetId === '#') return;
                
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Enhanced header functionality
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            const scrolled = window.pageYOffset;
            
            if (scrolled > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Active menu item highlighting
        function updateActiveMenuItem() {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
            
            let currentSection = '';
            const scrollPos = window.pageYOffset + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', updateActiveMenuItem);
        window.addEventListener('load', updateActiveMenuItem);

        // Parallax effect for geometric shapes
        window.addEventListener('scroll', () => {
            const shapes = document.querySelectorAll('.shape');
            const scrolled = window.pageYOffset;
            
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.3;
                shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
            });
        });

        // Neural lines pulse effect
        const neuralLines = document.querySelectorAll('.neural-line');
        setInterval(() => {
            neuralLines.forEach((line, index) => {
                setTimeout(() => {
                    line.style.opacity = '1';
                    line.style.transform = 'scaleX(1.2)';
                    setTimeout(() => {
                        line.style.opacity = '0.2';
                        line.style.transform = 'scaleX(0.5)';
                    }, 200);
                }, index * 300);
            });
        }, 2000);

        // Enhanced particle generation
        function createQuantumParticle() {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = Math.random() * 4 + 1 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = ['#00ffff', '#ff0080', '#8000ff'][Math.floor(Math.random() * 3)];
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = '100vh';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '-1';
            particle.style.boxShadow = `0 0 10px ${particle.style.background}`;
            
            document.body.appendChild(particle);
            
            const duration = Math.random() * 3000 + 2000;
            const drift = (Math.random() - 0.5) * 200;
            
            particle.animate([
                { transform: 'translateY(0px) translateX(0px)', opacity: 0 },
                { transform: `translateY(-100vh) translateX(${drift}px)`, opacity: 1 }
            ], {
                duration: duration,
                easing: 'ease-out'
            }).onfinish = () => particle.remove();
        }

        // Generate quantum particles
        setInterval(createQuantumParticle, 1500);

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe timeline items and hexagons
        document.querySelectorAll('.timeline-content, .hexagon').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(el);
        });

        // Form submission effect
        document.querySelector('.submit-btn').addEventListener('click', function(e) {
            e.preventDefault();
            this.innerHTML = 'SENDING...';
            this.style.background = 'linear-gradient(45deg, #8000ff, #00ffff)';
            
            setTimeout(() => {
                this.innerHTML = 'SENDING COMPLETE';
                this.style.background = 'linear-gradient(45deg, #00ff00, #00ffff)';
                
                setTimeout(() => {
                    this.innerHTML = 'Send Message';
                    this.style.background = 'linear-gradient(45deg, #00ffff, #ff0080)';
                }, 2000);
            }, 1500);
        });

        // logo-slider 

        // Coverflow functionality
const items = document.querySelectorAll('.coverflow-item');
const dotsContainer = document.getElementById('dots');
const currentTitle = document.getElementById('current-title');
const currentDescription = document.getElementById('current-description');
const container = document.querySelector('.coverflow-container');
let currentIndex = 3;
let isAnimating = false;

// Image data
const imageData = [
    { title: "Meet Our Happy Clients!", description: "Leading Brands in the Market." },
    { title: "Meet Our Happy Clients!", description: "Leading Brands in the Market." },
    { title: "Meet Our Happy Clients!", description: "Leading Brands in the Market." },
    { title: "Meet Our Happy Clients!", description: "Leading Brands in the Market." },
    { title: "Meet Our Happy Clients!", description: "Leading Brands in the Market." },
    { title: "Meet Our Happy Clients!", description: "Leading Brands in the Market." },
    { title: "Meet Our Happy Clients!", description: "Leading Brands in the Market." },
    { title: "Meet Our Happy Clients!", description: "Leading Brands in the Market." }
];

// Create dots
items.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.onclick = () => goToIndex(index);
    dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll('.dot');

function updateCoverflow() {
    if (isAnimating) return;
    isAnimating = true;

    items.forEach((item, index) => {
        let offset = index - currentIndex;
        if (offset > items.length / 2) offset -= items.length;
        if (offset < -items.length / 2) offset += items.length;

        const absOffset = Math.abs(offset);
        const sign = Math.sign(offset);

        let translateX = offset * 220;
        let translateZ = -absOffset * 200;
        let rotateY = -sign * Math.min(absOffset * 60, 60);
        let opacity = 1 - (absOffset * 0.2);
        let scale = 1 - (absOffset * 0.1);

        if (absOffset > 3) {
            opacity = 0;
            translateX = sign * 800;
        }

        item.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
        item.style.transform = `
            translateX(${translateX}px) 
            translateZ(${translateZ}px) 
            rotateY(${rotateY}deg)
            scale(${scale})
        `;
        item.style.opacity = opacity;
        item.style.zIndex = 100 - absOffset;
        item.classList.toggle('active', index === currentIndex);
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });

    const currentData = imageData[currentIndex];
    currentTitle.textContent = currentData.title;
    currentDescription.textContent = currentData.description;

    currentTitle.style.animation = 'none';
    currentDescription.style.animation = 'none';
    setTimeout(() => {
        currentTitle.style.animation = 'fadeIn 0.6s forwards';
        currentDescription.style.animation = 'fadeIn 0.6s forwards';
    }, 10);

    setTimeout(() => {
        isAnimating = false;
    }, 600);
}

// Smooth circular navigate
function navigate(direction) {
    if (isAnimating) return;

    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = items.length - 1;
    if (nextIndex >= items.length) nextIndex = 0;

    // Smooth wrap effect
    if ((currentIndex === 0 && direction === -1) || (currentIndex === items.length - 1 && direction === 1)) {
        items.forEach((item, index) => {
            let offset = index - nextIndex;
            if (offset > items.length / 2) offset -= items.length;
            if (offset < -items.length / 2) offset += items.length;

            const absOffset = Math.abs(offset);
            const sign = Math.sign(offset);

            let translateX = offset * 220;
            let translateZ = -absOffset * 200;
            let rotateY = -sign * Math.min(absOffset * 60, 60);
            let opacity = 1 - absOffset * 0.2;
            let scale = 1 - absOffset * 0.1;

            if (absOffset > 3) {
                opacity = 0;
                translateX = sign * 800;
            }

            item.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
            item.style.transform = `
                translateX(${translateX}px) 
                translateZ(${translateZ}px) 
                rotateY(${rotateY}deg)
                scale(${scale})
            `;
            item.style.opacity = opacity;
            item.style.zIndex = 100 - absOffset;
        });

        setTimeout(() => {
            currentIndex = nextIndex;
            updateCoverflow();
        }, 50);
    } else {
        currentIndex = nextIndex;
        updateCoverflow();
    }
}

function goToIndex(index) {
    if (isAnimating || index === currentIndex) return;
    currentIndex = index;
    updateCoverflow();
}

// Keyboard navigation
container.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
});

// Click items to select
items.forEach((item, index) => {
    item.addEventListener('click', () => goToIndex(index));
});

// Autoplay
let autoplayInterval = setInterval(() => navigate(1), 4000);

// Initialize
updateCoverflow();
// container.focus();
