import { qtd_depositar, qtd_sacar, continuar, escolha_do_menu, capital_inicial, porcentagem_juros, tempo_juros, qtd_tempo_juros } from "./exibicao.js"
import { depositar, sacar, sml_invest } from "./financeiro.js"
import { menu } from "./menu.js"

let saldo = 0

export function desicao() {
    const escolha = escolha_do_menu()
    switch (escolha) {
        case 1:
            saldo = depositar(saldo)
            menu()
            break

        case 2:
            saldo = sacar(saldo)
            menu()
            break
        
        case 3:
            console.log(`
            -----------------------------------------------
                                                     
                                                         
                 Você está com um saldo de: R$${saldo}    
                                                         
                                                        
            -----------------------------------------------
            `)
            continuar()
            menu()
            break
        
        case 4:
            console.log(`
            ----------------------------------------------------------------
                                                        
                                                            
                Com seu investimento você obteve um lucro de: R$${sml_invest(capital_inicial(), porcentagem_juros(), qtd_tempo())}        
                                                            
                                                            
            ----------------------------------------------------------------
            `);
            continuar()
            menu()
            break


        case "Sair":
            break

        default:
            console.log("Opção inválida")
            continuar()
            menu()
            break
    }
}

export function depositado_valido(deposito) {
    while (deposito <= 0) {
        console.log("Valor inválido. O depósito deve ser maior que zero.")
        continuar()
        deposito = depositado_valido(qtd_depositar())
    }
    return deposito
}

export function saque_valido(saque) {
    while (saque <= 0) {
        console.log("Valor inválido. O saque deve ser maior que zero.")
        continuar()
        saque = saque_valido(qtd_sacar())
    }
    return saque
}

function qtd_tempo(){
    let tempo_J = tempo_juros()
    let medida_tempo = ""
    switch (tempo_J) {
        case 1:
            medida_tempo = "dias"
            return qtd_tempo_juros(medida_tempo)

        case 2:
            medida_tempo = "meses"
            return qtd_tempo_juros(medida_tempo)

            case 3:
            medida_tempo = "trimestres"
            return qtd_tempo_juros(medida_tempo)

        case 4:
            medida_tempo = "semestres"
            return qtd_tempo_juros(medida_tempo)
        
        case 5:
            medida_tempo = "anos"
            return qtd_tempo_juros(medida_tempo)

        default:
            console.log("Opçâo invalida");
            continuar()
            menu()
            break
    }
    return tempo_juros
}