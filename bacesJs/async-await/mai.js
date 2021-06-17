
const personal =[
    { 
        nombre:"dgc7",
        id:77
    },
    {
        nombre:"jj55",
        id:55
    },
    {
        nombre:"ss75",
        id:75
    }

];

const salario =[
    { 
        cantidad:1200,
        id:77
    },
    {
        cantidad:500,
        id:55
    },
  
 
 ];




const getEmpleado = ( id ) => {
    return new Promise ( (resolve, rejecr) => {
        const empleado  = personal.find(( e ) =>  e.id === id)?.nombre;
        
        ( empleado )        
            ? resolve( empleado )
            : rejecr( "no eciste el empleado con id "+id );
    });

};

const getSalario = ( id ) => {
    return  new Promise( ( resolve, rejecr ) =>{
        const salarioUsuario = salario.find( ( e ) => e.id === id)?.cantidad;
        ( salarioUsuario )
            ? resolve ( salarioUsuario )
            : rejecr(" no se encontro el id para salario ")
        
    });

};


const ERRORgetInfoUsuario = async( id ) => {
    try{
        const empleado = await getEmpleado( id );
        const salario  = await getSalario( id );
        return ( "el empleado :" + empleado + " ti un salario " + salario );
    }catch( error ){
        return error
    }
};
const id = 75
ERRORgetInfoUsuario( id )
    .then( (informacion) =>{
        console.log("todo salio bien"); 
        console.log( informacion );
    })
    .catch( (err) => {
        console.log("hola estamos en un daño");
        console.log(err);
    })
///notar diferencia

const getInfoUsuario = async( id ) => {
    try{
        const empleado = await getEmpleado( id );
        const salario  = await getSalario( id );
        return ( "el empleado :" + empleado + " ti un salario " + salario );
    }catch( error ){
        throw error
    }
};



getInfoUsuario( id )
    .then( ( msg ) =>{
        console.log("todo salio bien"); 
        console.log( msg );
    })
    .catch( ( err ) => {
        console.log("hola estamos en un daño");
        console.log( err );
    })