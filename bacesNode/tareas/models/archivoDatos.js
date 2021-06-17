const fs = require('fs')
const dir = "./db/data.json";

const guardarDB = ( data ) => {
    fs.writeFileSync( dir, JSON.stringify( data ) );
    return true;

}

const leerDB = ( ) => {
    if ( ! fs.existsSync(dir) ){
        return null;    
    }
    const data = fs.readFileSync(dir,{encoding:'utf8', flag:'r'});
    return JSON.parse( data ) ;

}

module.exports = {
    guardarDB,
    leerDB
}