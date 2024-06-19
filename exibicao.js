import prompt from "prompt-sync"
const ler = prompt()

//Pega o valor dos depositos e saques
export function qtd_depositar() {
    console.clear()
    let qtd_depositada = Number(ler("Quanto você deseja depositar: R$ "))
    return qtd_depositada
}

export function qtd_sacar() {
    console.clear()
    let qtd_sacada = Number(ler("Quanto você deseja sacar: R$ "))
    return qtd_sacada
}

//Pega os valores e escolhas para calcular uma simulação de juros
export function capital_inicial() {
    console.clear()
    let capital = Number(ler("Qual o capital inicial: R$ "))
    return capital
}

export function porcentagem_juros() {
    console.clear()
    let pcent = Number(ler("Qual a porcentagem de juros que você vai ganhar: %"))
    return pcent
}


export function tempo_juros() {
    console.clear()
    console.log(`Qual a medida de tempo que deixaremos investindo: 
    --------------------
    |    1.Dias        |
    |    2.Meses       |
    |    3.Trimestre   |
    |    4.Semestre    |
    |    5.Anos        |
    --------------------
    |                  |
    |       Sair       |
    |                  |
    --------------------
    `)
    let medida = Number(ler())
    return medida
}

export function qtd_tempo_juros(medida_de_tempo) {
    console.clear()
    const qtd_tempo = Number(ler(`Quantos ${medida_de_tempo}: `))
    return qtd_tempo
}

//Pega as escolhas do menu principal
export function escolha_do_menu() {
    console.log("Digite Sair para sair do programa")
    const escolha = ler("Qual sua escolha: ")
    return escolha.toLowerCase() == "sair" ? "Sair" : Number(escolha)
}

//Tela de continuar
export function continuar() {
    ler("Aperte enter para continuar")
    console.clear()
}
