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

objPergunta = null

telaInicial = document.querySelector(".tela-inicial")
telaPergunta = document.querySelector(".tela-pergunta")
telaErrou = document.querySelector(".tela-errou")
telaAcertou = document.querySelector(".tela-acertou") 

botaoIniciar = document.querySelector(".iniciar")
botaoIniciar.addEventListener("click", iniciarJogo)

divPergunta = document.querySelector(".pergunta");

botao0 = document.querySelector(".opcao0")
botao1 = document.querySelector(".opcao1")
botao2 = document.querySelector(".opcao2")
botao3 = document.querySelector(".opcao3")

botao0.addEventListener("click", () => {
  if (objPergunta.correta == 0) {
    mostrarAcertou()
  } else {
    mostrarErrou()
  }
  
})

botao1.addEventListener("click", () => {
  if (objPergunta.correta == 1) {
    mostrarAcertou()
  } else {
    mostrarErrou()
  }
  
})

botao2.addEventListener("click", () => {
  if (objPergunta.correta == 2) {
    mostrarAcertou()
  } else {
    mostrarErrou()
  }
  
})

botao3.addEventListener("click", () => {
  if (objPergunta.correta == 3) {
    mostrarAcertou()
  } else {
    mostrarErrou()
  }
  
})

telaAcertou.addEventListener("click", () => {
  telaAcertou.style.display = "none"
  iniciarJogo()
})

telaErrou.addEventListener("click", () => {
  telaErrou.style.display = "none"
  iniciarJogo()
})

function iniciarJogo() {
  
  telaInicial.style.display = "none"
  telaPergunta.style.display = "block"

  mostrarPergunta()
}

function mostrarPergunta() {
  objPergunta = listaPerguntas[0]

  textoPergunta = document.createTextNode(objPergunta.pergunta);
  divPergunta.appendChild(textoPergunta);

  txtOpcao1 = document.createTextNode(objPergunta.opcoes[0]);
  botao0.appendChild(txtOpcao1);

  txtOpcao2 = document.createTextNode(objPergunta.opcoes[1]);
  botao1.appendChild(txtOpcao2);

  txtOpcao3 = document.createTextNode(objPergunta.opcoes[2]);
  botao2.appendChild(txtOpcao3);

  txtOpcao4 = document.createTextNode(objPergunta.opcoes[3]);
  botao3.appendChild(txtOpcao4);

}

function mostrarAcertou() {
  telaPergunta.style.display = "none"
  telaAcertou.style.display = "block"
}

function mostrarErrou() {
  telaPergunta.style.display = "none"
  telaErrou.style.display = "block"
}