var Animais = /** @class */ (function () {
    function Animais(nome) {
        this.nome = nome;
    }
    Animais.prototype.recuperNome = function () {
        return this.nome;
    };
    return Animais;
}());
var animais = new Animais('passaro');
console.log(animais.recuperNome());
console.log(animais.nome);
