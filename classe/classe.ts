class Animal {
    protected nome: string;

    constructor(nome: string){
        this.nome = nome;
    }

    recuperNome(): string {
        return this.nome;
    }
    recuper(): string {
        return this.nome;
    }
}
class Cachorro extends Animal{
   constructor(nome: string){
       super(nome);
   } 
}

const animal = new Animal('Gato');
animal
// const cachorro = new Cachorro('Boby');
// const nomeCachorro = cachorro.recuperNome();
// console.log(nomeCachorro);
// const nomeAnimal = 'Cachorro';
// let animal = new Animal(nomeAnimal);
// console.log(animal.recuperNome());