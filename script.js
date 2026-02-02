// Reading time calculator
function calculateReadingTime() {
    const article = document.querySelector('article');
    const text = article.textContent;
    const wordsPerMinute = 200;
    const wordCount = text.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    
    return readingTime;
}

// Add reading time to meta section
function displayReadingTime() {
    const readingTime = calculateReadingTime();
    const meta = document.querySelector('.meta');
    
    const readingTimeElement = document.createElement('span');
    readingTimeElement.textContent = `${readingTime} min read`;
    readingTimeElement.classList.add('reading-time');
    
    meta.appendChild(readingTimeElement);
}

// Smooth scroll for any future internal links
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
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    container.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    setTimeout(() => {
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    displayReadingTime();
    initSmoothScroll();
    initFadeIn();
    
    console.log('Blog post loaded successfully');
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
