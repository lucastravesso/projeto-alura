const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

console.log(estatisticas)

controle.forEach((e) => {
    e.addEventListener("click", (element) => {
        manipulaDados(element.target.dataset.controle, element.target.parentNode)
        atualizaEstatisticas(element.target.dataset.peca)
    })
})



function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-counter]")

    if (operacao === "-") {
        if (peca.value > 0) {
            peca.value = parseInt(peca.value) - 1
        } else {
            peca.value = "00"
            alert("Valor nao pode ser menor que 0")
        }
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca) {
    estatisticas.forEach((e) => {
        e.textContent = parseInt(e.textContent) + pecas[peca][e.dataset.estatistica]
    })
}