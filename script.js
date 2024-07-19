document.addEventListener("DOMContentLoaded", function () {
    const parkImg = document.getElementById("park-img");
    const options = document.querySelectorAll('input[name="options"]');
    const tutorialDiv = document.getElementById("tutorial-div");
    const talkDiv = document.getElementById("talk-div");
    const answerDiv = document.getElementById("answer-div");
  
    const tutorial = [
      "<p>Esta experiencia interactiva te mostrará cómo nuestro mundo interno: nuestros gustos, sensaciones, recuerdos, prejuicios e ideas cambian nuestra interpretación del mundo y las respuestas que damos</p>",
      "<p> &larr; Selecciona las distintas opciones<br><br>Observa como cambian tus diálogos mentales y tu percepción de la realidad</p>",
      "<p>¿Notaste cómo tu percepción de la historia cambió según tu subjetividad?<br><br>Esta experiencia nos recuerda que debemos ser conscientes de cómo nuestras opiniones, creencias, temores, gustos, etc. pueden distorsionar nuestra interpretación del mundo que nos rodea.</p>",
      "<p>mlñkmnñhgknmñlhkmñ</p>",
    ];
  
    const talk = [
      "<p>Hey! Por fin te encuentro!</p>",
      "<p>Te estaba buscando...!</p>",
    ];
    const answer = [
      "<p>Hey! Me alegra verte</p>",
      "<p>¿Qué quieres?</p>",
      "<p>Lo siento, dime rápido, me tengo que ir...</p>",
      "<p>... aquí estoy</p>",
      "<p> qué irritante...!</p>",
      "<p>...quiero estar solo/a</p>",
      "<p>Me cuesta creerte, te llamé y me rechazaste las llamadas</p>",
      "<p>Para lo que necesites, amiga, aquí estoy...</p>",

    ];
  
    let cancelPresentation = false;
    let timers = [];

    const restartButton = document.getElementById('restart');
restartButton.addEventListener('click', function() {
    location.reload();
  });
  
    function showElement(element) {
      element.style.display = "block";
      setTimeout(() => {
        element.classList.add("unfade");
        element.classList.remove("fade");
      }, 10);
    }
  
    function hideElement(element) {
      element.classList.add("fade");
      element.classList.remove("unfade");
      setTimeout(() => {
        element.style.display = "none";
      }, 1000);
    }
  
    function updateDivContent(div, content) {
      hideElement(div);
      setTimeout(() => {
        div.innerHTML = content;
        showElement(div);
      }, 1000);
    }
  
    function setPresentationTimeout(callback, delay) {
      if (!cancelPresentation) {
        const timer = setTimeout(callback, delay);
        timers.push(timer);
      }
    }
  
    async function presentation() {
      cancelPresentation = false;
      updateDivContent(tutorialDiv, tutorial[0]);
      await new Promise(resolve => setPresentationTimeout(resolve, 12000));
      hideElement(tutorialDiv);
  
      await new Promise(resolve => setPresentationTimeout(resolve, 1000));
      updateDivContent(talkDiv, talk[0]);
      await new Promise(resolve => setPresentationTimeout(resolve, 3000));
      hideElement(talkDiv);
  
      await new Promise(resolve => setPresentationTimeout(resolve, 1000));
      updateDivContent(talkDiv, talk[1]);
      await new Promise(resolve => setPresentationTimeout(resolve, 3000));
      hideElement(talkDiv);
  
      await new Promise(resolve => setPresentationTimeout(resolve, 1000));
      updateDivContent(tutorialDiv, tutorial[1]);
      await new Promise(resolve => setPresentationTimeout(resolve, 7000));
      hideElement(tutorialDiv);
    }
  
    presentation();
  
    options.forEach(option => {
      option.addEventListener("change", () => {
        const effect = option.value;
        applyEffect(effect);
      });
    });
  
    function applyEffect(effect) {
      cancelPresentation = true;
      timers.forEach(timer => clearTimeout(timer));
      timers = [];
  
      hideElement(tutorialDiv);
      hideElement(talkDiv);
      hideElement(answerDiv);
  
      switch (effect) {
        case "agrada":
          parkImg.style.filter = "saturate(110%)";
          updateDivContent(answerDiv, answer[0]);
          break;
        case "desagrada":
          parkImg.style.filter = "saturate(70%)";
          updateDivContent(answerDiv, answer[1]);
          break;
        case "apurado":
          parkImg.style.filter = "hue-rotate(300deg)";
          updateDivContent(answerDiv, answer[2]);
          break;
        case "relajado":
          parkImg.style.filter = "saturate(110%)";
          updateDivContent(answerDiv, answer[3]);
          break;
        case "tenso":
          parkImg.style.filter = "hue-rotate(180deg)";
          updateDivContent(answerDiv, answer[4]);
          break;
        case "triste":
          parkImg.style.filter = "saturate(10%)";
          updateDivContent(answerDiv, answer[5]);
          break;
        case "llamando":
          parkImg.style.filter = "url('./assets/esc1.jpg')";
          updateDivContent(answerDiv, answer[6]);
          break;
        case "regalo":
          parkImg.style.filter = "saturate(100%)";
          updateDivContent(answerDiv, answer[7]);
          break;
        case "discutiendo":
          parkImg.style.filter = "url('./assets/esc5.jpg')";
          // Lógica para "discutiendo"
          break;
        default:
          parkImg.style.filter = "saturate(100%)";
          break;
      }
    }
  
    function cambiarImagenSegunPantalla() {
      const windowWidth = window.innerWidth;
      parkImg.src = windowWidth <= 568 ? "./assets/esc4.jpg" : "./assets/esc3.jpg";
    }
  
    window.addEventListener("resize", cambiarImagenSegunPantalla);
    cambiarImagenSegunPantalla();
  });
  



