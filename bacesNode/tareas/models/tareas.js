const Tarea = require("./tarea");
const inquiere = require('inquirer');

class Tareas {
    _listado = {};

    listadoArr ( ) {
        const listado = [];
        Object.keys( this._listado ).forEach( element => {
            const tarea = this._listado[ element ];
            listado.push(tarea);
        });
        return listado;
    }
    constructor () {
        this._listado ={};
    }

    cargarTareasFromArray ( tareas = [ ] ){
        tareas.forEach( element => {
            this._listado[element.id] =  element;
        });
    }
     
    borrarTarea ( id = ''){

        if ( this._listado[id] ){
            delete this._listado[id];
        }

    }

    listarTareas  ( ) {
        const  menutareas = {
            type : 'list',
            name : 'option',
            message : 'estas son sus tareas ',
            choices : [

            ]
        }
        let contador =0;
        const tareas = this.listadoArr();
        tareas.forEach( ( element, i ) => {
            const menu  = ( element.copletadoEn ) 
                                ? {name: `${contador}. `.green + element.desc + " :: Completado".blue, value: element.id} 
                                : {name: `${contador}. `.green + element.desc + " :: pendiente".red, value: element.id};
                                 
            menutareas.choices[i] = menu;
            contador = i
        });
        contador +=1
        menutareas.choices[contador] = { name:`${contador}.`.green+"salir", value : '0' }
        return menutareas;
        
    }
    listarTareasCheck ( ) {
        const  menutareas = {
            type : 'checkbox',
            name : 'option',
            message : 'selecione las tareas ',
            choices : [

            ]
        }
        let contador = 0;
        const tareas = this.listadoArr();
        tareas.forEach((element)=>{
            const {decs, copletadoEn, id } = element;
            if ( copletadoEn === null){
                const menu  = {name: `${contador}. `.green + element.desc , value:  id };
                menutareas.choices[contador] =  menu;
                contador += 1;    
            }      
        });
        return menutareas;
        
    }
    listarTaresCompletadas( opcion ) { 
        const  menutareas = {
            type : 'list',
            name : 'option',
            message : 'estas son sus tareas  ',
            checked:true,
            choices : [

            ]
        }
        let contador = 0;
        const tareas = this.listadoArr();
        tareas.forEach((element)=>{
            const {desc, copletadoEn, id } = element;
            if ( copletadoEn !== null ) {
                const menu =   {name: `${contador}. `.green + `${desc} , :: ${copletadoEn}`   , value: id};
                menutareas.choices[contador] =  menu;
                contador += 1;
            }
          
        });
        menutareas.choices[contador] = { name:`${contador}. `.green+"salir", value : 0 }
        return menutareas;

    }
    listarTaresImpcompletas( opcion ) { 
        const  menutareas = {
            type : 'list',
            name : 'option',
            message : 'estas son sus tareas  ',
            choices : [

            ]
        }
        let contador = 0;
        const tareas = this.listadoArr();
        tareas.forEach((element)=>{
            const {desc, copletadoEn, id } = element;
            if ( copletadoEn === null){
                const menu  = {name: `${contador}. `.green + desc , value:  id };
                menutareas.choices[contador] =  menu;
                contador += 1;    
            }      
        });
        menutareas.choices[contador] = { name:`${contador}. `.green+"salir", value :'0'};        
        return menutareas;

    }
    
    completartareas( ids = [ ]){
        ids.forEach((element)=>{
            this._listado[element].copletadoEn = new Date().toISOString();
            console.log(element);
        })
        console.log("========".blue)
        console.log("tareas completadas".green)
        console.log("========".blue)
    }
    crearTarea( desc = '' ){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    
}

module.exports = Tareas