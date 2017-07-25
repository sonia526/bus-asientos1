
function datos_Pasajero(asiento, nombre, apellido, iddni){
    this.asiento = asiento;
    this.nombre= nombre;
    this.apellido = apellido;
    this.iddni = iddni;
};
function  asientos(buscar, listar, cancelar, reservar){
  this.isBusy =false;
  this.reservar=function(){
    var mostrar=document.getElementById("mostrar");
    var numeroAsiento = parseInt (mostrar.textContent);
   if (numeroAsiento.length === 0)
      return;
    arreglo[numeroAsiento-1] = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        dni: document.getElementById("eldni").value,
    }


function redirect(event){
    document.getElementById("mostrar").innerHTML= (event.target.textContent);

    var num = parseInt(event.target.textContent);
    celdaActual = event.target;

    numAsiento = event.target.textContent;

     for (var i =0; i<pasajeros.length;i++){
        var obtiene = pasajeros[i];

        var s = parseInt(obtiene.asiento);
        if(s === num){
            document.getElementById("nombre").value = obtiene.nombre;
            document.getElementById("apell").value = obtiene.apellido;
            document.getElementById("eldni").value = obtiene.iddni;

        }
    }
}

var pasajeros = [];
console.log(pasajeros);
var listando = document.getElementById('lista');

//bueno aca era su posicion anterior function datos_Pasajero(asiento, nombre, apellido, iddni){


datos_Pasajero.prototype.toHTML = function(){
    var html = '';
    html += 'Asiento N° ' + this.asiento + '<br>';
    html += 'Nombre: ' + this.nombre + '<br>';
    html += 'Apellido: ' + this.apellido + '<br>';
    html += 'N° de DNI: ' + this.iddni + '<br>';
    html += '<br><br>';
    return html;
}

function mergeHTML(){
    var html = '';
    for (var i=0; i<pasajeros.length; i++){
        html += pasajeros[i].toHTML();
    }
    return html;
}

function printHTML (html){
  listando.innerHTML = '';
  listando.innerHTML = html;
}

//Funcion Agregar
var addPas = document.getElementById('agregar');
addPas.onclick = function() {
    var asientos = document.getElementById("mostrar").textContent;
    var suNombre = document.getElementById("nombre");
    var suApellido = document.getElementById("apell");
    var numDNI = document.getElementById("eldni");
    suNombre = suNombre.value;
    suApellido = suApellido.value;
    numDNI = parseInt(numDNI.value);


  var datos = new datos_Pasajero(asientos, suNombre, suApellido, numDNI);
  pasajeros.push(datos);
  //printHTML(datos.toHTML());


 celdaActual.style.backgroundColor = '#F8ED50';

    refrescar();
};

var printAll = document.getElementById('print');
    printAll.onclick = function() {
    printHTML(mergeHTML());
}

function refrescar(){
    document.getElementById("nombre").value = "";
    document.getElementById("apell").value = "";
    document.getElementById("eldni").value = "";
}

function buscar(){
    var buscarDni = document.getElementById("dni");
    buscarDni = parseInt(buscarDni.value);
    for (var i =0; i<pasajeros.length;i++){
        var obtiene = pasajeros[i];
        var s = obtiene.iddni;
        if(s==buscarDni){
            document.getElementById("nombre").value = obtiene.nombre;
            document.getElementById("apell").value = obtiene.apellido;
            document.getElementById("eldni").value = obtiene.iddni;

        }
    }

    refrescabuscar();

}
console.log(buscar());

function refrescabuscar(){
    document.getElementById("dni").value = "";
}

function consulta(){
    refrescar();
}

function cancela(){
    var  num = parseInt(document.getElementById("mostrar").textContent);

    for (var i =0; i<pasajeros.length;i++){
        var obtiene = pasajeros[i];
        var s = parseInt(obtiene.asiento);
        if(s === num){
            pasajeros[i] = datos_Pasajero('-1', '', '', -1);
        }
    }

    refrescar();

}
