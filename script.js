// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Menú responsive
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Navegación con desplazamiento suave
    const navLinks = document.querySelectorAll('nav ul li a, .footer-links ul li a, .hero-content a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Cerrar el menú móvil si está abierto
                    nav.classList.remove('active');
                }
            }
        });
    });
    
    // Cambiar estilo del header al hacer scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.padding = '0.6rem 0';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '1rem 0';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Funcionamiento de las pestañas en la sección de servicios
    const tabItems = document.querySelectorAll('.tab-item');
    
    tabItems.forEach(tab => {
        tab.addEventListener('click', function() {
            // Eliminar la clase 'active' de todas las pestañas
            tabItems.forEach(item => item.classList.remove('active'));
            
            // Añadir la clase 'active' a la pestaña actual
            this.classList.add('active');
            
            // Mostrar el contenido correspondiente
            const tabId = this.getAttribute('data-tab');
            const tabPanes = document.querySelectorAll('.tab-pane');
            
            tabPanes.forEach(pane => {
                pane.classList.remove('active');
                if (pane.id === tabId) {
                    pane.classList.add('active');
                }
            });
        });
    });
    
    // Funcionamiento de las sub-pestañas en la sección de restaurante
    const subTabs = document.querySelectorAll('.sub-tab');
    
    subTabs.forEach(subTab => {
        subTab.addEventListener('click', function() {
            // Eliminar la clase 'active' de todas las sub-pestañas
            subTabs.forEach(item => item.classList.remove('active'));
            
            // Añadir la clase 'active' a la sub-pestaña actual
            this.classList.add('active');
            
            // Mostrar el contenido correspondiente
            const subTabId = this.getAttribute('data-subtab');
            const subPanes = document.querySelectorAll('.sub-pane');
            
            subPanes.forEach(pane => {
                pane.classList.remove('active');
                if (pane.id === subTabId) {
                    pane.classList.add('active');
                }
            });
        });
    });
    
    // Slider de testimonios
    const slider = document.querySelector('.testimonios-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const testimonios = document.querySelectorAll('.testimonio');
    
    if (slider && prevBtn && nextBtn && testimonios.length > 0) {
        let currentIndex = 0;
        
        function updateSlider() {
            const slideWidth = testimonios[0].offsetWidth;
            slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }
        
        // Inicializar el slider
        updateSlider();
        
        // Eventos para los botones de navegación
        nextBtn.addEventListener('click', function() {
            if (currentIndex < testimonios.length - 1) {
                currentIndex++;
                updateSlider();
            } else {
                // Volver al principio
                currentIndex = 0;
                updateSlider();
            }
        });
        
        prevBtn.addEventListener('click', function() {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            } else {
                // Ir al final
                currentIndex = testimonios.length - 1;
                updateSlider();
            }
        });
        
        // Actualizar el slider cuando cambia el tamaño de la ventana
        window.addEventListener('resize', updateSlider);
    }
    
    // Acordeón para preguntas frecuentes
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Cerrar todos los elementos activos
            accordionItems.forEach(accItem => {
                accItem.classList.remove('active');
            });
            
            // Si el elemento clickeado no estaba activo, abrirlo
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    // Validación del formulario de contacto
    const contactForm = document.querySelector('.contacto-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí iría la lógica para enviar el formulario a un servidor
            // o para mostrar un mensaje de éxito
            alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
            contactForm.reset();
        });
    }
    
    // Animación de elementos al hacer scroll
    const animateElements = document.querySelectorAll('.section-title, .servicio-content, .galeria-item, .testimonio, .accordion-item, .contacto-content');
    
    function checkScroll() {
        animateElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Aplicar estilos iniciales para animación
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Verificar posición al cargar la página
    checkScroll();
    
    // Verificar posición al hacer scroll
    window.addEventListener('scroll', checkScroll);
    
    // Carrusel de imágenes para servicios
    const carruseles = document.querySelectorAll('.carousel-container');
    
    carruseles.forEach(carousel => {
        const slide = carousel.querySelector('.carousel-slide');
        const prevBtn = carousel.querySelector('.prev');
        const nextBtn = carousel.querySelector('.next');
        let counter = 0;
        const totalSlides = slide.children.length;
        const slideWidth = 100 / totalSlides; // Calcular el ancho dinámicamente
        
        // Función para mover el carrusel
        function moveCarousel() {
            slide.style.transform = `translateX(-${counter * slideWidth}%)`;
        }
        
        // Evento para el botón siguiente
        nextBtn.addEventListener('click', function() {
            counter = (counter + 1) % totalSlides;
            moveCarousel();
        });
        
        // Evento para el botón anterior
        prevBtn.addEventListener('click', function() {
            counter = (counter - 1 + totalSlides) % totalSlides;
            moveCarousel();
        });
        
        // Autoplay del carrusel
        let interval = setInterval(function() {
            counter = (counter + 1) % totalSlides;
            moveCarousel();
        }, 5000);
        
        // Detener autoplay al pasar el mouse
        carousel.addEventListener('mouseenter', function() {
            clearInterval(interval);
        });
        
        // Reiniciar autoplay al quitar el mouse
        carousel.addEventListener('mouseleave', function() {
            interval = setInterval(function() {
                counter = (counter + 1) % totalSlides;
                moveCarousel();
            }, 5000);
        });
    });
}); 