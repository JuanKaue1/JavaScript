const js_icon = document.querySelector('#js_icon');
const container_js = document.querySelector('.container-js');
let isRotating = false;

container_js.addEventListener('click', () => {
  if (isRotating) {
    js_icon.style.animation = 'none';
    isRotating = false;
  } else {
    js_icon.style.animation = 'rotateAnimation 2s linear infinite';
    isRotating = true;
    window.location.href = './sintaxe_e_estrutura_do_javascript.html'; // Redireciona para outra página
  }
});
