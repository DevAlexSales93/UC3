//* criando variaveis
let nomeSite= "Posto BR ";
let anoLancamento= 2026;

//! Number() = converte uma string em número.
//! prompt() = imput ().
//! Para o prompt retornar como string, que é texto.

//* alert = saida de dados (ingual ao print()).
alert("Bem vindo ao sistem " + nomeSite)
alert("Ano de lançamento: " + anoLancamento)

let precoGasolina = Number(prompt("Digite o preço da gasolina: "));
let precoEtanol = Number(prompt("Digite o preço do etanol: "));

//* So compensa pegar etanol se o preço so litro for meno ou igual a 70% do preço da gasolina.
//! Exemplo: 6,80 gasolina e 4,75 etanol. 4,75 / 6,80 = 0,7 (70%).

let porcentagem = precoEtanol / precoGasolina;
if (porcentagem <= 0.7) {
    alert("Compensa abastecer com etanol");
    alert("Neste caso o valor do etanol é " + (porcentagem*100).toFixed(1) + "% do valor da gasolina");
    document.write("<h1>Compensa abastecer com etanol!</h1>");
    // !alert("Portanto, compensa abastecer com etanol");
}
else {
    alert("Não compensa abastecer com etanol");
    alert("O valor do etanol é mais de 70% do valor da gasolina");
}