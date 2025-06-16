document.addEventListener('DOMContentLoaded', () => {

    // --- MANEJO DEL MENÚ MÓVIL ---
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelectorAll('.nav-link');

    // Abre y cierra el menú al hacer clic en el icono de hamburguesa
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // Cierra el menú al hacer clic en un enlace (útil en vista móvil)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });

    // --- EFECTO DE SOMBRA EN EL HEADER AL HACER SCROLL ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        // Añade sombra si el scroll es mayor de 50px, si no, la quita
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // --- ANIMACIÓN DE APARICIÓN PARA LAS SECCIONES ---
    // Usamos Intersection Observer para animar las secciones cuando entran en el viewport
    const sections = document.querySelectorAll('.section[id]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Si la sección es visible
            if (entry.isIntersecting) {
                // `requestAnimationFrame` asegura que la animación se ejecute fluidamente
                requestAnimationFrame(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                });
                // Dejamos de observar la sección una vez animada para optimizar el rendimiento
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1 // La animación se activa cuando el 10% de la sección es visible
    });

    sections.forEach(section => {
        // Oculta las secciones inicialmente para que la animación de entrada funcione
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(section);
    });
});