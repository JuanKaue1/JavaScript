const navbar_1 = document.querySelector('.navbar_1');
const navbar_2 = document.querySelector('.navbar_2');
const navbar_3 = document.querySelector('.navbar_3');
const navbar_4 = document.querySelector('.navbar_4');
const variaveis_tipos_de_dados = document.querySelector('.variaveis_tipos_de_dados');
const operadores = document.querySelector('.operadores');
const estruturas_de_controle = document.querySelector('.estruturas_de_controle');
const funcoes_e_escopo = document.querySelector('.funcoes_e_escopo');

// navbar
navbar_1.addEventListener('click', () => {
    if (variaveis_tipos_de_dados.style.display !== 'block') {
        variaveis_tipos_de_dados.style.display = 'block';
        operadores.style.display = 'none';
        funcoes_e_escopo.style.display = 'none';
        estruturas_de_controle.style.display = 'none';
        navbar_1.style.color = 'white';
        navbar_2.style.color = 'var(--blue3)';
        navbar_3.style.color = 'var(--blue3)';
        navbar_4.style.color = 'var(--blue3)';
    }
});

navbar_2.addEventListener('click', () => {
    if (operadores.style.display !== 'block') {
        variaveis_tipos_de_dados.style.display = 'none';
        operadores.style.display = 'block';
        funcoes_e_escopo.style.display = 'none';
        estruturas_de_controle.style.display = 'none';
        navbar_1.style.color = 'var(--blue3)';
        navbar_2.style.color = 'white';
        navbar_3.style.color = 'var(--blue3)';
        navbar_4.style.color = 'var(--blue3)';
    }
});

navbar_3.addEventListener('click', () => {
    if (estruturas_de_controle.style.display !== 'block') {
        variaveis_tipos_de_dados.style.display = 'none';
        operadores.style.display = 'none';
        funcoes_e_escopo.style.display = 'none';
        estruturas_de_controle.style.display = 'block';
        navbar_1.style.color = 'var(--blue3)';
        navbar_2.style.color = 'var(--blue3)';
        navbar_3.style.color = 'white';
        navbar_4.style.color = 'var(--blue3)';
    }
});

navbar_4.addEventListener('click', () => {
    if (funcoes_e_escopo.style.display !== 'block') {
        variaveis_tipos_de_dados.style.display = 'none';
        operadores.style.display = 'none';
        funcoes_e_escopo.style.display = 'block';
        estruturas_de_controle.style.display = 'none';
        navbar_1.style.color = 'var(--blue3)';
        navbar_2.style.color = 'var(--blue3)';
        navbar_3.style.color = 'var(--blue3)';
        navbar_4.style.color = 'white';
    }
});


