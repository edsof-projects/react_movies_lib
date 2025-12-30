import { scrollSmoot } from './scrollSmoot.js';
import { scrollToTop } from './scrollsToTop.js'

const btnVoltar = document.getElementById('area__imgVoltar');

//Quando começar a rolar a pagina mostrar o botao de voltar ao topo
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    btnVoltar.classList.add("showBtnVoltar");
  } else {
    btnVoltar.classList.remove("showBtnVoltar");
  }
});

//Quando clicar no botao de voltar ao topo ir para o topo lentamente
btnVoltar.addEventListener("click", () => {
  scrollToTop(5000); // tempo da animação em ms (aqui: 800ms)
});

// Efeito ao clicar em um link do nav
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const alvo = document.querySelector(this.getAttribute('href'));
    if (!alvo) return; // evita erro se o alvo não existir

    const destinoY = alvo.getBoundingClientRect().top + window.pageYOffset - 70; // ajuste do header fixo

    scrollSmoot(destinoY, 2500);
    /* 2500ms = 2.5 segundos (bem lento)
      Valor	Velocidade
      800	rápido
      1200	suave
      2000	lento
      2500	bem lento
      3500	muito lento
      5000	super cinematográfico
    */
  });
});