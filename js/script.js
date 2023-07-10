// array de citas
let citas = JSON.parse(localStorage.getItem('citas')) || [
    // citas predefinidas
    { categoria: "motivacion", texto: "El pesimista se queja del viento, el optimista espera que cambie, el líder arregla las velas.", autor: "John C. Maxwell" },
    { categoria: "motivacion", texto: "Pensad como hombres de acción, actuad como hombres de razón.", autor: "Tomas Mann" },
    { categoria: "motivacion", texto: "Si todo parece bajo control, entonces no estás yendo lo suficientemente deprisa.", autor: "Mario Andretti" },
    { categoria: "motivacion", texto: "Si tus acciones inspiran a otros a soñar más, aprender más, hacer más y cambiar más, eres un líder.", autor: "John Quincy Adams" },
    { categoria: "amor", texto: "Conocer el amor de los que amamos es el fuego que alimenta la vida.", autor: "Pablo Neruda" },
    { categoria: "amor", texto: "La mayor declaración de amor es la que no se hace; el hombre que siente mucho, habla poco.", autor: "Platón" },
    { categoria: "amor", texto: "El amor, para que sea auténtico, debe costarnos.", autor: "Teresa de Calcuta" },
    { categoria: "exito", texto: "El éxito es aprender a ir de fracaso en fracaso sin desesperarse.", autor: "Winston Churchill" },
    { categoria: "exito", texto: "El requisito del éxito es la prontitud en las decisiones.", autor: "Sir Francis Bacon" },
    { categoria: "exito", texto: "Para obtener éxito en el mundo, hay que parecer loco y ser sabio.", autor: "Montesquieu" },
]


// verificar si hay citas almacenadas en el localStorage
if (localStorage.getItem('citas')) {
    citas = JSON.parse(localStorage.getItem('citas'))
}

// acceso al contenedor de input
const contenedorInput = document.querySelector('.contenedor-input')


// función para crear el formulario de nueva cita
function crearFormularioNuevaCita() {
    const divContenedor = document.createElement('div')
    divContenedor.classList.add('contenedor-input', 'oculto')
    divContenedor.id = 'contenedorNuevoInput'

    const inputCita = document.createElement('input')
    inputCita.type = 'text'
    inputCita.id = 'inputCita'
    inputCita.placeholder = 'Ingresa la cita'

    const inputAutor = document.createElement('input')
    inputAutor.type = 'text'
    inputAutor.id = 'inputAutor'
    inputAutor.placeholder = 'Ingresa el autor'

    const btnGuardarCita = document.createElement('button')
    btnGuardarCita.id = 'btnGuardarCita'
    btnGuardarCita.textContent = 'Guardar'

    divContenedor.appendChild(inputCita)
    divContenedor.appendChild(inputAutor)
    divContenedor.appendChild(btnGuardarCita)

    return divContenedor
}


contenedorInput.appendChild(crearFormularioNuevaCita())


// función para mostrar una cita aleatoria
function mostrarCitaAleatoria() {

    
    const indiceAleatorio = Math.floor(Math.random() * citas.length)

    // seleccionar una cita aleatoria 
    const citaSeleccionada = citas[indiceAleatorio]

    // mostrar la cita seleccionada 
    const elementoCita = document.getElementById('cita')
    elementoCita.textContent = `${citaSeleccionada.texto} - ${citaSeleccionada.autor}`
}


// agregar evento de click al botón de motivación
const btnMotivacion = document.querySelector('.btn-categoria.motivacion')
btnMotivacion.addEventListener('click', function () {

    // filtrar las citas por categoría "motivacion"
    const citasMotivacion = citas.filter(cita => cita.categoria === 'motivacion')
    const indiceAleatorio = Math.floor(Math.random() * citasMotivacion.length)

    // aeleccionar una cita aleatoria de las citas con motivación 
    const citaSeleccionada = citasMotivacion[indiceAleatorio]

    // mostrar la cita seleccionada 
    const elementoCita = document.getElementById('cita')
    elementoCita.textContent = `${citaSeleccionada.texto} - ${citaSeleccionada.autor}`
})


