var root_colors = document.querySelector(":root");
var circle_colors = document.querySelectorAll(".circle");

function back_color(color) {
    root_colors.style.setProperty("--main", color);
}

function ativar_remover(element) {
    circle_colors.forEach(circle => {   
        circle.classList.remove("active");
    });
    element.classList.add("active");
}

circle_colors.forEach(circle => {
    circle.addEventListener("click", () => {
        ativar_remover(circle);
    });
});

function background(back) {

    root_colors.style.setProperty("--bg-color", back);
}



