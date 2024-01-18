// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector("img");
console.log(primeiraImg.offsetTop);

// Retorne a soma da largura de todas as imagens
const todasImgs = document.querySelectorAll("img");
todasImgs.forEach((item) => {
  let resultadoSoma = 0;
  resultadoSoma = resultadoSoma + item.offsetWidth;
  console.log(resultadoSoma);
});

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const linksPagina = document.querySelectorAll("a");

linksPagina.forEach((link) => {
  link.getBoundingClientRect();
  link.width;
  link.Height;
  console.log(link.width, link.Height);
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const tamanhoPagina = window.innerWidth;
console.log(tamanhoPagina);
if (tamanhoPagina < 720) {
  const menu = document.querySelector(".nav-conteiner");
  menu.classList.add("menu-mobile");
  console.log("dispositivo Mobile");
} else {
  console.log("Dispositivo Desktop");
}
