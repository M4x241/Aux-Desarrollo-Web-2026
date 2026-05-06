let Eseleccionado;

function seleccionar1() {
  Eseleccionado = "elemento1";
  console.log("Selecciono el 1");
}
function seleccionar2() {
  Eseleccionado = "elemento2";
  console.log("Selecciono el 2");
}
function seleccionar3() {
  Eseleccionado = "elemento3";
  console.log("Selecciono el 3");
}

function cambiandoColor() {
  //recuperar el color que queremos
  entrada = document.getElementById("nuevoColor").value;
  lista = document.getElementById(Eseleccionado);
  lista.style.background = entrada;
}
