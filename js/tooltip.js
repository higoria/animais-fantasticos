export default function startToolTip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  tooltips.forEach((itens) => {
    itens.addEventListener("mouseover", ativarMouse);
  });

  function ativarMouse(event) {
    const ToolTipBox = criarToolTip(this);

    onMouseMove.ToolTipBox = ToolTipBox;
    ativarMouseLeave.ToolTipBox = ToolTipBox;
    ativarMouseLeave.element = this;
    this.addEventListener("mouseleave", ativarMouseLeave);
    this.addEventListener("mousemove", onMouseMove);
  }

  const onMouseMove = {
    handleEvent(event) {
      this.ToolTipBox.style.top = event.pageY + 20 + "px";
      this.ToolTipBox.style.left = event.pageX + 20 + "px";
    },
  };

  const ativarMouseLeave = {
    ToolTipBox: "",
    element: "",
    handleEvent() {
      this.ToolTipBox.remove();
      this.element.removeEventListener("mouseleave", ativarMouseLeave);
    },
  };

  function criarToolTip(element) {
    const ToolTipBox = document.createElement("div");
    const texto = element.getAttribute("aria-label");
    ToolTipBox.classList.add("tooltip");
    ToolTipBox.innerText = texto;
    document.body.appendChild(ToolTipBox);
    return ToolTipBox;
  }
}
