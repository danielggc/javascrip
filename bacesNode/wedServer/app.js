const express = require('express');
const app = express();
const port = 8080;

app.use( express.static( 'public' ) );

app.get( '/hola-Mundo',function( req, res ){
    res.sendFile(__dirname + '/public/holaMundo/index.html');
});

app.get( '*', function( req,res ){
    res.send('404| paguina no encontrad=(')
});

app.listen(port,( ) => {
    console.log( ` esta app esta corriendo ente pajaro http://localhost:${port}` )
} );

console.log("escuchacndo porl elpueto 8080")
