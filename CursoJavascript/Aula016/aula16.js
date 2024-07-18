// FUNÇÃO MAP

// PRIMEIRO EXEMPLO

// const cursos = ["html", "css", "java", "php"];
// cursos.map((elemento, i) => {
//     console.log("Curso: " + elemento + " - posição do curso: " + i);
// })

// SEGUNDO EXEMPLO

// const cursos = ["html", "css", "java", "php"];
// let c = cursos.map((elemento, i) =>{
//     return elemento
// });

// console.log(c);

// TERCEIRO EXEMPLO

// let el = document.getElementsByTagName("div");
//     el=[...el]
//     el.map((e,i)=>{
//         console.log(e.innerHTML)        
// })

// QUARTO EXEMPLO //

const el = document.getElementsByTagName("div");
const val = Array.prototype.map.call(el, ({innerHTML})=>innerHTML)
console.log(val)

