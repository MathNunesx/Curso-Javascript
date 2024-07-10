// Funções anônimas

// const f=function(v1,v2){
//     return v1+v2
// }

// console.log(f(10,5))

const f=function(...valores){
    let res=0
    for(v of valores){                   // <------ usando a função rest
        res+=v
    }
    return res
}

console.log(f(10,5))