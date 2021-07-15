"use strict";
var Generics = /** @class */ (function () {
    function Generics(nome) {
        this.nome = nome;
    }
    Generics.prototype.recuperarNome = function () {
        return this.nome;
    };
    Generics.prototype.recuperarTipo = function () {
        return typeof (this.nome);
    };
    return Generics;
}());
var generico = new Generics(400);
console.log(generico.recuperarNome());
console.log(generico.recuperarTipo());
