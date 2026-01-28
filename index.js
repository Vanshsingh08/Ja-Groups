// Animazione leggera all'entrata delle card
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      card.classList.add('visible');
    }
  });
});
// Gestione del Menu Mobile (Hamburger)
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
    // 1. Apre/Chiude il menu al click sull'hamburger
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // 2. Chiude il menu dopo aver cliccato un link (utile su mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            // Verifica se il menu è aperto e lo chiude
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
}

// **AGGIUNGI QUI IL CODICE PER LO SMOOTH SCROLL (come suggerito in precedenza) **
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') === '#') return;
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const headerHeight = document.getElementById('main-header')?.offsetHeight || 0;

        if (targetElement) {
            window.scrollTo({
                // Sottrae l'altezza dell'header fisso per centrare bene la sezione
                top: targetElement.offsetTop - headerHeight - 10, 
                behavior: 'smooth'
            });
        }
    });
});
