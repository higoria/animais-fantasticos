// CODIGO DE GALERIA DE IMGS E TEXTO

const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabConteudo = document.querySelectorAll(".js-tabconteudo section");

function activeTab(index) {
  tabConteudo.forEach((section) => {
    section.classList.remove("ativo");
  });
  tabConteudo[index].classList.add("ativo");
}

tabMenu.forEach((itemsLI, index) => {
  itemsLI.addEventListener("click", () => {
    activeTab(index);
  });
});
// FIM CODIGO DE GALERIA DE IMGS E TEXTO

// CODIGO DAS PERGUNTAS
const perguntasFAQ = document.querySelectorAll(".js-accordion dt");
perguntasFAQ[0].classList.add("ativoDD");
const DDperguntas = document.querySelectorAll(".js-accordion dd");
perguntasFAQ[0].nextElementSibling.classList.add("ativoDD");

function acionarPergunta() {
  this.nextElementSibling.classList.toggle("ativoDD");
}

perguntasFAQ.forEach((perguntas) => {
  perguntas.addEventListener("click", acionarPergunta);
});
// fim CODIGO DAS PERGUNTAS

// SCROLL SUAVE
const linksInternos = document.querySelectorAll('.nav-conteiner a[href^="#"]');

function scrollSuave(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href);

  section.scrollIntoView();
  section.scrollIntoView({ block: "start", behavior: "smooth" });
}

linksInternos.forEach((links) => {
  links.addEventListener("click", scrollSuave);
});
// FIM SCROLL SUAVE

// SCROLL 2
const sectionsDoSite = document.querySelectorAll(".js-scroll");
const windowMetade = window.innerHeight * 0.4;

function animationScroll() {
  sectionsDoSite.forEach((sections) => {
    const topoDasSections = sections.getBoundingClientRect().top - windowMetade;
    if (topoDasSections < 0) {
      sections.classList.add("ativoScroll");
    }
  });
}
animationScroll();
window.addEventListener("scroll", animationScroll);
// FIM SCROLL 2

// BOTAO TEMA ESCURO
const botaoTemaEscuro = document.querySelector(".botaoTemaEscuro");

function acionarTemaEscuro() {
  document.body.classList.add("temaescuro");
  document.body.classList.toggle("temaclaro");
  if (document.body.classList.contains("temaclaro"));
}

botaoTemaEscuro.addEventListener("click", acionarTemaEscuro);
// FIM BOTAO TEMA ESCURO
