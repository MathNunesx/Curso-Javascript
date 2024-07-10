// parâmetros rest

// function soma(...valores){
//     let tamanho = valores.length
//     let res=0
//     for(i = 0; i <tamanho; i++ ){
//         res+=valores[i];
//     }
//     return res;
// }

// console.log(soma(10,5,4,7,3));

function soma(...valores){
    let res=0
    for(let v of valores ){
        res+=v;
    }
    return res;
}

console.log(soma(10,5,4,7,3));