// Array de los medicos

const medicosArray = [
    {
        id: 1,
        nombre: "Rossi, Valentina",
        especialidad: "Medicina General",
        imagen: "./img/female.jpg",
        plan: "OSDE",
        horario: "De 8:00 a 12:00",
    },
    {
        id: 2,
        nombre: "Martínez, Franco",
        especialidad: "Pediatria",
        imagen: "./img/male.jpg",
        plan: "Swiss Medical",
        horario: "De 12:00 a 16:00",
    },
    {
        id: 3,
        nombre: "Esposito, Renata",
        especialidad: "Ortopedia",
        imagen: "./img/female.jpg",
        plan: "OMINT",
        horario: "De 16:00 a 20:00",
    },
    {
        id: 4,
        nombre: "Bianchi, Camila",
        especialidad: "Cardiologia ",
        imagen: "./img/female.jpg",
        plan: "Galeno",
        horario: "De 16:00 a 20:00",
    },
    {
        id: 5,
        nombre: "Rinaldi, Mateo",
        especialidad: "Ginecologia",
        imagen: "./img/male.jpg",
        plan: "Galeno",
        horario: "De 8:00 a 12:00",
    },
    {
        id: 6,
        nombre: "Romero, Sofia",
        especialidad: "Medicina General",
        imagen: "./img/female.jpg",
        plan: "Grupo Sancor Seguros",
        horario: "De 12:00 a 16:00",
    },
    {
        id: 7,
        nombre: "De Luca, Tomás",
        especialidad: "Psiquiatria",
        imagen: "./img/male.jpg",
        plan: "OSDE",
        horario: "De 8:00 a 12:00",
    },
    {
        id: 8,
        nombre: "Fernández, Lucía",
        especialidad: "Dermatologia ",
        imagen: "./img/female.jpg",
        plan: "Swiss Medical",
        horario: "De 12:00 a 16:00",
    },
    {
        id: 9,
        nombre: "Gallo, Joaquín",
        especialidad: "Ginecologia",
        imagen: "./img/male.jpg",
        plan: "OMINT",
        horario: "De 16:00 a 20:00",
    },
    {
        id: 10,
        nombre: "Moretti, Agustina",
        especialidad: "Medicina General",
        imagen: "./img/female.jpg",
        plan: "Galeno",
        horario: "De 16:00 a 20:00",
    },
    {
        id: 11,
        nombre: "Costa, Nicolás",
        especialidad: "Pediatria ",
        imagen: "./img/male.jpg",
        plan: "Medicus",
        horario: "De 8:00 a 12:00",
    },
    {
        id: 12,
        nombre: "Lombardi, Isabella",
        especialidad: "Cardiologia",
        imagen: "./img/female.jpg",
        plan: "Grupo Sancor Seguros",
        horario: "De 12:00 a 16:00",
    },
    {
        id: 13,
        nombre: "Colombo, Emilia",
        especialidad: "Medicina Familiar",
        imagen: "./img/female.jpg",
        plan: "OSDE",
        horario: "De 8:00 a 12:00",
    },
    {
        id: 14,
        nombre: "Pellegrini, Facundo",
        especialidad: "Ortopedia",
        imagen: "./img/male.jpg",
        plan: "Swiss Medical",
        horario: "De 12:00 a 16:00",
    },
    {
        id: 15,
        nombre: "Russo, Victoria",
        especialidad: "Psiquiatria",
        imagen: "./img/female.jpg",
        plan: "Galeno",
        horario: "De 16:00 a 20:00",
    },
    {
        id: 16,
        nombre: "Medina, Benjamin",
        especialidad: "Dermatologia",
        imagen: "./img/male.jpg",
        plan: "Medicus",
        horario: "De 16:00 a 20:00",
    },
    {
        id: 17,
        nombre: "Fiore, Martina",
        especialidad: "Medicina General",
        imagen: "./img/female.jpg",
        plan: "Grupo Sancor Seguros",
        horario: "De 12:00 a 16:00",
    },

    {
        id: 18,
        nombre: "Fontana, Santiago",
        especialidad: "Pediatria",
        imagen: "./img/male.jpg",
        plan: "OMINT",
        horario: "De 16:00 a 20:00",
    },
    {
        id: 19,
        nombre: " Caruso, Manuel",
        especialidad: "Cardiologia",
        imagen: "./img/male.jpg",
        plan: "OSDE",
        horario: "De 8:00 a 12:00",
    },
    {
        id: 20,
        nombre: "Santoro, Olivia",
        especialidad: "Ginecologia",
        imagen: "./img/female.jpg",
        plan: "Swiss Medical",
        horario: "De 12:00 a 16:00",
    },
]

//Subir el array de medicos existentes al localStorage

localStorage.setItem("medicos", JSON.stringify(medicosArray))

