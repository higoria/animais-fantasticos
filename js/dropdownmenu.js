export default function startDropdownMenu() {
  const dropDownMenu = document.querySelectorAll('[data-dropdown]');

  dropDownMenu.forEach((itens) => {
    itens.addEventListener('toutchstart', handleClick);
    itens.addEventListener('click', handleClick);
  });
  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle('active');
    outsideClick(this, () => {
      this.classList.remove('active');
    });
  }

  function outsideClick(element, callback) {
    const html = document.documentElement;
    setTimeout(() => {
      html.addEventListener('click', handleOutSideClick);
    });
    function handleOutSideClick(event) {
      if (!element.contains(event.target)) {
        html.removeEventListener('click', handleOutSideClick);
        callback();
      }
    }
  }
}
