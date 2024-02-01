export default function startTemaEscuro() {
  const botaoTemaEscuro = document.querySelector(".botaoTemaEscuro");

  function acionarTemaEscuro() {
    document.body.classList.add("temaescuro");
    document.body.classList.toggle("temaclaro");
    if (document.body.classList.contains("temaclaro"));
  }

  botaoTemaEscuro.addEventListener("click", acionarTemaEscuro);
}
