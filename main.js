/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/animaisNumeros.js":
/*!******************************!*\
  !*** ./js/animaisNumeros.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startAnimaisNumeros)\n/* harmony export */ });\nfunction startAnimaisNumeros() {\r\n  function animaNumeros() {\r\n    const spanNumeros = document.querySelectorAll(\"[data-numero]\");\r\n    spanNumeros.forEach((numeros) => {\r\n      const total = +numeros.innerText;\r\n      const incremento = Math.floor(total / 100);\r\n\r\n      let i = 0;\r\n      const timer = setInterval(() => {\r\n        i += incremento;\r\n        numeros.innerText = i;\r\n        if (i > total) {\r\n          clearInterval(timer);\r\n        }\r\n      }, 40 * Math.random());\r\n    });\r\n  }\r\n\r\n  function handleMutation(mutation) {\r\n    if (mutation[0].target.classList.contains(\"ativoScroll\")) {\r\n      observer.disconnect();\r\n      animaNumeros();\r\n    }\r\n  }\r\n\r\n  const observerAlvo = document.querySelector(\".numeros\");\r\n  const observer = new MutationObserver(handleMutation);\r\n  observer.observe(observerAlvo, { attributes: true });\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/animaisNumeros.js?");

/***/ }),

/***/ "./js/bitcoin.js":
/*!***********************!*\
  !*** ./js/bitcoin.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startBitCoin)\n/* harmony export */ });\nfunction startBitCoin() {}\n\nconst spanBTC = document.querySelector(\".bitcoin\");\n\nasync function apiBtc() {\n  try {\n    const btcResponse = await fetch(\"https://blockchain.info/ticker\");\n    const btcJSON = await btcResponse.json();\n    spanBTC.innerText = (100 / btcJSON.BRL.buy).toFixed(5);\n  } catch (erro) {\n    console.log(erro);\n  }\n}\napiBtc();\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/bitcoin.js?");

/***/ }),

/***/ "./js/dropdownmenu.js":
/*!****************************!*\
  !*** ./js/dropdownmenu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startDropdownMenu)\n/* harmony export */ });\nfunction startDropdownMenu() {\r\n  const dropDownMenu = document.querySelectorAll('[data-dropdown]');\r\n\r\n  dropDownMenu.forEach((itens) => {\r\n    itens.addEventListener('toutchstart', handleClick);\r\n    itens.addEventListener('click', handleClick);\r\n  });\r\n  function handleClick(event) {\r\n    event.preventDefault();\r\n    this.classList.toggle('active');\r\n    outsideClick(this, () => {\r\n      this.classList.remove('active');\r\n    });\r\n  }\r\n\r\n  function outsideClick(element, callback) {\r\n    const html = document.documentElement;\r\n    setTimeout(() => {\r\n      html.addEventListener('click', handleOutSideClick);\r\n    });\r\n    function handleOutSideClick(event) {\r\n      if (!element.contains(event.target)) {\r\n        html.removeEventListener('click', handleOutSideClick);\r\n        callback();\r\n      }\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/dropdownmenu.js?");

/***/ }),

/***/ "./js/faq-perguntas.js":
/*!*****************************!*\
  !*** ./js/faq-perguntas.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startFaqPerguntas)\n/* harmony export */ });\nfunction startFaqPerguntas() {\n  const perguntasFAQ = document.querySelectorAll(\".js-accordion dt\");\n  perguntasFAQ[0].classList.add(\"ativoDD\");\n\n  perguntasFAQ[0].nextElementSibling.classList.add(\"ativoDD\");\n\n  function acionarPergunta() {\n    this.nextElementSibling.classList.toggle(\"ativoDD\");\n  }\n\n  perguntasFAQ.forEach((perguntas) => {\n    perguntas.addEventListener(\"click\", acionarPergunta);\n  });\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/faq-perguntas.js?");

/***/ }),

/***/ "./js/funcionamento.js":
/*!*****************************!*\
  !*** ./js/funcionamento.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startFuncionamento)\n/* harmony export */ });\nfunction startFuncionamento() {\r\n  const funcionamento = document.querySelector(\"[data-tempo]\");\r\n  const diasDaSemana = funcionamento.dataset.tempo.split(\",\").map(Number);\r\n  const HorarioDaSemana = funcionamento.dataset.horario.split(\",\").map(Number);\r\n  const horarioSpan = document.querySelector(\".horario-span\");\r\n\r\n  const dataAtual = new Date();\r\n  const diaAtual = dataAtual.getDay();\r\n  const horarioAtual = dataAtual.getHours();\r\n\r\n  const semanaAberto = diasDaSemana.indexOf(diaAtual) !== -1;\r\n\r\n  if (\r\n    horarioAtual >= HorarioDaSemana[0] &&\r\n    horarioAtual < HorarioDaSemana[1] &&\r\n    semanaAberto\r\n  ) {\r\n    horarioSpan.innerText = \"aberto\";\r\n    horarioSpan.classList.add(\"aberto\");\r\n  } else {\r\n    horarioSpan.innerText = \"fechado\";\r\n    horarioSpan.classList.remove(\"aberto\");\r\n    horarioSpan.classList.add(\"fechado\");\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/funcionamento.js?");

/***/ }),

