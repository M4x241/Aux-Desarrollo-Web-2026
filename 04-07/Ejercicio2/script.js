listanombres = []
listaedades = []
listacarreras = []
cantEstudiantes = 0

function anadirAlumno() {
   nombre = document.querySelector("#name").value;
   edad = document.querySelector("#age").value;

   carrera = document.querySelector("#carrera").value; 
  //name
  console.log(nombre);
  //edad
  console.log(edad);
  //carrear
  console.log(carrera);

//   tabla = document.querySelector(".tabla");
    listanombres[cantEstudiantes] =   nombre;
    listaedades[cantEstudiantes] = edad;
    listacarreras[cantEstudiantes] = carrera;
    cantEstudiantes+=1;
    rellenarTabla();
    
}

function rellenarTabla(){
    fila = document.querySelector('.tabla');
    html = `<tr>
            <td>Nombre</td>
            <td>Edad</td>
            <td>Carrera</td>
            <td>Accion</td>
        </tr>`;
    for(i = 0 ; i<cantEstudiantes;i++){
        html +=
          `<tr>
            <td>` +
          listanombres[i] +
          `</td>
            <td>` +
          listaedades[i] +
          `</td>
            <td>` +
          listacarreras[i] +
          `</td>
            <td><button>borrar</button></td>
            </tr>
        `; 
        
    }
     fila.innerHTML =  html;
}