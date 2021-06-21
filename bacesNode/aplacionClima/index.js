const { menuOpciones  , menu, leerInput, pausa, crearMenu }  = require("./helpers/menu");
const Busquedas   = require("./models/busquedas");
const Temperatura = require("./models/temperatura");
const { guardarDB , leerDB  } = require("./helpers/archivoDatos");
require('dotenv').config();

const  main = async( ) => {
    const busquedas = new Busquedas();
    const temperatura = new Temperatura();
    //const datosjson = leerDB( );
    //busquedas.actualizarHistorial( datosjson );
    let option ;
    do{
        option = await menu();
        switch( option ) {
            case '1': 
               
                const datoBusqueda   = await leerInput( "ciudad a consultar  temperatura ")
                const lugares = await busquedas.ciudad( datoBusqueda )
                const opcionLugar =  await menuOpciones(lugares);
                const lugarSelecionado = lugares.find( l => l.id === opcionLugar)
                busquedas.agregarHistorial( lugarSelecionado.nombre );
                //const guardarHistorial = busquedas.guardarBusqueda(lugarSelecionado.nombre);
                const respuestaTemperaturaCiudad = await temperatura.temperaturaCiudada( lugarSelecionado.lng, lugarSelecionado.lat );
                console.log( "\n Informacion de la ciudad \n ".blue );
                console.log( " ciudad                 : ".green + lugarSelecionado.nombre);
                console.log( " lat                    : ".green + lugarSelecionado.lat );
                console.log( " lng                    : ".green + lugarSelecionado.lng);
                console.log( " Temperatura            : ".green + respuestaTemperaturaCiudad.temp );
                console.log( " minima                 : ".green + respuestaTemperaturaCiudad.temp_min );
                console.log( " maxima                 : ".green + respuestaTemperaturaCiudad.temp_max );
                console.log( " descripcion del clima  : ".green + respuestaTemperaturaCiudad.desc );                
                //guardarDB( guardarHistorial );
            break

            case '2':

                const historial = busquedas.historialCapitalizado;
                historial.forEach( (element, i ) => {
                    const idx = ` ${ i } . `.green + ` ${ element } `;
                    console.log( idx )
                })

            
            break

        }
        await pausa();

    }while(option !== "salir" );
}

main();