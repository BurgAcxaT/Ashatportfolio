document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href');
            var targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    var heroButton = document.querySelector('.hero-button');
    heroButton.addEventListener('click', function() {
        var contactSection = document.querySelector('#contact');
        contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    var skillCards = document.querySelectorAll('.skill-card');
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var progressBar = entry.target.querySelector('.skill-progress');
                var progress = progressBar.getAttribute('data-progress');
                progressBar.style.width = progress + '%';
            }
        });
    }, {
        threshold: 0.5
    });

    skillCards.forEach(function(card) {
        observer.observe(card);
    });

    var allSections = document.querySelectorAll('.hero, .about, .skills, .contact');
    var sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    allSections.forEach(function(section) {
        sectionObserver.observe(section);
    });

    var contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(function(card, index) {
        setTimeout(function() {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.5s ease';
    });

    var name = document.querySelector('.name');
    var letters = name.textContent.split('');
    name.textContent = '';
    letters.forEach(function(letter, index) {
        var span = document.createElement('span');
        span.textContent = letter;
        span.style.display = 'inline-block';
        span.style.animation = 'letterBounce 0.5s ease forwards';
        span.style.animationDelay = index * 0.05 + 's';
        span.style.opacity = '0';
        name.appendChild(span);
    });

    var style = document.createElement('style');
    style.textContent = '@keyframes letterBounce { 0% { opacity: 0; transform: translateY(-20px); } 100% { opacity: 1; transform: translateY(0); } }';
    document.head.appendChild(style);
});
