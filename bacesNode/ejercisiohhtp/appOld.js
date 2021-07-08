const http = require('http');

http.createServer( (req, res ) => {
    res.writeHead( 200, {'content-Type': 'application/json'})
    const persona = {
        id:1,
        nombre:'dgc7'
    };

    res.write( JSON.stringify( persona ) );
    console.log(req);
    res.end();
}).listen( 8080 );
console.log("escuchando en el puerto 8080", 8080);