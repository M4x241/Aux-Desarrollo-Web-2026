console.log("conectado");
let menuOculto = false

function agregarHistorial(seleccionado){
    console.log(seleccionado)
    lista = document.getElementById("historial");
    elemento = document.createElement("li")
    elemento.innerText = seleccionado;
    console.log(lista)
    lista.appendChild(elemento)

}

function Datos(){
    agregarHistorial("Btn Inicio")
    contenido = document.getElementById("contenido");

    html = `
        <h1>Segundo examen parcial de Sis256</h1>

    <p class="nombre">Nombre Estudiante: Max Rodas</p>
        <p class="cu">CU: 111-461</p>
        <p class="fecha">Fecha: 13/05/2026</p>
        <p class="vistas">Numero de Vistas </p>`;
    contenido.innerHTML = html
    
    nombre = document.querySelector(".nombre");
    cu = document.querySelector(".cu");
    fecha = document.querySelector(".fecha");
    nombre.innerHTML = "Nombre Estudiante: Max Rodas"
    cu.innerHTML = "CU: 111-461"
    fecha.innerHTML = "Fecha: 13/05/2026"
}

function Menu(){
    agregarHistorial("Btn Menu");
    
    botones = document.getElementsByClassName("b");
    for (i = 0; i < botones.length; i++) {
      console.log("holas");
      if(menuOculto){
        botones[i].style.display = "flex";

      }else{
        botones[i].style.display = "none";
        
      }
    }
    menuOculto = menuOculto? false: true;

}
function Pregunta1() {
  agregarHistorial("Btn pregunta 1");
  contenido = document.getElementById("contenido");
  let html = `<div class="libros" style="display: flex;flex-direction: row;">`;
  fetch("galeria.php").then(
    (response) =>{
        if(!response.ok){
            throw new Error("Eror en la peticion")
        }
        return response.json()
    }
  ).then((data)=>{
    console.log(data)
    data.forEach(element => {
        console.log("fila de la bd")
        console.log(element);
        html =
          html +
          `<button onclick="mostrarModal('`+element.titulo+`')">
          <div style="height: 150px; width: 75px;">
            <div>
                <img src="images.jpg"  width="40px" alt="Not Found">
            </div>
            <div>
                <p>` +
          element.titulo +
          `</p>
            </div>
        </div>
        </button>`;
    });
    html += `</div>`;
    contenido.innerHTML = html;

  })
}

function Pregunta2(){
    agregarHistorial("Btn pregunta 2");

}

function mostrarModal(datos){
    console.log("Datos enviado al modal")
    console.log(datos)
    modal = document.getElementById("mimodal");
    contenidoModal = document.getElementById("modalContent");
    contenidoModal.innerHTML = datos
    modal.showModal();
}

function cerrarModal(){
     modal = document.getElementById("mimodal");
     modal.close()
}