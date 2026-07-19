const menu = document.getElementById("menuMobile");
const fundo = document.getElementById("fundoMenu");
const abrir = document.getElementById("menuToggle");
const fechar = document.getElementById("fecharMenu");

// Abrir menu
abrir.addEventListener("click", () => {
    menu.classList.add("ativo");
    fundo.classList.add("ativo");
});

// Fechar pelo X
fechar.addEventListener("click", () => {
    menu.classList.remove("ativo");
    fundo.classList.remove("ativo");
});

// Fechar clicando no fundo
fundo.addEventListener("click", () => {
    menu.classList.remove("ativo");
    fundo.classList.remove("ativo");
});

// Fechar ao clicar em um link
document.querySelectorAll(".menu-mobile a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("ativo");
        fundo.classList.remove("ativo");
    });
});

const cards = document.querySelectorAll(".card-avaliacao");
const nota = document.querySelector(".nota");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            nota.classList.add("ativo");

            cards.forEach((card, index)=>{

                setTimeout(()=>{

                    card.classList.add("ativo");

                }, index * 200);

            });

        }

    });

},{threshold:0.3});

observer.observe(document.querySelector("#avaliacoes"));

const contador = document.getElementById("contador");

let iniciou = false;

const observerContador = new IntersectionObserver((entries) => {

    if(entries[0].isIntersecting && !iniciou){

        iniciou = true;

        let numero = 0;
        const alvo = 387;

        const intervalo = setInterval(() => {

            numero++;

            contador.innerHTML = "+" + numero;

            if(numero >= alvo){
                clearInterval(intervalo);
            }

        },5);

    }

});

observerContador.observe(document.querySelector("#avaliacoes"));

const contadorAlunos = document.getElementById("contador-alunos");
const contadorAnos = document.getElementById("contador-anos");

let iniciouSobre = false;

const observerSobre = new IntersectionObserver((entries) => {

    if (entries[0].isIntersecting && !iniciouSobre) {

        iniciouSobre = true;

        animarNumero(contadorAlunos, 500, "+");
        animarNumero(contadorAnos, 3, "+");

    }

}, { threshold: 0.4 });

observerSobre.observe(document.querySelector("#sobre"));

function animarNumero(elemento, valorFinal, prefixo = "") {

    let valor = 0;

    const incremento = Math.ceil(valorFinal / 50);

    const intervalo = setInterval(() => {

        valor += incremento;

        if (valor >= valorFinal) {
            valor = valorFinal;
            clearInterval(intervalo);
        }

        elemento.innerHTML = `${prefixo}${valor}`;

    }, 30);

}