const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativa  = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
        enunciado: " Qual é o principal impacto da IA no processamento de grandes volumes de dados, como interações de clientes e registros de chamadas?",
        alternativas: [
            "Permite análise rápida e identificação de padrões complexos.",
            "Exige mais tempo para organizar e interpretar manualmente."
        ]
},

{
    enunciado: "Pergunta 2",
    Alternativas: [
        "Alternativa 1",
        "Alternativa 2"
    ]
},

{
    enunciado: "Pergunta 3",
    Alternativas: [
        "Alternativa 1",
        "Alternativa 2"
    ]
},

{
    enunciado: "Pergunta 4",
    Alternativas: [
        "Alternativa 1",
        "Alternativa 2"
    ]
},

{
    enunciado: "Pergunta 5",
    Alternativas: [
        "Alternativa 1",
        "Alternativa 2"
    ]
}

];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();