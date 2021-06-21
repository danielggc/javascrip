const fs = require('fs');
colors = require('colors');
const inquiere = require('inquirer');

const menuHolamundo=[
    {
        type : 'list',
        name : 'option',
        message : 'hola como estas',
        choices  :  [

            {
                name  : "1.".green+" buscar ciudad ",
                value : '1'
            },
            {
                name : `${`2.`.green} Historial `,
                value : '2'
            },
            {
                name : `${`3.`.green} salir `,
                value : "salir"

            },
    
        ]
        
    }

]

const menu = async () => {
    console.clear();
    console.log("============".blue);
    console.log(" elija una opcion".blue);
    console.log("============\n".blue); 
    const { option } =await inquiere.prompt(menuHolamundo);
    return option;
}

const crearMenu =async ( arreglo ) => {
    console.clear();
    const { option } = await inquiere.prompt( arreglo );
    return option;
}

const pausa = ()  => {
    return new Promise((resolve)=> {
        const readLine = require('readline').createInterface({
            input : process.stdin,
            output : process.stdout
        })
        readLine.question('precione'+'ENTER'.blue +" continuar",()=>{
            readLine.close();
            resolve();
        });
    })
   
}


const menuOpciones = async ( datos = [ ]) => {
    const  menutareas = {
        type : 'list',
        name : 'option',
        message : 'estas son sus tareas  ',
        checked:true,
        choices : [

        ]
    }
    menutareas.choices = datos.map( (lugares,i) => {
        return {
            name  : i+". ".red+lugares.nombre,
            value : lugares.id,
        }
    })

    return await crearMenu(menutareas)
    .then ( ( opcion ) => {
        return opcion;
    })
    .catch ( err =>{
        return err;
    })
}
const leerInput = async ( mensage ) =>  {
    const question = [
        {
            type : 'input',
            name : 'decs' ,
            message : mensage ,
            validate( value ){
                 if( value.length === 0 ) {
                    return 'por fabor ingrese un valor';
                 }
                 return true
            }
        }
    ]
    const desc  = await inquiere.prompt(question);
    return desc.decs;

}
const confirmar = async ( message ) => {
    const question = [
        {    
            type: 'confirm',
            name: 'Ok',
            message
        }
    ];    
    const { Ok } = await inquiere.prompt( question );
    return Ok;

}
module.exports = {
    menu : menu,
    pausa : pausa,
    leerInput : leerInput,
    crearMenu,
    confirmar,
    menuOpciones,

}