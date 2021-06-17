const fs = require('fs');
    
const tablaMultiplicacion = async( multiplo, limite,callback) => {
    const multiplicar = ( contador ) => {
        if ( contador === limite )
            return null;
        else{
            tabla = `${ multiplo } por ${ contador } es igual a  ${ multiplo * contador}\n`            
            return tabla + multiplicar( contador+1 );
        }
    }
    console.clear();
    console.log( "=============" );
    console.log(  `tabla del ${multiplo} ` );
    console.log( "=============" );       
    try{
        const tablaMultiplicar = multiplicar(0);
        callback(tablaMultiplicar);
        return ( tablaMultiplicar );
    }catch{
        throw( "error al  multiplicar" );
    }


}

    module.exports={
        //tablaMultiplicacion : tablaMultiplicacion
        tablaMultiplicacion
    } 