/***/ "./js/imgs-textos.js":
/*!***************************!*\
  !*** ./js/imgs-textos.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startTabsImgEtexto)\n/* harmony export */ });\nfunction startTabsImgEtexto() {\r\n  const tabMenu = document.querySelectorAll(\".js-tabmenu li\");\r\n  const tabConteudo = document.querySelectorAll(\".js-tabconteudo section\");\r\n\r\n  function activeTab(index) {\r\n    tabConteudo.forEach((section) => {\r\n      section.classList.remove(\"ativo\");\r\n    });\r\n    const direcao = tabConteudo[index].dataset.anime;\r\n    tabConteudo[index].classList.add(\"ativo\", direcao);\r\n  }\r\n\r\n  tabMenu.forEach((itemsLI, index) => {\r\n    itemsLI.addEventListener(\"click\", () => {\r\n      activeTab(index);\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/imgs-textos.js?");

/***/ }),

/***/ "./js/menuMobile.js":
/*!**************************!*\
  !*** ./js/menuMobile.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startMenuMobile)\n/* harmony export */ });\nfunction startMenuMobile() {\r\n  const btn = document.querySelector('[data-menu=\"button\"]');\r\n  const listaNav = document.querySelector('[data-menu=\"lista-ul\"]');\r\n\r\n  btn.addEventListener(\"click\", () => {\r\n    listaNav.classList.toggle(\"ativo\");\r\n    btn.classList.toggle(\"ativo\");\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/menuMobile.js?");

/***/ }),

/***/ "./js/modal.js":
/*!*********************!*\
  !*** ./js/modal.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startModal)\n/* harmony export */ });\nfunction startModal() {\r\n  const botaoAbir = document.querySelector(`[data-modal=\"abrir\"]`);\r\n  const botaoFechar = document.querySelector(`[data-modal=\"fechar\"]`);\r\n  const conteinerModal = document.querySelector(`[data-conteiner=\"conteiner\"]`);\r\n\r\n  function abrirModal(event) {\r\n    event.preventDefault();\r\n    conteinerModal.classList.add(\"ativo\");\r\n  }\r\n  function fecharModal(event) {\r\n    event.preventDefault();\r\n    conteinerModal.classList.remove(\"ativo\");\r\n  }\r\n\r\n  function cliqueForaDoModal(event) {\r\n    console.log(event.target);\r\n    if (event.target === this) {\r\n      fecharModal(event);\r\n    }\r\n  }\r\n\r\n  botaoAbir.addEventListener(\"click\", abrirModal);\r\n  botaoFechar.addEventListener(\"click\", fecharModal);\r\n  conteinerModal.addEventListener(\"click\", cliqueForaDoModal);\r\n}\r\nconst agr = new Date();\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modal.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll-suave.js */ \"./js/scroll-suave.js\");\n/* harmony import */ var _scroll_sections_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll-sections.js */ \"./js/scroll-sections.js\");\n/* harmony import */ var _imgs_textos_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs-textos.js */ \"./js/imgs-textos.js\");\n/* harmony import */ var _faq_perguntas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faq-perguntas.js */ \"./js/faq-perguntas.js\");\n/* harmony import */ var _tema_escuro_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tema-escuro.js */ \"./js/tema-escuro.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .//modal.js */ \"./js/modal.js\");\n/* harmony import */ var _tooltip_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tooltip.js */ \"./js/tooltip.js\");\n/* harmony import */ var _dropdownmenu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dropdownmenu.js */ \"./js/dropdownmenu.js\");\n/* harmony import */ var _menuMobile_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menuMobile.js */ \"./js/menuMobile.js\");\n/* harmony import */ var _animaisNumeros_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./animaisNumeros.js */ \"./js/animaisNumeros.js\");\n/* harmony import */ var _funcionamento_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./funcionamento.js */ \"./js/funcionamento.js\");\n/* harmony import */ var _bitcoin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bitcoin.js */ \"./js/bitcoin.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_scroll_sections_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_imgs_textos_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_faq_perguntas_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_tema_escuro_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modal_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_tooltip_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_dropdownmenu_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_menuMobile_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_animaisNumeros_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n(0,_funcionamento_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\r\n(0,_bitcoin_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])();\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/script.js?");

/***/ }),

