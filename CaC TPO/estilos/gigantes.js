const url = `https://api.weatherapi.com/v1/current.json?key=14edc5fc17294bb7a8121911230709&q=Los%Gigantes%Cordoba`;

async function climaGigantes() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Data", data);
    console.log("Data", typeof data);
    console.log("Data", typeof data.current);
    const info = data.current;
    console.log("current", info);
    console.log(`Cordoba ${info.feelslike_c}°`);
    console.log(`Icono ${info.condition.icon}`);

    var infoApi = document.querySelector(".infoApi");
    var imagen = document.querySelector(".imgApiClima");
    imagen.src = info.condition.icon;
    console.log(imagen.src);
    // infoApi.appendChild(imagen)
    infoApi.innerHTML = `
        
        La Temperatura en Los Gigantes es :
           ${info.feelslike_c}° , <br>
           Vientos de  ${info.gust_kph} Kilómetros por Hora,<br>
           Humedad del  ${info.humidity}%<br>
           Actualización al ${info.last_updated} hora local<br>
     `;
  } catch (error) {
    console.log("Ocurrió un error", error);
  }
}

climaGigantes();

/*Collage de Imágenes*/

var imagenes = document.querySelectorAll(".imagen");
var index = 0;

function mostrarSiguienteImagen() {
  imagenes[index].style.display = "none"; // Oculta la imagen actual
  index = (index + 1) % imagenes.length; // Calcula el índice de la siguiente imagen
  imagenes[index].style.display = "block"; // Muestra la siguiente imagen
}

// Iniciar la presentación de diapositivas
setInterval(mostrarSiguienteImagen, 3000); // Cambiar de imagen cada 3 segundos
