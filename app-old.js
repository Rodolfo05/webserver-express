const http = require('http');

//para escuchar peticiones http primero se debe crear el servidor
http.createServer((req, res) => {

        res.writeHead(200, { 'Contente-Type': 'application/json' });

        let salida = {
            nombre: 'Intelleon',
            tipo: 'Agua',
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();

    })
    .listen(8080);
console.log("Escuchando el puerto 8080");