//Array de turnos agendados y su LS

let turnosAgendadosArray = []
let turnosAgendadosLS = JSON.stringify(localStorage.getItem("medicos-en-turnos"))

// ------------DOM------------ //
const contenedorMedicosDisponibles = document.querySelector("#container-medicos-disponibles")
const contenedorTurnosAgendados = document.querySelector("#container-turnos-agendados")
const contenedorConfirmacion = document.querySelector("#container-confirmacion")
const formularioMedico = document.querySelector("#formulario-medico")
const nombre = document.querySelector("#nombre")
const especialidad = document.querySelector("#especialidad")
const plan = document.querySelector("#plan")
const horario = document.querySelector("#horario")
const btnConfirmar = document.querySelector("#btnConfirmar")
const btnVaciar = document.querySelector("#btnVaciar")

// Cargar a los medicos a la pagina

function cargarMedicosDisponibles() {
    contenedorMedicosDisponibles.innerHTML = ""

    medicosArray.forEach(medico => {
        const div = document.createElement("div")
        div.classList.add("medicos-js-main")
        div.innerHTML = `
        <img src="${medico.imagen}" alt="" class="medicos-foto">
        <div class="medicos-nombre var-color-js">
            <small>Nombre</small>
            <h3>${medico.nombre}</h3>
        </div>
        <div class="medicos-especialidad">
            <small>Especialidad</small>
            <h3>${medico.especialidad}</h3>
        </div>
        <div class="medicos-plan var-color-js">
            <small>Plan de Salud</small>
            <h3>${medico.plan}</h3>
        </div>   
        <div class="medicos-horario">
            <small>Franja horaria</small>
            <h3>${medico.horario}</h3>
        </div>
            <button class="medico-agregar-btn" id="${medico.id}">Agregar turno</button>
        </div>
        `;
        contenedorMedicosDisponibles.append(div)

        // Boton para agregar turno al "carrito"

        const botonAgregarMedico = document.getElementById(`${medico.id}`)

        botonAgregarMedico.addEventListener("click", () => {
            agregarATurnos(medico.id)
        })

    })
}
cargarMedicosDisponibles();

// Agregar turno al "carrito"

const agregarATurnos = (medID) => {
    const medSelect = medicosArray.find((medico) => medico.id === medID)
    turnosAgendadosArray.push(medSelect)
    console.log(turnosAgendadosArray)
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    localStorage.setItem("medicos-en-turnos", JSON.stringify(turnosAgendadosArray))
    cargarTurnosAgendados();

}


// Cargar al "carrito" de turnos -- 

function cargarTurnosAgendados() {
    contenedorTurnosAgendados.innerHTML = ""

    turnosAgendadosArray.forEach(medico => {
        const div = document.createElement("div")
        div.classList.add("medicos-js-turnos")
        div.innerHTML = `
        <img src="${medico.imagen}" alt="" class="medicos-foto">
        <div class="medicos-nombre var-color-js">
            <small>Nombre</small>
            <h3>${medico.nombre}</h3>
        </div>
        <div class="medicos-especialidad">
           <small>Especialidad</small>
            <h3>${medico.especialidad}</h3>
        </div>
        <div class="medicos-plan var-color-js">
            <small>Plan de Salud</small>
            <h3>${medico.plan}</h3>
        </div>   
        <div class="medicos-horario">
            <small>Franja horaria</small>
            <h3>${medico.horario}</h3>
        </div>
            <button class="medico-remover-btn" id="remover ${medico.id}">Remover turno</button>
        </div>
         `;
        contenedorTurnosAgendados.append(div)

        // Boton para eliminar turnos

        const botonRemoverMedico = document.getElementById(`remover ${medico.id}`)

        botonRemoverMedico.addEventListener("click", () => {
            quitarDeTurnos(medico.id)
        })
        console.log(botonRemoverMedico)
    })
}

// Quitar del "carrito" de turnos

const quitarDeTurnos = (medID) => {
    const medSelect = turnosAgendadosArray.find((medico) => medico.id === medID)
    const findIndice = turnosAgendadosArray.indexOf(medSelect)
    turnosAgendadosArray.splice(findIndice, 1)
    console.log(turnosAgendadosArray)
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    localStorage.setItem("medicos-en-turnos", JSON.stringify(turnosAgendadosArray))
    cargarTurnosAgendados();

}

// Botones de vacio y de confirmacion

function confirmarTurno() {
    if (turnosAgendadosArray.length === 0) {
        alert("No tenés ningun turno agendado, por favor selecciona alguno")
    } else {
        contenedorConfirmacion.classList.remove("disabled")
    }
}

btnVaciar.addEventListener("click", () => {
    turnosAgendadosArray.length = 0
    cargarTurnosAgendados()
})
