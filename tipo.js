var verdadeiro; //falso ou verdadeiro
var Numero; // qualquer tipo numerico
var string; // cadeia de caracteres
var qualquer; // qualquer tipo
var mostrarCurso = function (nomeCurso, versao) {
    var concatenar = nomeCurso + versao;
    console.log(concatenar);
};
var curso = 'Curso Angular-';
var versao = 6;
mostrarCurso(curso, versao);
var numero = [1, 2, 3];
var nomes = ['Angular', 'mona', 'garcia'];
numero.forEach(function (element) {
    console.log(element);
});
for (var index = 0; index < nomes.length; index++) {
    var element = nomes[index];
    console.log(element);
}
