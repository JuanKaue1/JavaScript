const js_icon = document.querySelector('#js_icon_a');
const container_js = document.querySelector('.container-js');
let isRotating = false;

container_js.addEventListener('click', () => {
  if (isRotating) {
    js_icon.style.animation = 'none';
    isRotating = false;
  } else {
    js_icon.style.animation = 'rotateAnimation 2s linear infinite';
    isRotating = true;
  }
});






function outerFunction() {
  let outerVariable = 'Valor externo';

  function innerFunction() {
    console.log(outerVariable); // Acessa a variável definida no escopo superior
  }

  innerFunction();
}

outerFunction(); // Saída: 'Valor externo'




let globalVariable = 'Valor global';

function globalFunction() {
  console.log(globalVariable); // Acessa a variável global
}

globalFunction(); // Saída: 'Valor global']

function localFunction() {
  let localVariable = 'Valor local';
  console.log(localVariable); // Acessa a variável local
}

localFunction(); // Saída: 'Valor local'
console.log(localVariable); // Erro: localVariable não está definido