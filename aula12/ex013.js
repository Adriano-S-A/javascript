var agora = new Date()
var diaSem = agora.getDay()
/*Acima está o comando Para usar o Dia da semana em Tempo Real, mas ele sempre retorna em número Começando do [0](Domingo) ... [6](Sábado)*/

/*Abaixo a conversão ultilizando o Switch (EXPRESSÃO)
                                        case:           */

 switch (diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2: 
        console.log('Terça')
        break
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5: 
        console.log('Sexta-Feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[Erro] Dia Invalido!')
 }

//Testar ultilizar string