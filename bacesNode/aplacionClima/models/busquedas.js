const axios = require('axios');


class Busquedas {
    historial = [ ];
    inicador = 0;
    constructor( ){
        //todo: leer DB si existe
    }
    actualizarHistorial ( data ){
        let contador = 0;
        data.forEach(( element, i ) => {
            this.historial[i] = element;
            contador = i+1;
        });
        this.inicador = contador;
        

    }
    get paramsMapbox (){
        return {
            'access_token' : process.env.MAPBOX_KEY,
            'limit'        : '10',
            'lenguage'     : 'es'
        }
    }

    guardarBusqueda ( lugar = " "){
        this.historial[this.inicador] = lugar
        this.inicador += 1
        if ( this.inicador === 5 ){
            this.inicador=0;
        }

        return this.historial
    }
    
    async ciudad ( lugar = ''){

        try{
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                
                params:this.paramsMapbox

            });

            const respuesta = await  instance.get();
            const datos = respuesta.data.features.map( lugar => {

                return {
                    id: lugar.id,
                    nombre: lugar.place_name,
                    lng: lugar.center[0],
                    lat: lugar.center[1],
                }
            });

            return  datos;
             // retornar lugares  que xconcidasn

        }catch( err )  {
            return err;
        }
        
        
    }
}


module.exports =  Busquedas;