const fs = require('fs');
colors = require('colors');
const inquiere = require('inquirer');
const menu = () => {
    return new Promise((resolve) => {
        console.clear();

        console.log("============".blue);
        console.log(" elija una opcion".blue);
        console.log("============\n".blue);
        /*
        console.log(`1. crear tarea `);
        console.log(`2. listar tareas`);
        console.log(`3. listar tareas copletadas`);
        console.log(`4. listar tareas pendientes`);
        console.log(`5. completar tarea(s)`);
        console.log(`6. borrar tarea`);
        console.log(`0. salir`);
        */
        const readLine = require('readline').createInterface({
            input : process.stdin,
            output : process.stdout
        })
        readLine.question('selecione una opcion :', ( opt ) => {
            readLine.close();
            resolve ( opt );
            
        })
    });

}

const pausa = ( ) => {
    return new Promise(( resolve ) => {
        const readLine = require('readline').createInterface({
            input : process.stdin,
            output : process.stdout
        })
        readLine.question('precione '+'ENTER'.green+' par acontinuar', (opt ) => {
            readLine.close();
            resolve();
        })
    })

}


module.exports = {
    menu : menu,
    pausa : pausa,
}