/***/ "./js/scroll-sections.js":
/*!*******************************!*\
  !*** ./js/scroll-sections.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startScrollSections)\n/* harmony export */ });\nfunction startScrollSections() {\r\n  const sectionsDoSite = document.querySelectorAll(\".js-scroll\");\r\n  const windowMetade = window.innerHeight * 0.4;\r\n\r\n  function animationScroll() {\r\n    sectionsDoSite.forEach((sections) => {\r\n      const topoDasSections =\r\n        sections.getBoundingClientRect().top - windowMetade;\r\n      if (topoDasSections < 0) {\r\n        sections.classList.add(\"ativoScroll\");\r\n      } else if (sections.classList.contains(\"ativoScroll\")) {\r\n        sections.classList.remove(\"ativoScroll\");\r\n      }\r\n    });\r\n  }\r\n  animationScroll();\r\n  window.addEventListener(\"scroll\", animationScroll);\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/scroll-sections.js?");

/***/ }),

/***/ "./js/scroll-suave.js":
/*!****************************!*\
  !*** ./js/scroll-suave.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startCrollSuave)\n/* harmony export */ });\nfunction startCrollSuave() {\r\n  const linksInternos = document.querySelectorAll(\r\n    '.nav-conteiner a[href^=\"#\"]'\r\n  );\r\n\r\n  function scrollSuave(event) {\r\n    event.preventDefault();\r\n    const href = event.currentTarget.getAttribute(\"href\");\r\n    const section = document.querySelector(href);\r\n\r\n    section.scrollIntoView();\r\n    section.scrollIntoView({ block: \"start\", behavior: \"smooth\" });\r\n  }\r\n\r\n  linksInternos.forEach((links) => {\r\n    links.addEventListener(\"click\", scrollSuave);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/scroll-suave.js?");

/***/ }),

/***/ "./js/tema-escuro.js":
/*!***************************!*\
  !*** ./js/tema-escuro.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startTemaEscuro)\n/* harmony export */ });\nfunction startTemaEscuro() {\r\n  const botaoTemaEscuro = document.querySelector(\".botaoTemaEscuro\");\r\n\r\n  function acionarTemaEscuro() {\r\n    document.body.classList.add(\"temaescuro\");\r\n    document.body.classList.toggle(\"temaclaro\");\r\n    if (document.body.classList.contains(\"temaclaro\"));\r\n  }\r\n\r\n  botaoTemaEscuro.addEventListener(\"click\", acionarTemaEscuro);\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/tema-escuro.js?");

/***/ }),

/***/ "./js/tooltip.js":
/*!***********************!*\
  !*** ./js/tooltip.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ startToolTip)\n/* harmony export */ });\nfunction startToolTip() {\r\n  const tooltips = document.querySelectorAll(\"[data-tooltip]\");\r\n\r\n  tooltips.forEach((itens) => {\r\n    itens.addEventListener(\"mouseover\", ativarMouse);\r\n  });\r\n\r\n  function ativarMouse(event) {\r\n    const ToolTipBox = criarToolTip(this);\r\n\r\n    onMouseMove.ToolTipBox = ToolTipBox;\r\n    ativarMouseLeave.ToolTipBox = ToolTipBox;\r\n    ativarMouseLeave.element = this;\r\n    this.addEventListener(\"mouseleave\", ativarMouseLeave);\r\n    this.addEventListener(\"mousemove\", onMouseMove);\r\n  }\r\n\r\n  const onMouseMove = {\r\n    handleEvent(event) {\r\n      this.ToolTipBox.style.top = event.pageY + 20 + \"px\";\r\n      this.ToolTipBox.style.left = event.pageX + 20 + \"px\";\r\n    },\r\n  };\r\n\r\n  const ativarMouseLeave = {\r\n    ToolTipBox: \"\",\r\n    element: \"\",\r\n    handleEvent() {\r\n      this.ToolTipBox.remove();\r\n      this.element.removeEventListener(\"mouseleave\", ativarMouseLeave);\r\n    },\r\n  };\r\n\r\n  function criarToolTip(element) {\r\n    const ToolTipBox = document.createElement(\"div\");\r\n    const texto = element.getAttribute(\"aria-label\");\r\n    ToolTipBox.classList.add(\"tooltip\");\r\n    ToolTipBox.innerText = texto;\r\n    document.body.appendChild(ToolTipBox);\r\n    return ToolTipBox;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/tooltip.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;