//Campo compartido
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const cedula = document.getElementById("cedula")
const Teléfono = document.getElementById("Teléfono")
const especialidad = document.getElementById("especialidad")
//Campo propios de los médicos
const consultorio = document.getElementById("consultorio")
const correo = document.getElementById("correo")
//Campo propios pacientes
const Edad = document.getElementById("Edad")
//Llamado de formularios
const formularioMédico = document.getElementById("Registro-medico-form")
const formularioPaciente = document.getElementById("Registro-pacientes-form")
class Usuario {
    constructor(nombre, apellido, cedula, Teléfono, especialidad) {
        this.nombre = nombre
        this.apellido = apellido
        this.cedula = cedula
        this.Teléfono = Teléfono
        this.especialidad = especialidad
    }
}


const mostrarMedicos = function () {
    let medicos = [];
    let cuerpotabla = document.getElementById("cuerpo-tabla-medicos");
    let localMedicos = localStorage.getItem("medicos");
    if (localMedicos) {
        medicos = JSON.parse(localMedicos)
    }
    medicos.forEach(medico => {
        let fila = document.createElement("tr")
        let celdaNombres = fila.insertCell()
        let celdaApellido = fila.insertCell()
        let celdaCedula = fila.insertCell()
        let celdaConsultorio = fila.insertCell()
        let celdaTeléfono = fila.insertCell()
        let celdaCorreo = fila.insertCell()
        let celdaEspecialidad = fila.insertCell()
        let celdaPaciente = fila.insertCell()

        celdaNombres.textContent = medico.nombre
        celdaApellido.textContent = medico.apellido
        celdaCedula.textContent = medico.cedula
        celdaConsultorio.textContent = medico.consultorio
        celdaTeléfono.textContent = medico.Teléfono
        celdaCorreo.textContent = medico.correo
        celdaEspecialidad.textContent = medico.especialidad
        celdaPaciente.textContent = "Sin asignar"

        cuerpotabla.appendChild(fila)
    })
}

if (window.location.href.endsWith("Listado-medicos.html")) {
    mostrarMedicos()
}

if (window.location.href.endsWith("Registro-medico.html")) {
    formularioMédico.addEventListener("submit", function (event) {
        event.preventDefault()

        let valorNombres = nombre.value
        let valorApellidos = apellido.value
        let valorCedula = cedula.value
        let valorConsultario = consultorio.value
        let valorTeléfono = Teléfono.value
        let valorCorreo = correo.value
        let valorEspecialidad = especialidad.value

        const medico = new Usuario(valorNombres, valorApellidos, valorCedula, valorTeléfono, valorEspecialidad)
        medico.consultorio = valorConsultario
        medico.correo = valorCorreo

        let medicos = []

        let localMedicos = localStorage.getItem("medicos")
        if (localMedicos) {
            medicos = JSON.parse(localMedicos)
        }
        medicos.push(medico)
        localStorage.setItem("medicos", JSON.stringify(medicos))
        alert("Médico registrado")
    })
}

const mostrarPacientes = function () {
    let pacientes = [];
    let cuerpoTabla = document.getElementById("cuerpo-tabla-pacientes");
    let localPacientes = localStorage.getItem("pacientes");
    if (localPacientes) {
        pacientes = JSON.parse(localPacientes);
    }

    pacientes.forEach((paciente) => {
        let fila = document.createElement("tr");
        //Para crear celda DOM tiene un metodo que es insertCell()
        let celdaNombres = fila.insertCell();
        let celdaApellidos = fila.insertCell();
        let celdaCedula = fila.insertCell();
        let celdaEdad = fila.insertCell();
        let celdaTelefono = fila.insertCell();
        let celdaEspecialidad = fila.insertCell();
        let celdaMedico = fila.insertCell();

        celdaNombres.textContent = paciente.nombre;
        celdaApellidos.textContent = paciente.apellido;
        celdaCedula.textContent = paciente.cedula;
        celdaEdad.textContent = paciente.Edad;
        celdaTelefono.textContent = paciente.Teléfono;
        celdaEspecialidad.textContent = paciente.especialidad;
        celdaMedico.textContent = "Sin asignar";

        cuerpoTabla.appendChild(fila);
    });
}


if (window.location.href.endsWith("Listado-pacientes.html")) {
    mostrarPacientes();
}

if (window.location.href.endsWith("Registro-pacientes.html")) {
    formularioPaciente.addEventListener("submit", function (event) {
        event.preventDefault()

        let valorNombres = nombre.value
        let valorApellidos = apellido.value
        let valorCedula = cedula.value
        let valorEdad = Edad.value
        let valorTeléfono = Teléfono.value
        let valorEspecialidad = especialidad.value

        const paciente = new Usuario(valorNombres, valorApellidos, valorCedula, valorTeléfono, valorEspecialidad)
        paciente.Edad = valorEdad

        let pacientes = []

        let localPacientes = localStorage.getItem("pacientes")
        if (localPacientes) {
            pacientes = JSON.parse(localPacientes)
        }
        pacientes.push(paciente)
        localStorage.setItem("pacientes", JSON.stringify(pacientes))
        alert("Paciente registrado")
    })
}

