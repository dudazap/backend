let nome;
nome = prompt("Digite o seu nome:");
console.log(nome);
window.alert(`Olá ${nome}!`);

let idade;
idade = prompt("Digite sua idade:");
console.log(idade);
var datadenascimento = (2024 - idade);
window.alert(`Você naceu em ${datadenascimento}!`);

let numeros = [];
for (let i = 0; i<20 ; i ++) {numeros [i] = Number.parseInt(Math.random () * 100 +1) ; }
console.log(numeros)

var tentativas = 0
do {
    let chute ;
    chute = prompt('Chute');

let acertou = false

    for (let i = 0; i<20 ; i ++) {
        if (chute == numeros [i] ) acertou = true}
        if (acertou) {window.alert ('Parabens'); break}
} while ( tentativas < 3);