// agregar evento de click al botón de amor
const btnAmor = document.querySelector('.btn-categoria.amor')
btnAmor.addEventListener('click', function () {

    // filtrar las citas por categoría "amor"
    const citasAmor = citas.filter(cita => cita.categoria === 'amor')
    const indiceAleatorio = Math.floor(Math.random() * citasAmor.length)

    // seleccionar una cita aleatoria de las citas con amor
    const citaSeleccionada = citasAmor[indiceAleatorio]

    // mostrar la cita seleccionada 
    const elementoCita = document.getElementById('cita')
    elementoCita.textContent = `${citaSeleccionada.texto} - ${citaSeleccionada.autor}`
})


// agregar evento de click al botón de exito
const btnExito = document.querySelector('.btn-categoria.exito')
btnExito.addEventListener('click', function () {

    // filtrar las citas por categoría "exito"
    const citasExito = citas.filter(cita => cita.categoria === 'exito')
    const indiceAleatorio = Math.floor(Math.random() * citasExito.length)

    // seleccionar una cita aleatoria de las citas con exito
    const citaSeleccionada = citasExito[indiceAleatorio]

    // mostrar la cita seleccionada 
    const elementoCita = document.getElementById('cita')
    elementoCita.textContent = `${citaSeleccionada.texto} - ${citaSeleccionada.autor}`
})


// botón Borrar citas personalizadas
const btnBorrarCitas = document.getElementById('btnBorrarCitas')

// agregar evento de click al botón Borrar citas personalizadas
btnBorrarCitas.addEventListener('click', function () {
    citas = citas.filter(cita => cita.categoria !== 'personalizada')
    localStorage.setItem('citas', JSON.stringify(citas))
})
// botón Personales
const btnPersonales = document.querySelector('.btn-categoria.personalizada')

// agregar evento de click al botón Personales
btnPersonales.addEventListener('click', function () {
    const citasPersonales = citas.filter(cita => cita.categoria === 'personalizada')

    if (citasPersonales.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * citasPersonales.length)
        const citaSeleccionada = citasPersonales[indiceAleatorio]

        const elementoCita = document.getElementById('cita')
        elementoCita.textContent = `${citaSeleccionada.texto} - ${citaSeleccionada.autor}`
    } else {
        const elementoCita = document.getElementById('cita')
        elementoCita.textContent = 'No hay citas personales disponibles'
    }
})


// función para guardar una nueva cita personalizada
function guardarCitaPersonalizada() {
    const inputCita = document.getElementById('inputCita')
    const inputAutor = document.getElementById('inputAutor')
    const mensajeError = document.getElementById('mensajeError')

    if (inputCita.value.trim() === '' || inputAutor.value.trim() === '') {
        mensajeError.textContent = 'Lo siento, agrega todos los campos solicitados.'
        return
    }

    const nuevaCita = {
        categoria: 'personalizada',
        texto: inputCita.value,
        autor: inputAutor.value
    }

    citas.push(nuevaCita)
    localStorage.setItem('citas', JSON.stringify(citas))

    inputCita.value = ''
    inputAutor.value = ''

    contenedorNuevoInput.classList.add('oculto')

    mostrarCitaAleatoria()
}


// botón Agregar nueva cita
const btnAgregarCita = document.getElementById('btnAgregarCita')
const contenedorNuevoInput = document.getElementById('contenedorNuevoInput')
const inputCita = document.getElementById('inputCita')
const inputAutor = document.getElementById('inputAutor')
const btnGuardarCita = document.getElementById('btnGuardarCita')


// agregar evento de click al botón Agregar nueva cita
btnAgregarCita.addEventListener('click', function () {
    contenedorNuevoInput.classList.remove('oculto')
})


// agregar evento de click al botón Guardar
btnGuardarCita.addEventListener('click', function () {
    guardarCitaPersonalizada()
})


// Mostrar una cita aleatoria al cargar la página
mostrarCitaAleatoria()