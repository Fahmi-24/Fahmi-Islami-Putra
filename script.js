/*==================== Toggle Icon Navbar (Menu HP) ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); 
    navbar.classList.toggle('active'); 
};

/*==================== Scroll Sections Active Link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /*==================== Sticky Navbar ====================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== Remove Toggle Icon & Navbar on Scroll ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*==================== Scroll Reveal (Animasi Muncul) ====================*/
const sr = ScrollReveal({
    distance: '80px',   
    duration: 2000,     
    delay: 200          
});

sr.reveal('.home-content, .heading, .sub-heading', { origin: 'top' });
/* Update: Menambahkan .social-container ke daftar animasi dari bawah */
sr.reveal('.about-img, .services-container, .cert-container, .timeline-item, .org-container, .video-grid, .social-container, .intro-image, .intro-text', { origin: 'bottom' });
sr.reveal('.home-content h1, .about-content', { origin: 'left' });
sr.reveal('.hero-visual', { origin: 'right' });


/*==================== TYPED JS ====================*/
const typed = new Typed('#typing-text', {
    strings: [
        'MECHANICAL DESIGN.',        
        'WELDING.',       
        'ROBOTICS.',      
        'UAV CONTROL.',        
    ],
    typeSpeed: 100,      
    backSpeed: 60,       
    backDelay: 1000,     
    loop: true           
});