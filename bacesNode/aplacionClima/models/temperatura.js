
const axios = require('axios');
const { registerPrompt } = require('inquirer');


class Temperatura  {

    get openweathermap (){
        return {
            'appid' :  process.env.OPENWEATHER_KEY,
            'units' :  'metric',
            'lang'  :  'es'

        }
    }
    async temperaturaCiudada  ( lon, lat ) { 
        try{
            const instace = axios.create({
                baseURL : `https://api.openweathermap.org/data/2.5/weather`,
                params : {...this.openweathermap,lon,lat},
            })
            const respuesta =  await instace.get();    
            const {main, weather} = respuesta.data

            return {
                temp_min : main.temp_min,
                temp_max  : main.temp_max,
                temp     : main.temp,
                desc     : weather[0].description,
            };
        }
        catch ( err ) {
            return err;
        }
        
        
    }

}

module.exports = Temperatura;