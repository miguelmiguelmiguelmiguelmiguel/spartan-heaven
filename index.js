let toggle = document.getElementById('modo');

let tema = document.querySelector('.slider #tema'); // TEXTO DE "CLARO" Y "OSCURO"

// Cuando cambie el estado del checkbox
toggle.addEventListener('change', () => {
  if (toggle.checked) {
    tema.textContent = "Oscuro"; // si está activado, pone "Oscuro"
    tema.style.left = "-50%";
    tema.style.color = "#1a1918";
    
  } else {
    tema.textContent = "Claro";   // si está desactivado, pone "Claro"
    tema.style.left = "5%"; 
    tema.style.color = "#e0e0e0";    
  }
});

//-----CAMBIAR COLORES--------

let body = document.body;
let titulos = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
let texto = document.querySelectorAll('p');
let negrita = document.querySelectorAll('strong');

toggle.addEventListener('change', () => {
  if (toggle.checked) { // Modo oscuro
    body.style.backgroundColor = "#1a1a1a"; //FONDO
    titulos.forEach(titulo => {titulo.style.color = "#f2f6ff";}); //COLOR DE TITULOS (H1....H6)
    texto.forEach(texto => {texto.style.color = "#ffffffff";});  //COLOR DE TEXTO (P)
    negrita.forEach(negrita => {negrita.style.color = "#ffffff";}); //COLOR DE STRONG (STRONG)

  }
  else { // Modo claro
    body.style.backgroundColor = "#f2f6ff"; //FONDO
    titulos.forEach(titulo => {titulo.style.color = "#323232a4";}); //COLOR DE TITULOS (H1....H6)
    texto.forEach(texto => {texto.style.color = "#ff0000ff";}); //COLOR DE TEXTO (P)
    negrita.forEach(negrita => {negrita.style.color = "";}); //COLOR DE STRONG (STRONG)

  }
});