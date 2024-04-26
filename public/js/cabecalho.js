const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  let cabecalho = document.querySelector('#header');

  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) { //menu ativo
    if (window.scrollY > 0){
      event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else{
      event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
      cabecalho.classList.toggle('rolagem')
    }
  } else { //menu NÃO ativo
    if(window.scrollY == 0){ 
      event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
      cabecalho.classList.toggle('rolagem')
    } else{
      event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


function toggleScroll() {
  const nav = document.getElementById('nav');
  const active = nav.classList.contains('active');

  let cabecalho = document.querySelector('#header');

  if (active) { //Menu Aberto
    
  } else{ //Menu Fechado
  cabecalho.classList.toggle('rolagem', window.scrollY > 0)
  }
}
window.addEventListener("scroll", toggleScroll);

  // MENU ATIVO -------------------------------

const menuItem = document.querySelectorAll('.item-menu')
  function ativarLink(){
    menuItem.forEach((item)=>
      item.classList.remove('ativo')
  )
  this.classList.add('ativo')
  }
  menuItem.forEach((item)=>
    item.addEventListener('click', ativarLink)
)