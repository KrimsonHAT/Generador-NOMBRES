const formulario = document.getElementById('generar-nombre');
formulario.addEventListener('submit',cargarNombres);

function cargarNombres(e){
    e.preventDefault();
    
    // leer origen
    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;
    

    // leer genero
    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;
    

    // leer cantidad Seleccionada
    const cantidadSeleccionada = document.getElementById('numero').value;
    

    let url = '';
    url += 'https://randomuser.me//api/?inc=results,gender,name,nat&noinfo&';

    // si hay origen agregarlo a la url

    if(origenSeleccionado !==''){
        url+= `nat=${origenSeleccionado}&`
    }
    // si hay genero agregarlo a la lista
    if(generoSeleccionado !==''){
        url+= `gender=${generoSeleccionado}&`
    }
    // la cantidad se agrega a la lista
    if(cantidadSeleccionada!==''){
        url+= `results=${cantidadSeleccionada}`
    }


/*
    
//    conectar AJAX
// Iniciar xmlhttprequest
const xhr = new XMLHttpRequest();

// iniciar conexion
xhr.open('GET',url,true)

// datos e impresion del template
xhr.onload = function () { 
if(this.status===200){
   const nombres = JSON.parse(this.responseText).results;
   console.log(nombres);
//    generamos el html
let htmlNombres = '<h2>Nombres Generados</h2>';

    htmlNombres += '<ul class="lista">';

    // imprimir cada nombre
    nombres.forEach(function(nombre) {
        htmlNombres += `
        <li>${nombre.name.first}</li>
        
        `;
    });




    htmlNombres += '</ul>';

    document.getElementById('resultado').innerHTML = htmlNombres;




}
 }
//  enviar el request 
xhr.send();
*/


// Crear con fetch

fetch(url)
.then((res)=>{

    return res.json()
})
.then((data)=>{
   let resultados=data.results;
   
let html = '<h2>Nombres generados</h2>';
    resultados.forEach(resultado => {
        html+= `
      
        <ul class="lista">
                <li>${resultado.name.first}</li>
        </ul>

`;

    });

    document.getElementById('resultado').innerHTML = html;
   
})
}