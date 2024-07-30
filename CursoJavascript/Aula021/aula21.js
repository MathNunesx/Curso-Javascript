// Praticando 
const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btn = document.querySelector("#btn-transferir")
const todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map((el)=>{
    el.addEventListener("click", (evt)=>{
        const curso = evt.target;
        curso.classList.toggle("selecionado");
        
    })
})

btn.addEventListener("click", ()=>{
    const selecionados = [...document.querySelectorAll(".selecionado")]
    const nselecionados = [...document.querySelectorAll(".curso:not(.selecionado)")]
    // console.log(selecionados)
    selecionados.map((el)=>{
        caixa2.appendChild(el);
    })
    nselecionados.map((el)=>{
        caixa1.appendChild(el);
    })
})


