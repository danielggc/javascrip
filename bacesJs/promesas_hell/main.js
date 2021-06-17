
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
    const promessa = new Promise( (resolve,rejecr) =>{
        const salarioUsuario = salario.find( ( e ) => e.id === id)?.cantidad
        if ( salarioUsuario ){
            resolve ( salarioUsuario )
        }else {
            rejecr(" no se encontro el id para salario ")
        }
    })
    return promessa
}


const id = 77    
getEmpleado( id )
    .then( empleado => console.log( empleado ) )
    .catch( err => console.log( err ))

console.log("\n ")

getSalario(id)
    .then( salario => console.log( salario ))
    .catch( (err) => console.log(err))

    //callback hell

getEmpleado( id )
    .then( empleado => (
        getSalario( id )
            .then( ( salario ) => console.log( "el usario : " + empleado+ "y su salario :"+ salario ))
            .catch( ( err ) => console.log( "el usuario " + empleado + " " + err ))
        )
    )
    .catch( (err) => console.log(err))
