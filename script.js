// Reading time calculator
function calculateReadingTime() {
    const article = document.querySelector('article');
    if (!article) return 0;
    
    const text = article.textContent;
    const wordsPerMinute = 200;
    const wordCount = text.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    
    return readingTime;
}

// Add reading time to meta section
function displayReadingTime() {
    const readingTime = calculateReadingTime();
    if (readingTime === 0) return;
    
    const meta = document.querySelector('.meta');
    if (!meta) return;
    
    const readingTimeElement = document.createElement('span');
    readingTimeElement.textContent = `${readingTime} min read`;
    readingTimeElement.classList.add('reading-time');
    
    meta.appendChild(readingTimeElement);
}

// Smooth scroll for internal links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add fade-in animation on load
function initFadeIn() {
    const container = document.querySelector('.container');
    if (!container) return;
    
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    container.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    setTimeout(() => {
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
}

// Keyboard navigation for chapters
function initKeyboardNav() {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            const prevButton = document.querySelector('.nav-btn[href*="chapter3"]');
            if (prevButton && window.location.href.includes('chapter4')) {
                window.location.href = prevButton.href;
            }
        } else if (e.key === 'ArrowRight') {
            const nextButton = document.querySelector('.nav-btn[href*="chapter4"]');
            if (nextButton && window.location.href.includes('chapter3')) {
                window.location.href = nextButton.href;
            }
        } else if (e.key === 'h' || e.key === 'H') {
            const homeButton = document.querySelector('.nav-home');
            if (homeButton) {
                window.location.href = homeButton.href;
            }
        }
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    displayReadingTime();
    initSmoothScroll();
    initFadeIn();
    initKeyboardNav();
    
    console.log('Page loaded successfully');
    console.log('Keyboard shortcuts: ← → to navigate chapters, H for home');
});

// Add print functionality
function printPost() {
    window.print();
}

// Export for potential future use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calculateReadingTime,
        printPost
    };
}
