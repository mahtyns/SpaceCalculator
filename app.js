var grupoTarjetas1 = ["🍕", "🍔", "🍟", "🌭", "🌯", "🥙", "🌮", "🥐" ];

var grupoTarjetas2 = ["🌯", "🥙", "🌮", "🥐" ];

var grupoTarjetas3 = ["🥓", "🍖", "🥩", "🍤" ];

var totalTarjetas = grupoTarjetas1.concat(grupoTarjetas1);



function sortcarts() {

    var table = document.getElementById("table");
    table.innerHTML = "";

    totalTarjetas.forEach(function(element) {
    var card = document.createElement("div");
    card.innerHTML = "<div class='tarjeta' data-valor='" + element + "'>" + 
            "<div class='tarjeta-contenido'>" + element + "</div></div>";
    table.appendChild(card);


    });
}
function descubrir() {
    var descubiertas;
    var totalDescubiertas = document.querySelectorAll(".descubrir:not(.acertada)")

    console.log(this.getAttribute("class"));

    if (totalDescubiertas.length > 1) {
        return;
    }
    this.classList.toggle('descubrir');

    descubiertas = document.querySelectorAll(".descubrir:not(.acertada)");
    if (descubiertas.length < 2) {
        return;
    }

    compare(descubiertas);
}
    

function compare(cardsToCompare) {
if (cardsToCompare[0].dataset.valor === cardsToCompare[1].dataset.valor) {
        acierto(cardsToCompare);

    }
    else {
        error(cardsToCompare);
    }
}

function acierto(cardsCompared) {
 cardsCompared.forEach(function(element) {
     element.classList.add("acertada");
 })
}

function error(cardsCompared) {
cardsCompared.forEach(function(element){
    element.classList.add("error");
})

setTimeout(
cardsCompared.forEach(function(element){
    element.classList.remove("descubrir");
}), cardsCompared.forEach(function(element){
    element.classList.remove("error"), 1000
}));


    /*
cardsCompared.forEach(function(element){
    element.classList.remove("descubrir");
})*/
}

sortcarts();

document.querySelectorAll(".tarjeta").forEach(function(element){
    element.addEventListener("click", descubrir);

})

