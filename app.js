import data from './data.json' assert {type:'json'};
console.log(data)

// const obj = JSON.parse(enJson)
// console.log(obj)

let diarioArray = data.map(item => item.tiempo.diario);
let semanalArray = data.map(item => item.tiempo.semanal);
let mensualArray = data.map(item => item.tiempo.mensual);


let diarioBtn = document.querySelector('#diario');
let semanalBtn = document.querySelector('#semanal');
let mensualBtn = document.querySelector('#mensual');
let segundaSecc = document.querySelector('.segunda-secc');

diarioBtn.addEventListener('click', ()=>{
    Swal.fire('Te recomendamos que dediques más horas de estudio y ocio 💁🏻‍♀️🍻⚽👩🏻‍💻🤓')
    todosElementos(diarioArray)
});
semanalBtn.addEventListener('click', ()=>{
    Swal.fire('Te recomendamos que dediques más horas de estudio y ocio 💁🏻‍♀️🍻⚽👩🏻‍💻🤓')
    todosElementos(semanalArray)
});
mensualBtn.addEventListener('click', ()=>{
    Swal.fire('Te recomendamos que dediques más horas de estudio y ocio 💁🏻‍♀️🍻⚽👩🏻‍💻🤓')
    todosElementos(mensualArray)
});

fetch("/data.json")
.then((resp)=>resp.json())
.then((data)=>{
})

function todosElementos(array){
 segundaSecc.innerHTML = '';
 array.forEach( (elemento, indice) =>{
 segundaSecc.innerHTML += `
        <div class="tareas">
           <div class="tareas-trabajo">
           </div>
          <div class="tareas-detalles">
           <div class="tarea-act1">
             <p class="tarea-titulo"> ${data[indice].titulo}</p>
           </div>
            <div class="tarea-hs">
              <p class="tareas-horas">${elemento.actual}hs</p>
             <p class="tareas-previas">Recomendado - ${elemento.recomendado}</p>
            </div>
           </div>
       </div>`
    })
}

localStorage.setItem("informacion", diarioArray);
localStorage.setItem("informacion", semanalArray);
localStorage.setItem("informacion", mensualArray);