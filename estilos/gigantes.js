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
    <p>    
        Temperatura: <b> ${info.feelslike_c}° </b> <br>
           Vientos:  ${info.gust_kph} Km/H <br>
           Humedad:  <b> ${info.humidity}% </b> <br>
           ${info.last_updated} hs<br>
    </p>
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

// Uso de Vue

const { createApp } = Vue;

createApp({
  data() {
    return {
      listrefugios1: [
        { nombre: "Del Pilar", telefono: 3514215283 },
        { nombre: "Villa Amelita", telefono: 3541628510 },
        { nombre: "Casas Nuevas", telefono: 3541608466 },
        { nombre: "Casas Nuevas", telefono: 3515578068 },
      ],
    };
  },
}).mount("#refugios1");

