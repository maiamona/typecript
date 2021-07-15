interface IAnimal{
    recuperNome(): string;
    nome: string;
}

class Animais implements IAnimal{
    recuperNome(): string{
        return this.nome;
    }
    nome: string;
    constructor(nome: string){
      this.nome = nome; 
    }
}

let animais = new Animais('passaro');
console.log(animais.recuperNome());
console.log(animais.nome);
