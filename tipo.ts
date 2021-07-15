let verdadeiro :boolean;//falso ou verdadeiro
let Numero: number;// qualquer tipo numerico
let string: string;// cadeia de caracteres
let qualquer:any;// qualquer tipo

let mostrarCurso = (nomeCurso:string, versao:number)=>{
    let concatenar = nomeCurso + versao;
    console.log(concatenar);
}
let curso:string='Curso Angular-';
let versao:number=6;
mostrarCurso(curso, versao);
let numero: number[] = [1, 2, 3];
let nomes: Array<string> = ['Angular', 'mona', 'garcia'];
numero.forEach(element => {
  console.log(element);  
});
for (let index = 0; index < nomes.length; index++) {
    const element = nomes[index];
    console.log(element);
}