/*document.addEventListener("DOMContentLoaded", function () {
  const parkImg = document.getElementById("park-img");
  const options = document.querySelectorAll('input[name="options"]');
  const tutorialDiv = document.getElementById("tutorial-div");
  const talkDiv = document.getElementById("talk-div");
  const answerDiv = document.getElementById("answer-div");

  const tutorial = [
    "<p>Esta experiencia interactiva te mostrará cómo nuestro mundo interno: nuestros gustos, sensaciones, recuerdos, prejuicios e ideas cambian nuestra interpretación del mundo y las respuestas que damos</p>",
    "<p> &larr; Selecciona las distintas opciones<br><br>Observa como cambian tus diálogos mentales y tu percepción de la realidad</p>",
    "<p>¿Notaste cómo tu percepción de la historia cambió según tu subjetividad?<br><br>Esta experiencia nos recuerda que debemos ser conscientes de cómo nuestras opiniones, creencias, temores, gustos, etc. pueden distorsionar nuestra interpretación del mundo que nos rodea.</p>",
    "<p>mlñkmnñhgknmñlhkmñ</p>",
  ];

  const talk = [
    "<p>Hey! Por fin te encuentro!</p>",
    "<p>Te estaba buscando...!</p>",
  ];
  const answer = [
    "<p>Hey! Me alegra verte</p>",
    "<p>¿Qué quieres?</p>",
    "<p>Lo siento, dime rápido, me tengo que ir...</p>",
    "<p>... aquí estoy</p>",
    "<p> que irritante...!</p>",
    "<p>...quiero estar solo/a</p>",
  ];

  function showElement(element) {
    element.style.display = "block";
    setTimeout(() => {
      element.classList.add("unfade");
      element.classList.remove("fade");
    }, 10); // Pequeño retraso para asegurar que la transición se aplique
  }

  function hideElement(element) {
    element.classList.add("fade");
    element.classList.remove("unfade");
    setTimeout(() => {
      element.style.display = "none"; // Después de la transición, oculta el elemento
    }, 1000); // Espera el tiempo de la transición (1s en este caso)
  }

  function updateTutorialDiv(index) {
    hideElement(tutorialDiv);
    setTimeout(() => {
      tutorialDiv.innerHTML = tutorial[index];
      showElement(tutorialDiv);
    }, 1000);
  }

  function updateTalkDiv(index) {
    hideElement(talkDiv);
    setTimeout(() => {
      talkDiv.innerHTML = talk[index];
      showElement(talkDiv);
    }, 1000);
  }

  function updateAnswerDiv(index) {
    hideElement(answerDiv);
    setTimeout(() => {
      answerDiv.innerHTML = answer[index];
      showElement(answerDiv);
    }, 1000);
  }
function presentation(){
    updateTutorialDiv(0);
    setTimeout(() => {
      hideElement(tutorialDiv);
      setTimeout(() => {
        updateTalkDiv(0);
        setTimeout(() => {
          hideElement(talkDiv);
          setTimeout(() => {
            updateTalkDiv(1);
            setTimeout(() => {
              hideElement(talkDiv);
              setTimeout(() => {
                updateTutorialDiv(1);
                setTimeout(() => {
                  hideElement(tutorialDiv);
                }, 7000);
              }, 1000);
            }, 3000);
          }, 1000);
        }, 3000);
      }, 1000);
    }, 12000);
}

presentation();
  

  options.forEach((option) => {
    option.addEventListener("change", () => {
      const effect = option.value; // Obtener el valor del radio button seleccionado
      applyEffect(effect); // Aplicar el efecto correspondiente
    });
  });

  function applyEffect(effect) {
    hideElement(tutorialDiv);
    hideElement(talkDiv);
    hideElement(answerDiv);
    if (effect === "agrada") {
      parkImg.style.filter = "saturate(110%)";
      updateAnswerDiv(0);
    } else if (effect === "desagrada") {
      parkImg.style.filter = "saturate(70%)";
      updateAnswerDiv(1);
    } else if (effect === "apurado") {
      parkImg.style.filter = "hue-rotate(180deg)";
      updateAnswerDiv(2);
    } else if (effect === "relajado") {
      parkImg.style.filter = "saturate(110%)";
      updateAnswerDiv(3);
    } else if (effect === "tenso") {
      parkImg.style.filter = "hue-rotate(180deg)";
      updateAnswerDiv(4);
    } else if (effect === "triste") {
      parkImg.style.filter = "saturate(10%)";
      updateAnswerDiv(5);
    } else if (effect === "llamando") {
        parkImg.style.filter = "url('./assets/esc1.jpg')";
      updateAnswerDiv(6);
    } else if (effect === "regalo") {
    } else if (effect === "discutiendo") {
    } else {
    }
  }

  function cambiarImagenSegunPantalla() {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 568) {
      parkImg.src = "./assets/esc4.jpg";
    } else {
      parkImg.src = "./assets/esc3.jpg";
    }
  }

  // Vincular evento resize
  window.addEventListener("resize", cambiarImagenSegunPantalla);

  // Ejecutar función al cargar la página
  cambiarImagenSegunPantalla();
});*/
