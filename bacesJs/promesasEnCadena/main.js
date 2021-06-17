
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

const id =75
let nombreEmpleado;
getEmpleado( id )
 .then( empleado => getSalario( id ))
 .then( salario => console.log( salario ) )
 .catch( err => console.log( err ))
 //.catch( err => console.log( err  ))

getEmpleado( id )
    .then( empleado => {
        nombreEmpleado = empleado
        return getSalario( id )
    })
    .then ( salario => console.log("el empleado "+ nombreEmpleado +  " con salario " + salario))
    .catch ( err => console.log( err ) );