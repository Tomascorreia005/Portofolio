/* ABRIR E FECHAR DETALHES DOS PROJETOS */

document.querySelectorAll('.detailbtn').forEach(button=>button.addEventListener('click',()=>{
  const expanded=button.getAttribute('aria-expanded')==='true';
  button.setAttribute('aria-expanded',String(!expanded));
  button.nextElementSibling.classList.toggle('open',!expanded);
  button.querySelector('span').textContent=expanded?'+':'−';
}
));
