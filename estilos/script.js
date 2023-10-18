document.querySelector("button.button-menu-toggle")
       .addEventListener("click", function () {
              document.querySelector(".nav-links").
                     classList.toggle("nav-links-responsive")
                     const carrusel = document.querySelector(".contenedor-carrusel")
                     if(carrusel){
                            carrusel.remove();
                     }

       })

function validateEmail(email) {
              const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
              return regex.test(email)
            }
            
function validateForm() {
       var nombre = document.getElementById("nombre").value.trim(); 
       var asunto = document.getElementById("asunto").value.trim();
       var email = document.getElementById('email').value.trim();
       
       console.log(nombre, asunto, email);



       var nombreTest =/^[a-zA-Z]+$/.test(nombre)

       if(nombreTest === false){
              alert("Por favor, ingrese un nombre con letras del alfabeto")
              return false
       }

       if (nombre === "" || asunto === "" || !validateEmail(email)) {
              alert('Por favor ingrese todos los campos vacío o un correo electrónico válido.');
              return false
       } 

       alert('Correo electrónico enviado correctamente. Nos contactaremos con vos en breve. Saludos!!');
}
