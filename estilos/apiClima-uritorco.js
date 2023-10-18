const url = `https://api.weatherapi.com/v1/current.json?key=14edc5fc17294bb7a8121911230709&q=capilla-del-monte`
async function climaCordoba(){
    try{
        const response = await fetch(url)
        const data = await response.json()
        console.log("Data", data);
        console.log("Data", typeof(data));
        console.log("Data", typeof(data.current));
        const info = data.current;
        console.log("current", info);
        console.log(`Cordoba ${info.feelslike_c}°`);
        console.log(`Icono ${info.condition.icon}`);


        var infoApi = document.querySelector('.infoApi');
        var imagen = document.querySelector('.imgApiClima');
        imagen.src = info.condition.icon;
        console.log(imagen.src);
        infoApi.innerText = `
        
        La Temperatura en Capilla del Monte es:
${info.feelslike_c}° , 
Vientos de  ${info.gust_kph} Kilómetros por Hora,
Actualización al ${info.last_updated} hora local
`;
    


    }catch(error){
        console.log("Ocurrió un error", error);
    }

}

climaCordoba()