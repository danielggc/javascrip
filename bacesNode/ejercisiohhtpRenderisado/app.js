require('dotenv').config();
const express = require('express');
var hbs = require('hbs');
const app = express();


const port = process.env.PORT;

hbs.registerPartials(__dirname + '/views/partials', function (err) { console.log( err )});
app.use( express.static( 'public' ) );
app.set('view engine', 'hbs');



app.get( '/' ,( req, res ) => {
    res.render('home' ,{
        nombre : "dgc7",
        titulo : " pruebas Curso Node ",
        marca :  "guacamayo"
    });
});

app.get( '/generic',function( req, res ){
    res.render('generic');
});

app.get( '/elements',function( req, res ){
    res.render('elements');
});


app.get( '*', function( req,res ){
    res.send('404| paguina no encontrad=(')
});

app.listen(port,( ) => {
    console.log( ` esta app esta corriendo ente pajaro http://localhost:${port}` )
} );

