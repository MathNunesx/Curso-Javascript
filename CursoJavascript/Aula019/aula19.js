//  querySelector 

const divTodas=[...document.getElementsByTagName("div")]
const CursoTodas=[...document.getElementsByClassName("curso")]
const cursoC1 = [...document.getElementsByClassName("c1")]
const cursoC2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = [...document.getElementsByClassName("curso")[6]]

console.log(divTodas);
console.log(CursoTodas);
console.log(cursoC1);
console.log(cursoC2);
console.log(cursoEspecial);

// cursoC2.map((el) => {
//     el.classList.add("Destaque")
// })
