//? Essa função será chamada quando o botão for clicado.
//* Pegando a TEG do HTML.
//^ Aqui, vamos descobrir a tag que sera editada, e vamos salvar a TAG em uma variavel.
//~ getElementById() -> Pega o elemento pelo ID.
let tagBtn = document.getElementById("btn");

function eventos() {
    alert("Você clicou no botão!");
    //& Editando a TAG do HTML.
    tagBtn.style.backgroundColor = "red";
}