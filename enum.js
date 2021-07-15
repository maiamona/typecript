var Cor;
(function (Cor) {
    Cor[Cor["Amarelo"] = 0] = "Amarelo";
    Cor[Cor["Vermelho"] = 1] = "Vermelho";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
console.log(Cor.Amarelo);
var verde;
(function (verde) {
    verde[verde["Amarelo"] = 1] = "Amarelo";
    verde[verde["Vermelho"] = 2] = "Vermelho";
    verde[verde["Azul"] = 3] = "Azul";
})(verde || (verde = {}));
console.log(verde.Amarelo);
console.log(verde[1]);
