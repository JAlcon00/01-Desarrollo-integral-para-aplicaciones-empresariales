import * as http from 'http';
import * as fs from 'fs';
const PUERTO = 3000;

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');

    // Simple Router
    let ruta = './views';
    switch (req.url) {
        case '/':
            ruta += '/index.html';
            res.statusCode = 200;
            break;
        case '/about':
            ruta += '/about.html';
            res.statusCode = 200;
            break;
        case '/productos':
            ruta += '/productos.html';
            res.statusCode = 200;
            break;
        case '/servicios':
            ruta += '/servicios.html';
            res.statusCode = 200;
            break;
        case '/contact':
            ruta += '/contacto.html';
            res.statusCode = 200;
            break;
        default:
            ruta += '/404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(ruta, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end('404 Not Found');
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });

});

server.listen(PUERTO, () => {
    console.log('Servidor en el puerto 3000');
});