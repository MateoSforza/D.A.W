function mostrarError(idCampo, mensaje) {
    document.getElementById("error-" + idCampo).textContent = mensaje;
}

function limpiarError(idCampo) {
    document.getElementById("error-" + idCampo).textContent = "";
}

function validarNombre() {
    var nombre = document.getElementById("nombre").value.trim();
    if (nombre === "") {
        mostrarError("nombre", "El nombre no puede estar vacío.");
        return false;
    }
    if (nombre.length <= 6 || nombre.indexOf(" ") === -1) {
        mostrarError("nombre", "Debe tener más de 6 letras y al menos un espacio.");
        return false;
    }
    return true;
}

function validarEmail() {
    var email = document.getElementById("email").value.trim();
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        mostrarError("email", "El email no puede estar vacío.");
        return false;
    }
    if (!regex.test(email)) {
        mostrarError("email", "Debe ser un email válido.");
        return false;
    }
    return true;
}

function validarContrasena() {
    var c = document.getElementById("contrasena").value;
    var regex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (c === "") {
        mostrarError("contrasena", "La contraseña no puede estar vacía.");
        return false;
    }
    if (!regex.test(c)) {
        mostrarError("contrasena", "Mínimo 8 caracteres con letras y números.");
        return false;
    }
    return true;
}

function validarRepetirContrasena() {
    var c1 = document.getElementById("contrasena").value;
    var c2 = document.getElementById("repetir-contrasena").value;
    if (c2 === "") {
        mostrarError("repetir", "Repetir contraseña no puede estar vacío.");
        return false;
    }
    if (c1 !== c2) {
        mostrarError("repetir", "Las contraseñas no coinciden.");
        return false;
    }
    return true;
}

function validarEdad() {
    var edadStr = document.getElementById("edad").value.trim();
    if (edadStr === "") {
        mostrarError("edad", "La edad no puede estar vacía.");
        return false;
    }
    var edad = parseInt(edadStr, 10);
    if (isNaN(edad) || edad < 18) {
        mostrarError("edad", "Debes ser mayor de 18 años.");
        return false;
    }
    return true;
}

function validarTelefono() {
    var tel = document.getElementById("telefono").value.trim();
    if (tel === "") {
        mostrarError("telefono", "El teléfono no puede estar vacío.");
        return false;
    }
    if (!/^\d{7,}$/.test(tel)) {
        mostrarError("telefono", "Al menos 7 dígitos, sin símbolos ni espacios.");
        return false;
    }
    return true;
}

function validarDireccion() {
    var dir = document.getElementById("direccion").value.trim();
    if (dir === "") {
        mostrarError("direccion", "La dirección no puede estar vacía.");
        return false;
    }
    if (dir.length < 5 || dir.indexOf(" ") === -1) {
        mostrarError("direccion", "Debe tener letras, números y un espacio.");
        return false;
    }
    return true;
}

function validarCiudad() {
    var ciudad = document.getElementById("ciudad").value.trim();
    if (ciudad === "") {
        mostrarError("ciudad", "La ciudad no puede estar vacía.");
        return false;
    }
    if (ciudad.length < 3) {
        mostrarError("ciudad", "Debe tener al menos 3 caracteres.");
        return false;
    }
    return true;
}

function validarCP() {
    var cp = document.getElementById("codigo-postal").value.trim();
    if (cp === "") {
        mostrarError("cp", "El código postal no puede estar vacío.");
        return false;
    }
    if (cp.length < 3) {
        mostrarError("cp", "Debe tener al menos 3 caracteres.");
        return false;
    }
    return true;
}

function validarDNI() {
    var dni = document.getElementById("dni").value.trim();
    if (dni === "") {
        mostrarError("dni", "El DNI no puede estar vacío.");
        return false;
    }
    if (!/^\d{7,8}$/.test(dni)) {
        mostrarError("dni", "Debe tener 7 u 8 dígitos.");
        return false;
    }
    return true;
}


// Asignar eventos a cada campo
function asignarValidacion(id, fn) {
    var campo = document.getElementById(id);
    campo.addEventListener("blur", fn);
    campo.addEventListener("focus", function () {
    limpiarError(id);
    });
}

asignarValidacion("nombre", validarNombre);
asignarValidacion("email", validarEmail);
asignarValidacion("contrasena", validarContrasena);
asignarValidacion("repetir-contrasena", validarRepetirContrasena);
asignarValidacion("edad", validarEdad);
asignarValidacion("telefono", validarTelefono);
asignarValidacion("direccion", validarDireccion);
asignarValidacion("ciudad", validarCiudad);
asignarValidacion("codigo-postal", validarCP);
asignarValidacion("dni", validarDNI);

document.getElementById("formulario-suscripcion").addEventListener("submit", function (e) {
    e.preventDefault();

    var valido = validarNombre() & validarEmail() & validarContrasena() & validarRepetirContrasena() & validarEdad() & validarTelefono() & validarDireccion() & validarCiudad() & validarCP() & validarDNI();

    if (!valido) {
        mostrarModal("❌ Hay errores en el formulario");
        return;
    }

    var datos={
        nombre: document.getElementById("nombre").value.trim(),
        email: document.getElementById("email").value.trim(),
        contrasena: document.getElementById("contrasena").value,
        edad: document.getElementById("edad").value.trim(),
        telefono: document.getElementById("telefono").value.trim(),
        direccion: document.getElementById("direccion").value.trim(),
        ciudad: document.getElementById("ciudad").value.trim(),
        codigoPostal: document.getElementById("codigo-postal").value.trim(),
        dni: document.getElementById("dni").value.trim()
    }

    var queryParams = new URLSearchParams(datos).toString();

    var url = "https://curso-dev-2021.herokuapp.com/newsletter?" + queryParams;

    fetch(url)
    .then(response=> response.json())
    .then(data => {
        mostrarModal("✅ Suscripción exitosa.\nDatos reecibidos:\n" + JSON.stringify(data, null, 2));
        localStorage.setItem("datosFormulario", JSON.stringify(datos));
    })
    .catch(error => {
            mostrarModal("❌ Error en el envío: " + error.message);
        });
});

// BONUS: título HOLA nombre en vivo
document.getElementById("nombre").addEventListener("keydown", function () {
    document.getElementById("titulo-suscripcion").textContent = "HOLA " + this.value;
});
document.getElementById("nombre").addEventListener("focus", function () {
    document.getElementById("titulo-suscripcion").textContent = "HOLA " + this.value;
});

function mostrarModal(mensaje) {
    var modal = document.getElementById("modal");
    var mensajeModal = document.getElementById("mensaje-modal");
    mensajeModal.textContent = mensaje;
    modal.classList.remove("oculto");
}

document.getElementById("cerrar-modal").addEventListener("click", function () {
    document.getElementById("modal").classList.add("oculto");
});
