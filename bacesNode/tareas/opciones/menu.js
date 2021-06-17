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
                name  : "1.".green+" crear tarea ",
                value : '1'
            },
            {
                name : `${`2.`.green} listar tareas`,
                value : '2'
            },
            {
                name : `${`3.`.green} listar tareas copletadas`,
                value : '3'

            },
            {
                name : `${`4.`.green} listar tareas pendientes`,
                value : '4'
                
            },
            {
                name : `${`5.`.green} completar tarea(s)` ,
                value : '5'
            },
            {
                name : `${`6.`.green} borrar tarea` ,
                value : '6'
            },
            {
                name : `${`0.`.green} salir` ,
                value : '0'
            }

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
    confirmar

}