// Seleccionamos toggle y elementos
let toggle = document.getElementById('modo');
if (toggle) {
  let tema = document.getElementById('tema');
  let body = document.body;
  let titulos = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let texto = document.querySelectorAll('p, li, em');
  let negrita = document.querySelectorAll('strong');
  let header = document.querySelector('header');

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

  //---------PAGINA EN MODO OSCURO

  function aplicarEstilosPaginaOscuro() {
    if (body) body.style.backgroundColor = "#1a1a1a"; //FONDO PAGINA
    titulos.forEach(t => t.style.color = "#e8e8e8"); //TITULOS (H1.......H6)
    texto.forEach(t => t.style.color = "#e8e8e8"); //TEXTOS (P)
    negrita.forEach(n => n.style.color = "#ffffffff"); //NEGRITA (STRONG)
    if (header) header.style.backgroundImage = "url('../imagenes/fondo oscuro.png')"; //FONDO HEADER
  }

  //PAGINA EN MODO CLARO

  function aplicarEstilosPaginaClaro() {
    if (body) body.style.backgroundColor = "#e8e8e8c8"; //FONDO PAGINA

    titulos.forEach(t => t.style.color = "#2E2D2D"); //TITULOS (H1.......H6)
    texto.forEach(t => t.style.color = "#2E2D2D"); //TEXTOS (P)
    negrita.forEach(n => n.style.color = ""); //NEGRITA (STRONG)
    if (header) header.style.backgroundImage = "url('../imagenes/fondo claro.png')"; //FONDO HEADER
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
