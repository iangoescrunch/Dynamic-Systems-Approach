// Reading time calculator
document.addEventListener('DOMContentLoaded', function() {
    const article = document.querySelector('article');
    
    if (article) {
        const text = article.textContent;
        const wordCount = text.trim().split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200); // 200 words per minute
        
        const readingTimeElement = document.createElement('p');
        readingTimeElement.className = 'reading-time';
        readingTimeElement.textContent = `${readingTime} min read`;
        
        const header = document.querySelector('header');
        if (header) {
            header.appendChild(readingTimeElement);
        }
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Add fade-in animation to post cards on homepage
if (document.querySelector('.post-cards')) {
    const cards = document.querySelectorAll('.post-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}
