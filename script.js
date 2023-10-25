console.log('Nihar');

const API_key = "ad82c01a61e694c3d5ace0cd1db7f572" ;

async function fetchWeather(){
    try{
        let city = "goa";
           
        // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=imperial`);
        const data = await response.json();
        console.log("weather data:-> ", data);
    
        // let newPara = document.createElement('p');
        // newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`
    
        // document.body.appendChild(newPara);
    }

    catch(err){
        console.log("Error Found ", err);

    }

}
