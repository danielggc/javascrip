const { Console } = require('console');
const fs = require('fs');
    
const tablaMultiplicacion = async( multiplo, limite,listar) => {
    const multiplicar = ( contador ) => {
        if ( contador === limite )
            return null;
        else{
            tabla = `${ multiplo } por  ${ contador } es igual ` + ` ${ multiplo * contador}\n`.green            
            return tabla + multiplicar( contador+1 );
        }
    }
    if(listar===true){
        console.clear();
        console.log( "=============".blue );
        console.log(  `tabla del ${multiplo} `.bgGreen );
        console.log( "=============".blue );       
    }
   
    const tablaMultiplicar = multiplicar(0);
   

    try{
        fs.writeFile( `./salida/tabla${multiplo}.txt`, tablaMultiplicar, (err) =>{
            if ( err ) throw  err 
            console.log("tabla creada".green);
        });
        return ( tablaMultiplicar ); 
    }catch( error ){
        throw( "error al crear la tabla \n ".red + error);
    }


}

    module.exports={
        //tablaMultiplicacion : tablaMultiplicacion
        tablaMultiplicacion
    } 