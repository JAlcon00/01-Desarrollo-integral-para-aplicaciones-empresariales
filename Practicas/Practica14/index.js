const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');

const leerArchivosRecursivamente = (dir) => {
    const archivos = [];
    const elementos = fs.readdirSync(dir);

    elementos.forEach(elemento => {
        const rutaCompleta = path.join(dir, elemento);
        const esDirectorio = fs.lstatSync(rutaCompleta).isDirectory();
        if (esDirectorio) {
            archivos.push({
                nombre: elemento,
                esDirectorio: true,
                contenido: leerArchivosRecursivamente(rutaCompleta)
            });
        } else {
            archivos.push({
                nombre: elemento,
                esDirectorio: false
            });
        }
    });

    return archivos;
};

const server = http.createServer((req, res) => {
    const ruta = url.parse(req.url, true);
    let rutaArchivo = path.join(__dirname, ruta.pathname);

    if (ruta.pathname === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('Internal Server Error');
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            }
        });
    } else if (ruta.pathname === '/archivos') {
        try {
            const archivos = leerArchivosRecursivamente(__dirname);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify(archivos));
            res.end();
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ error: 'Internal Server Error' }));
            res.end();
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('Not Found');
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});