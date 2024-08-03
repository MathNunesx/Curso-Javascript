// CREATE ELEMENT   
// const caixa = document.querySelector("#caixa");
// const btn = [...document.querySelectorAll(".curso")]
// const cursos = ["html", "css", "php", "js", "react", "mysql"]

// cursos.map((el, chave) => {
//     const novo_elemento = document.createElement("div");

//     novo_elemento.setAttribute("id", "c"+chave+1)
//     novo_elemento.setAttribute("class", "curso")
//     novo_elemento.innerHTML = el;

//     caixa.appendChild(novo_elemento)

// })

// REMOVE ELEMENT

const caixa = document.querySelector("#caixa");
const btn = [...document.querySelectorAll(".curso")]
const cursos = ["html", "css", "php", "js", "react", "mysql"]

cursos.map((el, chave) => {
    const novo_elemento = document.createElement("div");

    novo_elemento.setAttribute("id", "c"+chave+1)
    novo_elemento.setAttribute("class", "curso")
    novo_elemento.innerHTML = el;
    novo_elemento.addEventListener("click", (evt)=>{
        caixa.removeChild(evt.target)
    })

    caixa.appendChild(novo_elemento)

})




