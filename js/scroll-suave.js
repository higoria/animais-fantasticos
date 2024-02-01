export default function startCrollSuave() {
  const linksInternos = document.querySelectorAll(
    '.nav-conteiner a[href^="#"]'
  );

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
}
