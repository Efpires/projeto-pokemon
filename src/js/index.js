const botaoAlterarTema = document.getElementById("botao-tema");

const body = document.querySelector("body");

const imagemBotao = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroAtivo = body.classList.contains("modo-escuro");

  if (modoEscuroAtivo) {
    body.classList.remove("modo-escuro");
    imagemBotao.setAttribute("src", "./src/imagens/sun.png");
  } else {
    body.classList.add("modo-escuro");
    imagemBotao.setAttribute("src", "./src/imagens/moon.png");
  }
});
