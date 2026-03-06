/*
╔══════════════════════════════════════════════════════════════╗
║  ARCHIVO: script.js  →  JAVASCRIPT (comportamiento)        ║
║  Controla las animaciones e interacciones del sitio         ║
╚══════════════════════════════════════════════════════════════╝

¿QUÉ HACE ESTE ARCHIVO?
────────────────────────────────────────────────────────────────
  1. Resalta automáticamente el enlace del menú de la página actual
  2. Hace funcionar el botón ☰ hamburguesa en celulares

En general NO necesitas modificar este archivo para editar
el contenido o los colores de tu página.
Solo edita HTML y CSS para eso.
*/


/*
  ─────────────────────────────────────────────────────────────
  FUNCIÓN 1: Resaltar enlace activo en el menú
  
  ¿Qué hace?
  Al cargar la página, detecta en qué archivo estamos
  (por ejemplo "simulaciones.html") y automáticamente
  agrega la clase "active" al enlace correspondiente
  en el menú, para que se vea resaltado en cyan.
  ─────────────────────────────────────────────────────────────
*/

// 'DOMContentLoaded' espera a que la página cargue completamente antes de correr
document.addEventListener('DOMContentLoaded', function() {

    // Obtiene el nombre del archivo actual (ej: "simulaciones.html")
    // Si no hay nombre (página raíz), usa "index.html"
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Busca todos los elementos con class="nav-link" en el documento
    const navLinks = document.querySelectorAll('.nav-link');

    // Recorre cada enlace del menú
    navLinks.forEach(link => {
        // Obtiene el valor del atributo href del enlace (ej: "simulaciones.html")
        const href = link.getAttribute('href');

        // Si el href coincide con la página actual, agrega la clase "active"
        // Esto activa el color cyan y el subrayado en el enlace correcto
        if (href === currentPage) {
            link.classList.add('active');
        }
    });


    /*
      ─────────────────────────────────────────────────────────
      FUNCIÓN 2: Menú hamburguesa ☰ para celulares
      
      ¿Qué hace?
      En pantallas pequeñas, el menú se oculta y aparece
      el botón ☰. Al hacer clic en él, el menú se muestra
      o se oculta (toggle).
      ─────────────────────────────────────────────────────────
    */

    // Busca el botón hamburguesa y el menú de navegación
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Solo ejecuta si ambos elementos existen en la página
    if (hamburger && navMenu) {

        // Al hacer clic en el botón hamburguesa...
        hamburger.addEventListener('click', function() {

            // Revisa si el menú ya tiene la clase 'open'
            if (navMenu.style.display === 'flex') {
                // Si está abierto → lo cierra
                navMenu.style.display = 'none';
            } else {
                // Si está cerrado → lo abre en columna (los ítems van uno debajo del otro)
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';

                // Estilos adicionales para que el menú se vea bien en celular
                navMenu.style.position = 'absolute';
                navMenu.style.top = '70px';       /* aparece debajo de la barra */
                navMenu.style.left = '0';
                navMenu.style.right = '0';
                navMenu.style.background = 'rgba(2, 12, 27, 0.98)'; /* fondo oscuro */
                navMenu.style.padding = '1rem 2rem';
                navMenu.style.zIndex = '999';
            }
        });

        // Cierra el menú automáticamente al hacer clic en un enlace
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.style.display = 'none';
            });
        });
    }

});

/*
  ─────────────────────────────────────────────────────────────
  ¿Quieres agregar más funcionalidad?
  
  Algunos ejemplos de lo que puedes agregar:
  
  • Animación al hacer scroll:
    window.addEventListener('scroll', function() {
        // código aquí
    });
  
  • Mostrar un mensaje de alerta:
    alert('¡Bienvenido al proyecto OP-AMP!');
  
  • Cambiar un texto al hacer clic:
    document.getElementById('mi-id').innerHTML = 'Nuevo texto';
  ─────────────────────────────────────────────────────────────
*/
