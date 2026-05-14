
const View= {
    getNombre(){
    return $(`nombre`).value;
    },
    getApellido(){
    return $(`apellido`).value;
    },
    getEdad(){
        return $(`edad`).value;
    },
    getCiudad(){
        return $(`ciudad`).value;
    },
    serializar(obj) { return JSON.stringify(obj); },
    deserializar(json) { return JSON.parse(json); },

    procesarFormulario() {
    const campos = [
        { id: "nombre", etiqueta: "Nombre" },
        { id: "apellidos", etiqueta: "Apellidos" },
        { id: "edad", etiqueta: "Edad" },
        { id: "ciudad", etiqueta: "Ciudad" }
    ];

    for (let i = 0; i < campos.length; i++) {
        let input = document.getElementById(campos[i].id);
        if (input.value.trim() === "") {
            alert("El campo " + campos[i].etiqueta + " es obligatorio.");
            return;
        }
    }

    let nuevoObjeto = {
        nombre: document.getElementById("nombre").value,
        apellidos: document.getElementById("apellidos").value,
        edad: document.getElementById("edad").value,
        ciudad: document.getElementById("ciudad").value
    };

    let objetoListo = deserializar(serializar(nuevoObjeto));
    insertarCelda(objetoListo);
    limpiarFormulario();


    actualizarEstadisticas();
},

insertarCelda(datos) {
    let tabla = document.getElementById("cuerpoTabla");
    let nuevaFila = tabla.insertRow();

    nuevaFila.onclick = function() {
        this.remove();
        actualizarEstadisticas();
    };

    nuevaFila.insertCell(0).textContent = datos.nombre;
    nuevaFila.insertCell(1).textContent = datos.apellidos;
    nuevaFila.insertCell(2).textContent = datos.edad;
    nuevaFila.insertCell(3).textContent = datos.ciudad;
},

limpiarFormulario() {
    let inputs = document.querySelectorAll(".formulario input");
    inputs.forEach(input => input.value = "");
},

borrarTabla() {
    document.getElementById("cuerpoTabla").innerHTML = "";

    actualizarEstadisticas();
},

actualizarEstadisticas() {

    let filas = document.querySelectorAll("#cuerpoTabla tr");
    let edades = [];

    filas.forEach(fila => {
        let edadTexto = fila.cells[2].textContent;
        let edadNumero = parseInt(edadTexto);
        if (!isNaN(edadNumero)) {
            edades.push(edadNumero);
        }
    });


    if (edades.length === 0) {
        document.getElementById("valSuma").textContent = "0";
        document.getElementById("valMedia").textContent = "0";
        document.getElementById("valMax").textContent = "0";
        document.getElementById("valMin").textContent = "0";
        return;
    }


    let suma = edades.reduce((acumulado, actual) => acumulado + actual, 0);
    let media = suma / edades.length;
    let max = Math.max(...edades);
    let min = Math.min(...edades);


    document.getElementById("valSuma").textContent = suma;
    document.getElementById("valMedia").textContent = media.toFixed(2);
    document.getElementById("valMax").textContent = max;
    document.getElementById("valMin").textContent = min;
}
}
