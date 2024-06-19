import { depositado_valido, saque_valido } from "./app.js"
import { qtd_depositar, qtd_sacar } from "./exibicao.js"

export function depositar(saldo) {
    let depositado = depositado_valido(qtd_depositar())
    let novoValor = saldo + depositado
    return novoValor
}

export function sacar(saldo) {
    let sacado = saque_valido(qtd_sacar())
    let novoValor = saldo - sacado
    return novoValor
}

export function sml_invest(investido, porcentagem, tempo) {
    let lucro = investido * (1+porcentagem/100)**tempo
    return lucro.toFixed(2)
}