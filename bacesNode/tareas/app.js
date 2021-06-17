const { confirmar,crearMenu,menu , pausa , leerInput } = require("./opciones/menu")
const Tarea = require("./models/tarea");
const Tareas = require("./models/tareas");
const {  guardarDB , leerDB } = require("./models/archivoDatos");


main = async() => { 
    let option;
    const tareas = new Tareas();
    const tareasPendientes = leerDB();
    tareas.cargarTareasFromArray( tareasPendientes );
  
    do {
        option = await menu();
        switch ( option ) {
            case '1' :
                const desc  = await leerInput( " por fabor ingrese la dsescripcion de la tarea : " );
                tareas.crearTarea(desc);
            break
            case '2':
                const objetoTarea = [tareas.listarTareas()];
                const obcionTareas = await crearMenu( objetoTarea );
            break
            case '3':
               const objetoTareaCompletadas = tareas.listarTaresCompletadas( );
               const opcionTareasCompletas = await crearMenu( objetoTareaCompletadas );
            break
            case '4':
                const objetoTareaIncomplestas = tareas.listarTaresImpcompletas( );
                const opcionTareasImcomplestas = await crearMenu( objetoTareaIncomplestas );
            break
            case '5':
                const opcionesSelecionadas = await crearMenu( tareas.listarTareasCheck() );
                tareas.completartareas( opcionesSelecionadas );
            break
            case '6':
                let optionBorrarTarea;
                do{ 
                    
                    optionBorrarTarea = await crearMenu( tareas.listarTareas( ) );
                    if( optionBorrarTarea !== '0' ){
                        const respesta = await confirmar(" estas seguro que deceas borrar  esta tarea ? :");
                        if ( respesta === true ){
                            console.clear();
                            tareas.borrarTarea(optionBorrarTarea);
                            console.log("===================".blue);
                            console.log("tarea borrada ¡¡¡¡¡".red);
                            console.log("===================".blue);
                            await pausa();
                        }
                    }                   
                }while ( optionBorrarTarea !== '0');
            break
            }
           
        await pausa();
        guardarDB( tareas.listadoArr() )
    } while (  option !== '0');
    console.log(option)
  
};
main();