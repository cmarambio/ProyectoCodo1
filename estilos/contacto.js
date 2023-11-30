function enviar() {

    let nombre_ingresado = document.getElementById("nombre").value
    let email_ingresado = document.getElementById("email").value
    let asunto_ingresado = document.getElementById("asunto").value

    var validar = validateForm(nombre_ingresado, email_ingresado, asunto_ingresado);

    if (validar) {

    
        console.log(nombre_ingresado);

        let enviar_contacto = {
            nombre: nombre_ingresado,
            email: email_ingresado,
            asunto: asunto_ingresado,

        }

        console.log(enviar_contacto);
        // Petición que se hace a la app web en flask
        let url = "http://localhost:5000/registro"
        var options = {
            body: JSON.stringify(enviar_contacto),
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        }

        fetch(url, options)
            .then(function () {
                console.log("creado")
                alert("Grabado")
                // Devuelve el href (URL) de la página actual
            //    window.location.href = "../templates/contactos.html";


            })
            .catch(err => {
                //this.errored = true
                alert("Error al grabar")
                console.error(err);
            })
        

    }else {
        alert("dale dale")
    }

    function validateForm(nombre,email,asunto) {


        console.log(nombre, email, asunto);



        var nombreTest = /^[a-zA-Z]+$/.test(nombre)
        console.log(nombreTest);

        if (nombreTest === false) {
            alert("Por favor, ingrese un nombre con letras del alfabeto")
            return false
        }

        if (nombre === "" || asunto === "" || !validateEmail(email)) {
            alert('Por favor ingrese todos los campos vacío o un correo electrónico válido.');
            return false
        }

        alert('Correo electrónico enviado correctamente. Nos contactaremos con vos en breve. Saludos!!');
        return true;
    }
}
