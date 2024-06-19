import { desicao } from "./app.js"

export function menu() {
    console.clear()
    console.log(`
        ------------------------------------------        
        |                                        |
        |      1. Depositar                      |
        |      2. Sacar                          |
        |      3. Exibir saldo                   |
        |      4. Simulação de investimento      |
        |                                        |
        ------------------------------------------
        |                                        |
        |                  Sair                  |
        |                                        |
        ------------------------------------------
    `);
    desicao()
}
menu()