const fs = require('fs');
const { tablaMultiplicacion } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors')

const limite = argv.limite;
const base = argv.base;
const listar = argv.listar

tablaMultiplicacion(base, limite , listar )
    .then( ( tabla )=> {
        if ( listar )
            console.log(tabla)

    })
    .catch( ( err ) => console.log( err ));
 