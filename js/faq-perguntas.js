export default function startFaqPerguntas() {
  const perguntasFAQ = document.querySelectorAll(".js-accordion dt");
  perguntasFAQ[0].classList.add("ativoDD");

  perguntasFAQ[0].nextElementSibling.classList.add("ativoDD");

  function acionarPergunta() {
    this.nextElementSibling.classList.toggle("ativoDD");
  }

  perguntasFAQ.forEach((perguntas) => {
    perguntas.addEventListener("click", acionarPergunta);
  });
}
