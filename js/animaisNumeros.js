export default function startAnimaisNumeros() {
  function animaNumeros() {
    const spanNumeros = document.querySelectorAll("[data-numero]");
    spanNumeros.forEach((numeros) => {
      const total = +numeros.innerText;
      const incremento = Math.floor(total / 100);

      let i = 0;
      const timer = setInterval(() => {
        i += incremento;
        numeros.innerText = i;
        if (i > total) {
          clearInterval(timer);
        }
      }, 40 * Math.random());
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativoScroll")) {
      observer.disconnect();
      animaNumeros();
    }
  }

  const observerAlvo = document.querySelector(".numeros");
  const observer = new MutationObserver(handleMutation);
  observer.observe(observerAlvo, { attributes: true });
}
