document.addEventListener("DOMContentLoaded", function () {
    const parkImg = document.getElementById("park-img");
    const options = document.querySelectorAll('input[name="options"]');
  
    
    options.forEach((option) => {
      option.addEventListener("change", () => {
        const effect = option.value; // Obtener el valor del radio button seleccionado
        applyEffect(effect); // Aplicar el efecto correspondiente
      });
    });
  
    function applyEffect(effect) {
      // Implementar la lógica para aplicar el efecto deseado a la imagen
      // (saturación, brillo, contraste, etc.)
      // Ejemplo: Aumentar la saturación
      if (effect === "agrada") {
        parkImg.style.filter = "saturate(150%)"; // Aumentar la saturación al 150%
      } else if (effect === "desagrada") {
        parkImg.style.filter = "saturate(50%)"; // Reducir la saturación al 50%
        // Implementar lógica para aumentar el brillo
      } else if (effect === "contraste") {
        // Implementar lógica para aumentar el contraste
      }
      // Agregar más opciones de efectos según sea necesario
    }
  
    function cambiarImagenSegunPantalla() {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 568) {
        parkImg.src = './assets/esc4.jpg';
      } else {
        parkImg.src = './assets/esc3.jpg';
      }
    }
  
    // Vincular evento resize
    window.addEventListener('resize', cambiarImagenSegunPantalla);
  
    // Ejecutar función al cargar la página
    cambiarImagenSegunPantalla();
  });
  