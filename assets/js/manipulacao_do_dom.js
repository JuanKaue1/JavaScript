const variaveis_tipos_de_dados = document.querySelector('.variaveis_tipos_de_dados');

const operadores = document.querySelector('.operadores');

const funcoes_e_escopo = document.querySelector('.funcoes_e_escopo');

const estruturas_de_controle = document.querySelector('.estruturas_de_controle');

const elementos = document.querySelector('.elementos');

const classes = document.querySelector('.classes');

const eventos = document.querySelector('.eventos');

const navbar_1 = document.querySelector('.navbar_1');
const navbar_2 = document.querySelector('.navbar_2');
const navbar_3 = document.querySelector('.navbar_3');
const navbar_4 = document.querySelector('.navbar_4');
const navbar_5 = document.querySelector('.navbar_5');
const navbar_6 = document.querySelector('.navbar_6');
const navbar_7 = document.querySelector('.navbar_7');

// navbar
navbar_1.addEventListener('click', () => {
    if (variaveis_tipos_de_dados.style.display !== 'block') {
        
        variaveis_tipos_de_dados.style.display = 'block';
        
        operadores.style.display = 'none';
        
        funcoes_e_escopo.style.display = 'none';
        
        estruturas_de_controle.style.display = 'none';
        
        elementos.style.display = 'none';
        
        classes.style.display = 'none';
        
        eventos.style.display = 'none';
        
        navbar_1.style.color = 'white';
        navbar_2.style.color = 'var(--blue3)';
        navbar_3.style.color = 'var(--blue3)';
        navbar_4.style.color = 'var(--blue3)';
        navbar_5.style.color = 'var(--blue3)';
        navbar_6.style.color = 'var(--blue3)';
        navbar_7.style.color = 'var(--blue3)';

    }
});

navbar_2.addEventListener('click', () => {
    if (operadores.style.display !== 'block') {
        
        variaveis_tipos_de_dados.style.display = 'none';
        
        operadores.style.display = 'block';
        
        funcoes_e_escopo.style.display = 'none';
        
        estruturas_de_controle.style.display = 'none';
        
        elementos.style.display = 'none';
        
        classes.style.display = 'none';
        
        eventos.style.display = 'none';
        
        navbar_1.style.color = 'var(--blue3)';
        navbar_2.style.color = 'white';
        navbar_3.style.color = 'var(--blue3)';
        navbar_4.style.color = 'var(--blue3)';
        navbar_5.style.color = 'var(--blue3)';
        navbar_6.style.color = 'var(--blue3)';
        navbar_7.style.color = 'var(--blue3)';

    }
});

navbar_3.addEventListener('click', () => {
    if (funcoes_e_escopo.style.display !== 'block') {
        
        variaveis_tipos_de_dados.style.display = 'none';
        
        operadores.style.display = 'none';
        
        funcoes_e_escopo.style.display = 'block';
        
        estruturas_de_controle.style.display = 'none';
        
        elementos.style.display = 'none';
        
        classes.style.display = 'none';
        
        eventos.style.display = 'none';
        
        navbar_1.style.color = 'var(--blue3)';
        navbar_2.style.color = 'var(--blue3)';
        navbar_3.style.color = 'white';
        navbar_4.style.color = 'var(--blue3)';
        navbar_5.style.color = 'var(--blue3)';
        navbar_6.style.color = 'var(--blue3)';
        navbar_7.style.color = 'var(--blue3)';

    }
});

navbar_4.addEventListener('click', () => {
    if (estruturas_de_controle.style.display !== 'block') {
        
        variaveis_tipos_de_dados.style.display = 'none';
        
        operadores.style.display = 'none';
        
        funcoes_e_escopo.style.display = 'none';
        
        estruturas_de_controle.style.display = 'block';
        
        elementos.style.display = 'none';
        
        classes.style.display = 'none';
        
        eventos.style.display = 'none';
        
        navbar_1.style.color = 'var(--blue3)';
        navbar_2.style.color = 'var(--blue3)';
        navbar_3.style.color = 'var(--blue3)';
        navbar_4.style.color = 'white';
        navbar_5.style.color = 'var(--blue3)';
        navbar_6.style.color = 'var(--blue3)';
        navbar_7.style.color = 'var(--blue3)';

    }
});

navbar_5.addEventListener('click', () => {
    if (elementos.style.display !== 'block') {
        
        variaveis_tipos_de_dados.style.display = 'none';
        
        operadores.style.display = 'none';
        
        funcoes_e_escopo.style.display = 'none';
        
        estruturas_de_controle.style.display = 'none';
        
        elementos.style.display = 'block';
        
        classes.style.display = 'none';
        
        eventos.style.display = 'none';
        
        navbar_1.style.color = 'var(--blue3)';
        navbar_2.style.color = 'var(--blue3)';
        navbar_3.style.color = 'var(--blue3)';
        navbar_4.style.color = 'var(--blue3)';
        navbar_5.style.color = 'white';
        navbar_6.style.color = 'var(--blue3)';
        navbar_7.style.color = 'var(--blue3)';
    }
});

navbar_6.addEventListener('click', () => {
    if (classes.style.display !== 'block') {
        
        variaveis_tipos_de_dados.style.display = 'none';
        
        operadores.style.display = 'none';
        
        funcoes_e_escopo.style.display = 'none';
        
        estruturas_de_controle.style.display = 'none';
        
        elementos.style.display = 'none';
        
        classes.style.display = 'block';
        
        eventos.style.display = 'none';
        
        navbar_1.style.color = 'var(--blue3)';
        navbar_2.style.color = 'var(--blue3)';
        navbar_3.style.color = 'var(--blue3)';
        navbar_4.style.color = 'var(--blue3)';
        navbar_5.style.color = 'var(--blue3)';
        navbar_6.style.color = 'white';
        navbar_7.style.color = 'var(--blue3)';

    }
});
navbar_7.addEventListener('click', () => {
    if (eventos.style.display !== 'block') {
        
        variaveis_tipos_de_dados.style.display = 'none';
        
        operadores.style.display = 'none';
        
        funcoes_e_escopo.style.display = 'none';
        
        estruturas_de_controle.style.display = 'none';
        
        elementos.style.display = 'none';
        
        classes.style.display = 'none';
        
        eventos.style.display = 'block';
        
        navbar_1.style.color = 'var(--blue3)';
        navbar_2.style.color = 'var(--blue3)';
        navbar_3.style.color = 'var(--blue3)';
        navbar_4.style.color = 'var(--blue3)';
        navbar_5.style.color = 'var(--blue3)';
        navbar_6.style.color = 'var(--blue3)';
        navbar_7.style.color = 'white';

    }
});

