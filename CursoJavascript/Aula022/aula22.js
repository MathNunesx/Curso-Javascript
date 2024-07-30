// STOP PROPAGATION
const caixa = document.querySelector("#caixa")
const btn = document.querySelector("#c1")
const cursos = [...document.querySelectorAll(".curso")]

caixa.addEventListener("click", (evento)=>{
    console.log("clicou")
})

cursos.map((el)=>{
    el.addEventListener("click", (evento)=>{
        evento.stopPropagation
    })
})