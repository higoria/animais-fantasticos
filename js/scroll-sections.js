export default function startScrollSections() {
  const sectionsDoSite = document.querySelectorAll(".js-scroll");
  const windowMetade = window.innerHeight * 0.4;

  function animationScroll() {
    sectionsDoSite.forEach((sections) => {
      const topoDasSections =
        sections.getBoundingClientRect().top - windowMetade;
      if (topoDasSections < 0) {
        sections.classList.add("ativoScroll");
      } else if (sections.classList.contains("ativoScroll")) {
        sections.classList.remove("ativoScroll");
      }
    });
  }
  animationScroll();
  window.addEventListener("scroll", animationScroll);
}
