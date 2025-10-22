// Seleccionamos toggle y elementos
let toggle = document.getElementById('modo');
if (toggle) {
  let tema = document.getElementById('tema');
  let body = document.body;


  function activarModoOscuro() { //----------MODO OSCURO
    //SWITCH
    if (tema) {
      tema.textContent = "Oscuro";
      tema.style.left = "-38%";
      tema.style.color = "#1a1918";
      tema.style.textShadow = "2px 2px 5px #2E2D2D";
      tema.style.opacity = "1";
    }
    //PAGINA
    aplicarEstilosPaginaOscuro();
  }

  function activarModoClaro() { //----------MODO CLARO
    //SWITCH
    if (tema) {
      tema.textContent = "Claro";
      tema.style.left = "10%";
      tema.style.color = "#e0e0e0";
    }
    //PAGINA
    aplicarEstilosPaginaClaro();
  }

  //VARIABLES

  //----GENERAL
  let titulos = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let texto = document.querySelectorAll('p, li, em');
  let negrita = document.querySelectorAll('strong');
  let header = document.querySelector('header');
  //----RUMBO
  let mision = document.getElementById("mision");
  let vision = document.getElementById("vision");
  let glitch = document.getElementById("glitch");
  let a = document.getElementById("a");
  //----ESTRATEGIAS
  let arido = document.getElementById("calor")
  let frio = document.getElementById("frio")
  //----PRODUCTOS
  let tarjeta = document.querySelectorAll(".tarjeta")
  //----VIABILIDAD FINANCIERA
  let money = document.querySelectorAll(".money")


  //---------PAGINA EN MODO OSCURO

  function aplicarEstilosPaginaOscuro() {
    //----GENERAL
    if (body) body.style.backgroundColor = "#1a1a1a"; //FONDO PAGINA
    if (header) header.style.backgroundImage = "url('../imagenes/fondo oscuro.png')"; //FONDO HEADER
    titulos.forEach(t => t.style.color = "#e8e8e8"); //TITULOS (H1.......H6)
    texto.forEach(t => t.style.color = "#e8e8e8"); //TEXTOS (P)
    negrita.forEach(n => n.style.color = "#ffffffff"); //NEGRITA (STRONG)
    //----RUMBO
    if (mision) mision.style.boxShadow = "8px 10px 0px #5e5e5e";
    if (vision) vision.style.boxShadow = "-10px 10px #5e5e5e";
    if (glitch) glitch.style.color = "#e8e8e8";
    if (a) a.style.color = "#b4b4b4ff";
    //----ESTRATEGIAS
    if (arido) arido.style.background = "linear-gradient(135deg, #3a2e21, #5c4b2c, #7a4d28)"; //FONDO ARIDO(ESTRATEGIAS)
    if (frio) frio.style.background = "linear-gradient(135deg, #1a2b3c, #345b7a, #223d52)"; //FONDO FRIO(ESTRATEGIAS)
    //----PRODUCTOS
    tarjeta.forEach(t => t.style.boxShadow = "0 4px 15px rgba(255, 255, 255, 0.4)");
    //----VIABILIDAD  FINANCIERA
    money.forEach(m => m.style.boxShadow = "0 6px 20px rgba(255, 255, 255, 0.5)");
  }
  

  //---------PAGINA EN MODO CLARO

  function aplicarEstilosPaginaClaro() {
    //----GENERAL
    if (body) body.style.backgroundColor = "#e8e8e8c8"; //FONDO PAGINA
    if (header) header.style.backgroundImage = "url('../imagenes/fondo claro.png')"; //FONDO HEADER
    titulos.forEach(t => t.style.color = "#2E2D2D"); //TITULOS (H1.......H6)
    texto.forEach(t => t.style.color = "#2E2D2D"); //TEXTOS (P)
    negrita.forEach(n => n.style.color = ""); //NEGRITA (STRONG)
    //----RUMBO
    if (mision) mision.style.boxShadow = "8px 10px 0px #2e2d2d73";
    if (vision) vision.style.boxShadow = "-10px 10px #2e2d2d73";
    if (glitch) glitch.style.color = "#2E2D2D";
    if (a) a.style.color = "#444444ff";
    //----ESTRATEGIAS
    if (arido) arido.style.background = "linear-gradient(135deg, #f4e2c7, #e7b26f, #d97a3e)"; //FONDO ARIDO(ESTRATEGIAS)
    if (frio) frio.style.background = "linear-gradient(135deg, #e0f0ff, #a0d8ff, #d0e8f8)"; //FONDO FRIO(ESTRATEGIAS)
    //----PRODUCTOS
    tarjeta.forEach(t => t.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.4)");
    //----VIABILIDAD  FINANCIERA
  }



  // Aplicar al cargar según LocalStorage
  const modoGuardado = localStorage.getItem('modoOscuro');
  if (modoGuardado === 'true') {
    toggle.checked = true;
    activarModoOscuro();
  } else {
    toggle.checked = false;
    activarModoClaro();
  }

  // Cambiar al usar el toggle
  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      activarModoOscuro();
      localStorage.setItem('modoOscuro', 'true');
    } else {
      activarModoClaro();
      localStorage.setItem('modoOscuro', 'false');
    }
  });
}
