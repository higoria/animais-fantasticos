export default function startFuncionamento() {
  const funcionamento = document.querySelector("[data-tempo]");
  const diasDaSemana = funcionamento.dataset.tempo.split(",").map(Number);
  const HorarioDaSemana = funcionamento.dataset.horario.split(",").map(Number);
  const horarioSpan = document.querySelector(".horario-span");

  const dataAtual = new Date();
  const diaAtual = dataAtual.getDay();
  const horarioAtual = dataAtual.getHours();

  const semanaAberto = diasDaSemana.indexOf(diaAtual) !== -1;

  if (
    horarioAtual >= HorarioDaSemana[0] &&
    horarioAtual < HorarioDaSemana[1] &&
    semanaAberto
  ) {
    horarioSpan.innerText = "aberto";
    horarioSpan.classList.add("aberto");
  } else {
    horarioSpan.innerText = "fechado";
    horarioSpan.classList.remove("aberto");
    horarioSpan.classList.add("fechado");
  }
}
