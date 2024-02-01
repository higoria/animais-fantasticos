export default function startTabsImgEtexto() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabConteudo = document.querySelectorAll(".js-tabconteudo section");

  function activeTab(index) {
    tabConteudo.forEach((section) => {
      section.classList.remove("ativo");
    });
    const direcao = tabConteudo[index].dataset.anime;
    tabConteudo[index].classList.add("ativo", direcao);
  }

  tabMenu.forEach((itemsLI, index) => {
    itemsLI.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
