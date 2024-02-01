export default function startModal() {
  const botaoAbir = document.querySelector(`[data-modal="abrir"]`);
  const botaoFechar = document.querySelector(`[data-modal="fechar"]`);
  const conteinerModal = document.querySelector(`[data-conteiner="conteiner"]`);

  function abrirModal(event) {
    event.preventDefault();
    conteinerModal.classList.add("ativo");
  }
  function fecharModal(event) {
    event.preventDefault();
    conteinerModal.classList.remove("ativo");
  }

  function cliqueForaDoModal(event) {
    console.log(event.target);
    if (event.target === this) {
      fecharModal(event);
    }
  }

  botaoAbir.addEventListener("click", abrirModal);
  botaoFechar.addEventListener("click", fecharModal);
  conteinerModal.addEventListener("click", cliqueForaDoModal);
}
