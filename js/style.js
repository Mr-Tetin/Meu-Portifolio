(function(){
  var reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduzMovimento) return;

  var hero = document.getElementById('hero');
  var heroSpacer = hero.parentElement;
  var nav = document.getElementById('nav');
  var ticking = false;

  function atualizar(){
    var distancia = heroSpacer.offsetHeight - window.innerHeight;
    var progresso = Math.min(Math.max(window.scrollY / distancia, 0), 1);

    var escala = 1 + progresso * 0.5;
    var opacidade = 1 - progresso * 1.15;
    var desfoque = progresso * 8;
    var deslocaY = progresso * -60;

    hero.style.transform = 'scale(' + escala + ') translateY(' + deslocaY + 'px)';
    hero.style.opacity = Math.max(opacidade, 0);
    hero.style.filter = 'blur(' + desfoque + 'px)';

    if(progresso > 0.75){
      nav.classList.add('visivel');
    } else {
      nav.classList.remove('visivel');
    }

    ticking = false;
  }

  window.addEventListener('scroll', function(){
    if(!ticking){
      requestAnimationFrame(atualizar);
      ticking = true;
    }
  }, { passive: true });

  atualizar();
})();