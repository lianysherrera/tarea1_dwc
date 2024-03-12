const rojo = document.getElementsByTagName("button")[0];
const verde = document.getElementsByTagName("button")[1];
const azul = document.getElementsByTagName("button")[2];
const borrar = document.getElementsByTagName("button")[3];


const tabla = document.getElementsByTagName("table")[0];

tabla.addEventListener("mouseover", (event) => {
    if (event.target.tagName === 'IMG') {
        const titulo = event.target.alt;
        document.getElementsByTagName("p")[0].textContent =  "esta es la parada de " +  titulo;
    }
});


rojo.addEventListener("click", () => {
    const imgRojo = document.querySelectorAll('.roja');
    imgRojo.forEach(img =>{
        if(img.tagName.toLowerCase()=== 'img') {
            img.style.border= '3px solid red';
        }
    })
});

verde.addEventListener("click", () => {
    const imgVerde = document.querySelectorAll('.verde');
    imgVerde.forEach(imgV => {
        if(imgV.tagName.toLowerCase()=== 'img'){
            imgV.style.border= '3px solid green';
        }
    })
});

azul.addEventListener("click", () => {
    const imgAzul = document.querySelectorAll('.azul');
    imgAzul.forEach(imgA => {
        if(imgA.tagName.toLowerCase()=== 'img'){
            imgA.style.border= '3px solid blue';
        }
    })
});

borrar.addEventListener("click", () => {
    const img =document.querySelectorAll('img');
    img.forEach(imagen => {
        imagen.style.border= 'none';
    })
});