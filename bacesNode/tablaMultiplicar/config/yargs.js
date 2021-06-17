const argv = require('yargs')
    .options('b',{
        alias:"base",
        type:"number",
        demandOption:true
    })
    .options('li',{
        alias:"limite",
        type:"number",
        default:11
    })
    .options('l',{
        alias:"listar",
        type:"boolean",
        default:false
    })
    .check((argv,options) => {
       if( isNaN( argv.b ) ) {
           throw "la base tiene que ser un numero"
       }
        return true
    
    })
    .argv;

module.exports = {
    argv
}  ;