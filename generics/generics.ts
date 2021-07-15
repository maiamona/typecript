class Generics<T>{
public nome: T;
constructor(nome: T){
this.nome = nome;
}
recuperarNome(): T {
    return this.nome;
}
recuperarTipo(): string {
    return typeof(this.nome);
}
}

let generico = new Generics<number>(400);
console.log(generico.recuperarNome()); 
console.log(generico.recuperarTipo()); 