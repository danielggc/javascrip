const express = require('express');
const app = express();

app.get( '/',function( req, res ){
    res.send('holamundo')

})
app.get( '*', function( req,res ){
    res.send('404| paguina no encontrad=(')
})
app.listen(8080)
console.log("escuchacndo porl elpueto 8080")