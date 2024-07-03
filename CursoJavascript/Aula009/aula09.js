// Funções parte 2

function retorno(){
    let n1= 20;
    let n2 = 20;
    let res=n1*n2;
    if(res%2 == 0)
        return "Par"
    else
        return "impar"
}

let num= retorno();

console.log(num);