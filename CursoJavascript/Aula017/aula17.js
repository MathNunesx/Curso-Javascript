// OPERADOR THIS

// PRIMEIRO EXEMPLO

// function aluno(nome, nota){
//     this.nome = nome;
//     this.nota = nota;

//     console.log(nome)
//     console.log(nota)
// }

// aluno("Gaya", 10);

// SEGUNDO EXEMPLO

function aluno(nome, nota){
    this.nome = nome;
    this.nota = nota;

    this.dados_anonimo=function(){
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota)
        }, 2000) 
    } // erro, iremos usar com função error para não dar undefined
   
    this.dados_arrow=function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }
}

const aluno1 = new aluno("Gaya", 10);
aluno1.dados_anonimo();
aluno1.dados_arrow();