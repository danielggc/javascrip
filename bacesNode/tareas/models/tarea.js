const { right } = require('inquirer/lib/utils/readline');
const { v4 :uudiv4 } = require('uuid');
class Tarea {
    id = '';
    desc = '';
    copletadoEn = null;

    constructor ( desc ) {
        
        this.id   = uudiv4();          
        this.desc = desc;
        this.copletadoEn = null

    }
}
module.exports = Tarea