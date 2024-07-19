document.addEventListener("DOMContentLoaded", function () {
  const parkImg = document.getElementById("park-img");
  const options = document.querySelectorAll('input[name="options"]');
  const tutorialDiv = document.getElementById("tutorial-div");
  const talkDiv = document.getElementById("talk-div");
  const answerDiv = document.getElementById("answer-div");
  const filtroImg = document.getElementById("filtro-img");

  const tutorial = [
    "<p>Esta experiencia interactiva te mostrará cómo nuestro mundo interno: nuestros gustos, sensaciones, recuerdos, prejuicios e ideas cambian nuestra interpretación del mundo y las respuestas que damos.</p>",
    "<p> &larr; Selecciona las distintas opciones<br><br>Observa como cambian tus diálogos y tu percepción de la realidad.</p>",
    "<p>¿Notaste cómo tu percepción de este encuentro cambió según tu subjetividad?<br><br>Esta breve experiencia interactiva nos empuja a esforzarnos a ser conscientes de cómo nuestras opiniones, creencias, temores, gustos, niveles de conciencia, todas nuestras condiciones internas distorsionan nuestra interpretación del mundo que nos rodea. </p>",
  ];

  const talk = [
    "<p>Hey! Por fin te encuentro!</p>",
    "<p>Te estaba buscando...!</p>",
  ];
  const answer = [
    "<p><br/>Hey! Me alegra verte</p>",
    "<p><br/>¿Qué quieres?</p>",
    "<p><br/>Lo siento, dime rápido, me tengo que ir...</p>",
    "<p><br/> ...disculpa, me siento mal</p>",
    "<p><br/>Hoy no estoy para nadie ...quiero estar solo/a</p>",
    "<p>Me cuesta creerte, te llamé y me rechazaste las llamadas</p>",
    "<p><br/>Para lo que necesites, amiga, aquí estoy...</p>",
  ];

  let cancelPresentation = false;
  let timers = [];

  const restartButton = document.getElementById("restart");
  restartButton.addEventListener("click", function () {
    location.reload();
  });

  const endButton = document.getElementById("end-button");
  endButton.addEventListener("click", function () {
    updateDivContent(tutorialDiv, tutorial[2]);
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
    await new Promise((resolve) => setPresentationTimeout(resolve, 12000));
    hideElement(tutorialDiv);

    await new Promise((resolve) => setPresentationTimeout(resolve, 1000));
    updateDivContent(talkDiv, talk[0]);
    await new Promise((resolve) => setPresentationTimeout(resolve, 3000));
    hideElement(talkDiv);

    await new Promise((resolve) => setPresentationTimeout(resolve, 1000));
    updateDivContent(talkDiv, talk[1]);
    await new Promise((resolve) => setPresentationTimeout(resolve, 3000));
    hideElement(talkDiv);

    await new Promise((resolve) => setPresentationTimeout(resolve, 1000));
    updateDivContent(tutorialDiv, tutorial[1]);
    await new Promise((resolve) => setPresentationTimeout(resolve, 7000));
    hideElement(tutorialDiv);
  }

  presentation();

  options.forEach((option) => {
    option.addEventListener("change", () => {
      const effect = option.value;
      applyEffect(effect);
    });
  });

  function applyEffect(effect) {
    const isSmallScreen = window.innerWidth <= 568;
    cancelPresentation = true;
    timers.forEach((timer) => clearTimeout(timer));
    timers = [];

    hideElement(tutorialDiv);
    hideElement(talkDiv);
    hideElement(answerDiv);
    parkImg.style.filter = "saturate(100%)";
    filtroImg.style.width = isSmallScreen ? "180px" : "300px"; 
    filtroImg.style.height = isSmallScreen ? "180px" : "300px"; 
    filtroImg.style.top = isSmallScreen ? "10%" : "3%"; 
    filtroImg.style.right = isSmallScreen ? "5%" : "10%"; 
    filtroImg.style.opacity = "0.7";

    switch (effect) {
      case "agrada":
        parkImg.style.filter = "saturate(115%) brightness(115%)";
        updateDivContent(answerDiv, answer[0]);
        filtroImg.style.backgroundImage = "url('./assets/esc6.jpg')";
        showElement(filtroImg);
        break;
      case "desagrada":
        parkImg.style.filter = "brightness(80%)";
        updateDivContent(answerDiv, answer[1]);
        filtroImg.style.backgroundImage = "url('./assets/glitch1.gif')";
        filtroImg.style.width = isSmallScreen ? "27%" : "20%"; 
    filtroImg.style.height = isSmallScreen ? "400px" : "400px"; 
    filtroImg.style.top = isSmallScreen ? "40%" : "40%"; 
    filtroImg.style.right = isSmallScreen ? "8%" : "5%"; 
    filtroImg.style.opacity = "0.3";


        showElement(filtroImg);
        break;
      case "apurado":
        parkImg.style.filter = "hue-rotate(300deg)";
        updateDivContent(answerDiv, answer[2]);
        filtroImg.style.backgroundImage = "url('./assets/clock2.png')";
        showElement(filtroImg);
        break;
      case "panza":
        parkImg.style.filter = "hue-rotate(90deg)";
        updateDivContent(answerDiv, answer[3]);
        filtroImg.style.backgroundImage = "url('./assets/inodoro.jpg')";
        showElement(filtroImg);
        break;
      case "triste":
        parkImg.style.filter = "grayscale(90%)";
        updateDivContent(answerDiv, answer[4]);
        filtroImg.style.backgroundImage = "url('./assets/lluviagif.gif')";
        filtroImg.style.top = isSmallScreen ? "45%" : "50%"; 
        filtroImg.style.width = isSmallScreen ? "250px" : "300px"; 
        filtroImg.style.height = isSmallScreen ? "400px" : "300px"; 
        showElement(filtroImg);
        break;
      case "llamando":
        parkImg.style.filter = "hue-rotate(180deg)";
        updateDivContent(answerDiv, answer[5]);
        filtroImg.style.backgroundImage = "url('./assets/phone.jpg')";
        showElement(filtroImg);
        break;
      case "regalo":
        parkImg.style.filter = "saturate(100%)";
        updateDivContent(answerDiv, answer[6]);
        filtroImg.style.backgroundImage = "url('./assets/gift.jpg')";
        showElement(filtroImg);
        break;
      default:
        break;
    }
  }

  function cambiarImagenSegunPantalla() {
    const windowWidth = window.innerWidth;
    parkImg.src =
      windowWidth <= 568 ? "./assets/esc4.jpg" : "./assets/esc3.jpg";
  }

  window.addEventListener("resize", cambiarImagenSegunPantalla);
  cambiarImagenSegunPantalla();
});
