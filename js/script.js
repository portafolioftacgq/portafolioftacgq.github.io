// Datos de las imágenes del carrusel (reemplaza con tus datos)
const imagenesCarrusel = [
    { url: "img/1000150708-01.jpg", alt: "Imagen 1" },
    { url: "img/1725206606144.jpg", alt: "Imagen 2" },
    { url: "img/1725206606164.jpg", alt: "Imagen 3" },
    // ... más imágenes
  ];
  
  // Función para crear el carrusel
  function crearCarrusel(contenedor, imagenes) {
    const track = contenedor.querySelector(".carrusel-track");
    const prevButton = contenedor.querySelector(".carrusel-prev");
    const nextButton = contenedor.querySelector(".carrusel-next");
    const dotsContainer = contenedor.querySelector(".carrusel-dots");
  
    let currentIndex = 0;
    let intervalId;
  
    // Crear los puntos de navegación
    imagenes.forEach((imagen, index) => {
      const dot = document.createElement("div");
      dot.classList.add("carrusel-dot");
      dot.addEventListener("click", () => {
        clearInterval(intervalId);
        currentIndex = index;
        actualizarCarrusel();
      });
      dotsContainer.appendChild(dot);
    });
  
    // Actualizar el carrusel
    function actualizarCarrusel() {
      const trackWidth = track.offsetWidth;
      const translateX = -trackWidth * currentIndex;
      track.style.transform = `translateX(${translateX}px)`;
  
      // Actualizar los puntos de navegación
      const dots = dotsContainer.querySelectorAll(".carrusel-dot");
      dots.forEach((dot) => dot.classList.remove("active"));
      dots[currentIndex].classList.add("active");
    }
  
    // Mover el carrusel hacia adelante
    function moverSiguiente() {
      currentIndex = (currentIndex + 1) % imagenes.length;
      actualizarCarrusel();
    }
  
    // Mover el carrusel hacia atrás
    function moverAnterior() {
      currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
      actualizarCarrusel();
    }
  
    // Iniciar el intervalo para la transición automática
    function iniciarTransicionAutomatica() {
      intervalId = setInterval(moverSiguiente, 5000); // Cambiar cada 5 segundos
    }
  
    // Detener la transición automática
    function detenerTransicionAutomatica() {
      clearInterval(intervalId);
    }
  
    // Event listeners para los botones y la transición automática
    prevButton.addEventListener("click", moverAnterior);
    nextButton.addEventListener("click", moverSiguiente);
    contenedor.addEventListener("mouseenter", detenerTransicionAutomatica);
    contenedor.addEventListener("mouseleave", iniciarTransicionAutomatica);
  
    // Agregar event listener para el zoom al hacer clic en la imagen
    track.addEventListener("click", (event) => {
      if (event.target.tagName === "IMG") {
        mostrarImagenZoom(event.target.src, event.target.alt);
      }
    });
  
    // Función para mostrar la imagen con zoom
    function mostrarImagenZoom(url, alt) {
      // Crear un elemento para la imagen con zoom
      const zoomImg = document.createElement("img");
      zoomImg.src = url;
      zoomImg.alt = alt;
      zoomImg.style.maxWidth = "90%";
      zoomImg.style.maxHeight = "90vh";
      zoomImg.style.position = "fixed";
      zoomImg.style.top = "50%";
      zoomImg.style.left = "50%";
      zoomImg.style.transform = "translate(-50%, -50%) scale(0.1)"; // Iniciar con un zoom pequeño
      zoomImg.style.transition = "transform 0.3s ease-in-out";
      zoomImg.style.zIndex = "100";
      zoomImg.style.cursor = "pointer"; // Cambiar el cursor al hacer hover
  
      // Agregar la imagen al body
      document.body.appendChild(zoomImg);
  
      // Aplicar la animación de zoom
      setTimeout(() => {
        zoomImg.style.transform = "translate(-50%, -50%) scale(1)";
      }, 10); // Esperar un poco antes de aplicar el zoom
  
      // Cerrar la imagen al hacer clic
      zoomImg.addEventListener("click", () => {
        document.body.removeChild(zoomImg);
      });
    }
  
    // Inicializar el carrusel
    actualizarCarrusel();
    iniciarTransicionAutomatica();
  }
  
  // Crear el carrusel
  const carrusel = document.querySelector(".carrusel");
  crearCarrusel(carrusel, imagenesCarrusel);
  
  
  // Agregar un event listener para el botón de menú 
  const menuBtn = document.querySelector('.menu-btn'); 
  
  menuBtn.addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('hidden');
  });