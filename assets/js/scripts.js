const js_icon = document.querySelector('#js_icon');
const container_js = document.querySelector('.container-js');

container_js.addEventListener('click', () => {
  if (js_icon.style.display !== 'none') {
    js_icon.style.animation = 'identifier 2s linear infinite';
    js_icon.href = './sintaxe_e_estrutura_do_javascript.html"';
  }
});