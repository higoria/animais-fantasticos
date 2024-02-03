export default function startMenuMobile() {
  const btn = document.querySelector('[data-menu="button"]');
  const listaNav = document.querySelector('[data-menu="lista-ul"]');

  btn.addEventListener("click", () => {
    listaNav.classList.toggle("ativo");
    btn.classList.toggle("ativo");
  });
}
