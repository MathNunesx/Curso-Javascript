//  FUNÇÕES GERADORAS

// PRIMEIRO EXEMPLO
// function* cores (){
//     yield 'verde'
//     yield 'azul'
//     yield 'veamarelo'
// }

// let itc = cores()
// console.log(itc.next().value)
// console.log(itc.next().value)
// console.log(itc.next().value)

// SEGUNDO EXEMPLO

// function* perguntas(){
//     const nome = yield 'Qual teu nome?'
//     const esporte = yield 'Qual teu esporte favorito'
//     return 'Seu nome é ' + nome + ', seu esporte favorito é ' + esporte
// }

// const itp=perguntas()
// console.log(itp.next().value)
// console.log(itp.next('hinata').value)
// console.log(itp.next('baska').value)

// TERCEIRO EXEMPLO

function* contador(){
    let i=0
    while(true){
        yield i++

    }
}

const itc =contador();
for (let i=0; i <11; i++){
console.log(itc.next().value)
}
