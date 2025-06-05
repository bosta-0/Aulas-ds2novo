listaPerguntas = [
  {
    pergunta: "Qual o maior ser vivo?",
    opcoes: [
      "Baleia Azul",
      "Fungo de Mel",
      "Elefante",
      "Girafa"
    ],
    correta: 1
  },

  {
    pergunta: "Qual a primeira capital do Brasil?",
    opcoes: [
      "Groairas",
      "Taquara",
      "Salvador",
      "Rio de Janeiro"
    ],
    correta: 2
  },

  {
    pergunta: "Em qual ano o Brasil ganhou sua segunda copa?",
    opcoes: [
      "",
      "",
      "",
      ""
    ],
    correta: 1
  },

]

botaoIniciar = document.querySelector(".iniciar")
botaoIniciar.addEventListener("click", iniciarJogo)

function iniciarJogo() {
  telaInicial = document.querySelector(".tela-inicial")
  telaInicial.style.display = "none"
  
  telaPerg = document.querySelector(".tela-pergunta")
  telaPerg.style.display = "block"

  mostrarPergunta()
}

function mostrarPergunta() {
  objPergunta = listaPerguntas [0]

  textoPergunta = document.createTextNode(objPergunta.pergunta);

  divPergunta = document.querySelector(".pergunta");

  divPergunta.appendChild(textoPergunta);

  txtOpcao = document.createTextNode(objPergunta.opcoes[0]);
  botao0 = document.querySelector(".opcao0");
  botao0.appendChild(txtOpcao1);

  txtOpcao = document.createTextNode(objPergunta.opcoes[1]);
  botao0 = document.querySelector(".opcao1");
  botao0.appendChild(txtOpcao2);

  txtOpcao = document.createTextNode(objPergunta.opcoes[2]);
  botao0 = document.querySelector(".opcao2");
  botao0.appendChild(txtOpcao3);

  txtOpcao = document.createTextNode(objPergunta.opcoes[3]);
  botao0 = document.querySelector(".opcao3");
  botao0.appendChild(txtOpcao4);

}