const axios = require('axios');
const fs = require('fs');


class Busquedas {
    historial = [ ];
    inicador = 0;
    dbPath = "./db/database.json";

    constructor( ){
        //todo: leer DB si existe
        this.leerDb( );
    }
    actualizarHistorial ( data ){
        let contador = 0;
        data.forEach(( element, i ) => {
            this.historial[i] = element;
            contador = i+1;
        });
        this.inicador = contador;
        

    }

    get historialCapitalizado ( ) {
        return this.historial.map ( lugar => {
            let palabras = lugar.split(' ');
            palabras = palabras.map(  p => p[0].toUpperCase() + p.substring(1));
            return palabras.join(' ');
        })
    }
    get paramsMapbox ( ){
        return {
            'access_token' : process.env.MAPBOX_KEY,
            'limit'        : '10',
            'lenguage'     : 'es'
        }
    }
// otra forma de hacerlo 
    guardarBusqueda ( lugar = " "){
        this.historial[this.inicador] = lugar
        this.inicador += 1
        if ( this.inicador === 5 ){
            this.inicador=0;
        }

        return this.historial
    }

//una forma de hacerlo para guardar historial
    agregarHistorial( lugar = '' ){
        if ( this.historial.includes( lugar.toLocaleLowerCase( ) ) ){
            return ;
        }
        this.historial = this.historial.splice(0,5);
        this.historial.unshift( lugar.toLocaleLowerCase( ) );
        this.guardarDb();
    }

    guardarDb( ){
        const payload  = {
            historial : this.historial,
        }
        fs.writeFileSync( this.dbPath , JSON.stringify( payload ) );
    }

    leerDb( ){
        if( !fs.existsSync( this.dbPath ) ){
            return;
        }
        const datos = fs.readFileSync( this.dbPath, {encoding:'utf8', flag:'r'});
        const historialData =JSON.parse( datos ); 
        historialData.historial.forEach( (element, i ) => {
            this.historial[i] = element;
        })
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