/* 
  O que precisamos fazer? -> quando passar o mouse em cima do personagem na lista temos que adicionar
  a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, 
  o nome e o texto grande do personagem que está selecionado.

    OBJETIVO 1 - quando passarmos o ponteiro do mouse em cima da imagem presente na lista, devemos fazer com que
    a borda azul de seleção seja aplicada na imagem pequena da lista.

    ->    passo 1 - adicionar os personagens no JavaScript pra poder verificar quando o usuário passar o ponteiro do mouse 
    em cima de um deles
        
    ->    passo 2 - adicionar a classe "selecionado" no personagem que o usuário passar o cursor do mouse.
        
    ->    passo 3 - verificar se já existe um personagem selecionado. Se sim, devemos remover a seleção dele. 

    OBJETIVO 2 - quando passar o cursor do mouse em cima do personagem na listagem, deve-se trocar a 
    imagem, o nome e a descrição do personagem grande.

    ->    passo 1 - adicionar as informações do personagem selecionado no elemento "Personagem Grande"
    ->    passo 2 - alterar a imagem, nome e descrição do personagem grande.
*/

const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    if (window.innerWidth < 450) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    removerSelecaoDoPersonagem();

    personagem.classList.add("selecionado");

    alterarImagemPersonagemSelecionado(personagem);

    alterarNomePersonagemSelecionado(personagem);

    alterarDescricaoPersonagem(personagem);
  });
});

function alterarDescricaoPersonagem(personagem) {
  const descricaoPersonagem = document.getElementById("descricao-personagem");
  descricaoPersonagem.innerText = personagem.getAttribute("data-description");
}

function alterarNomePersonagemSelecionado(personagem) {
  const nomePersonagem = document.getElementById("nome-personagem");
  nomePersonagem.innerText = personagem.getAttribute("data-name");
}

function alterarImagemPersonagemSelecionado(personagem) {
  const imagemPersonagemGrande = document.querySelector(".personagem-grande");
  const idPersonagem = personagem.attributes.id.value;
  imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
  const personagemSelecionado = document.querySelector(".selecionado");
  personagemSelecionado.classList.remove("selecionado");
}
