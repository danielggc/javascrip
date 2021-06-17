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
const getNombreEmpleados=(tabla) => {
    console.log(tabla[0].nombre);
    const datos = (contador) => {
        if(tabla[contador] === undefined){
            return datos[contador]
        }
        else {
            return nombres = tabla[contador].nombre + datos(contador +1)
        }
       
    }
    const dd  = datos(0)
    console.log(dd)

};



const getEmpleado = (id,callback) => {
    const empleado  = personal.find((e) =>  e.id === id);
    if (empleado){
        callback(null,empleado.nombre ); //otra forma de debolver
    }
    else{
        callback ( ` empleado con id ${id} no existe `,null);
    }

};

const getSalario =( id, callback ) => {
    const salarioEmpleado = salario.find( (e) => e.id === id )?.cantidad /// importante
    if( salarioEmpleado ){
        callback( null,salarioEmpleado )
    }
    else{
        callback( `empleado con id ${id} no existe `,null )
    }
}

getEmpleado(77 , ( err,empleado ) => {
    if ( err ){
        console.log('ERROR!')
        return console.log(err)
    }
    console.log(empleado)
    
})

getSalario(77, ( err,salario ) => {
    if ( err ){
        console.log('ERROR!')
        return console.log(err)
    }
    console.log(salario+'\n')
})



//nunca hacer 


getEmpleado(77 , ( err,empleado ) => {
    if ( err ){
        console.log('ERROR!')
        return console.log(err)
    }
    console.log(empleado)
    getSalario(77, ( err,salario ) => {
        if ( err ){
            console.log('ERROR!')
            return console.log(err)
        }
        console.log('el salario del  usuario :'+empleado+' y su salario ' +  salario)
    })
})