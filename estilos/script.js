document.querySelector("button.button-menu-toggle")
       .addEventListener("click", function () {
              document.querySelector(".nav-links").
                     classList.toggle("nav-links-responsive")
                     const carrusel = document.querySelector(".contenedor-carrusel")
                     const presentacion = document.querySelector(".presentacion");
                     const imageGigantes = document.querySelector(".imageGigantes");
                     const palabra = document.querySelector(".palabra");


                     if(carrusel){
                            carrusel.remove();
                            presentacion.remove();
                            imageGigantes.remove();
                            palabra.remove();

                     }

       })

function validateEmail(email) {
              const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
              return regex.test(email)
            }
            
            function ingresar(){
              var usuario = document.getElementById("staticEmail2").value;
              var contraseña = document.getElementById("inputPassword2").value;
       
       
              if (usuario == "admin@admin.com" && contraseña == "1234") {
                  
        let url = "http://localhost:5000/registro"  
        fetch(url)
        .then(function () {

            alert("Ingresando a administración")
            // Devuelve el href (URL) de la página actual
           window.location.href = "../templates/contactos.html";


        })
        .catch(err => {
            //this.errored = true
            alert("Error al enviar")
            console.error(err);
        })
                       
              }else{
                     alert("Usuario y/o contraseña incorrecta.")
              }
       }