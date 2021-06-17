const fs = require('fs');
const { tablaMultiplicacion } = require('./multiplicar/multiplicar');

let[ , ,base = "base=5", limite = "limite=11"] =process.argv;
[,base ] = base.split('=');
[,limite ] = limite.split('=');
console.log( base + "  " + limite );

tablaMultiplicacion( parseInt( base ), parseInt( limite ), ( tabla ) => {
    fs.writeFile( `tabla${base}.txt`, tabla, (err) => {
        if(err) throw err
        console.log("tabla creada");
    });
})
.then( ( tabla )=> console.log(tabla))
.catch( ( err ) => console.log( err ));
