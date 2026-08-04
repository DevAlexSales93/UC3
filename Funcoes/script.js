//! Sintaxe de uma função.
//^ nota1, nota2, nota3. são parametros da função.
//* Paramentros são informações que a função precisa para executar uma ação.

function calcularMedia(nota1, nota2, nota3) {
    //^ Calcula a média das três notas.
    let media = (nota1 + nota2 + nota3) / 3;
    alert(`A média das notas é: ${media.toFixed(1)}`);
}
//? Lendo as informaçõesdo usuário:
let n1 = Number(prompt("Digite a primeira nota:"));
let n2 = Number(prompt("Digite a segunda nota:"));
let n3 = Number(prompt("Digite a terceira nota:")); 
//* Chamando a Função:
calcularMedia(n1, n2, n3);
