const header = document.querySelector("header");
const button = document.querySelector(".scroll-btn i");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 200)
    button.classList.toggle("fixed", window.scrollY > 200)
});

/* side bar*/
let menu = document.querySelector("#menu");
let nav = document.querySelector(".navlist");
menu.onclick = function () {
    menu.classList.toggle("bx-x");
    nav.classList.toggle("open");
};


window.onscroll = function () {
    menu.classList.remove("bx-x");
    nav.classList.remove("open");
};


/* scroll reveal */
const sr = ScrollReveal({

    distance: '40px',
    duration: 2050,
    delay: 300,
    reset: true
})

sr.reveal('.home-text', { origin: 'top' });
sr.reveal('.about-img, .service-item, .about-text', { origin: 'bottom' });
sr.reveal('.about-img h2, .text-center, .right-contact h2', { origin: 'top' });
sr.reveal('.left-contact', { origin: 'left' });
sr.reveal('.right-contact', { origin: 'right' });
sr.reveal('.end-section', { origin: 'bottom' });


/* efeito maquina de escrever*/
const textos = ["VATION", "GLOBAL", "TECH"];
let index = 0;
const intervalo = 2000; // intervalo entre cada texto em milissegundos

function escreverTexto() {
    const textoElemento = document.getElementById("texto");
    textoElemento.textContent = textos[index].slice(0, textoElemento.textContent.length + 1);

    if (textoElemento.textContent === textos[index]) {
        index++;
        if (index === textos.length) {
            index = 0;
        }
    }

    setTimeout(escreverTexto, intervalo);
}

escreverTexto();