const inputColor = document.querySelector('#inputColor')
const btnVisualizar = document.querySelector('#btnVisualizar')
const parrafo = document.querySelector('#parrafo')
const cardColor = document.querySelector('#cardColor')

console.log(inputColor.value)



btnVisualizar.addEventListener('click', () => {
     console.log('me diste')
     parrafo.textContent = inputColor.value;
     cardColor.style.backgroundColor = inputColor.value;

     navigator.clipboard
          .writeText(inputColor.value)
          .then(() => console.log("texto copiado"))
     .catch((error)=>{console.log(error)})

     
})