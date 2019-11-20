const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbsFolder/helpers');

//variables heroku - si no existe le pone 3000
const puerto = process.env.PORT || 3000;

//MIDDLEWARE: es una instruccion o callback que se ejecuta siempre sin importar la URL
app.use(express.static(__dirname + '/public'));
//dirname es para que no importe el path al montar la app en un sitio web
//toma todo el path y la concatena
hbs.registerPartials(__dirname + '/views/parciales');

//Express HBS engine
app.set('view engine', 'hbs');
// Al utilizar un template engine como el de arriba
// se puede renderizar o mandar la pagina completamente (hbs)
//res.render('home')

//se pueden mostrar css, js, etc, de dominio publico.


//Hay que tener cuidado con estados dos peticiones (use y get pueden chocar)
//Configuramos la solicitud get cuando el path sea un "/""
app.get('/', (req, res) => {

    //Envio variables como nombre y año
    res.render('home', {
        nombre: 'Intelleon'
    });



    //res.send('Hola Mundo');
    // let salida = {
    //         nombre: 'Intelleon',
    //         tipo: 'Agua',
    //         url: req.url
    //     }
    //     //Funcion send detecta el objeto JSON y lo serializa
    // res.send(salida);

});

app.get('/about', (req, res) => {

    //Envio variables como nombre y año
    res.render('about');

});


// app.get('/data', (req, res) => {

//     res.send("Hola Data");

// });


app.listen(3000, () => {
    console.log(`Escuchando aplicaciones en el puerto ${puerto}`);
});