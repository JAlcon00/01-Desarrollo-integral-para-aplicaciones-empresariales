const fs = require ('fs');
//console.log(fs);

const leerArchivo = (err, data) => {
    err ? console.log("Error", err) : console.log(data.toString());
}

fs.readFile('archivo.txt', leerArchivo);

const escribirArchivo = (err) => {
    err ? console.log("Error", err) : console.log("Archivo creado");
}

fs.writeFile('nuevoArchivo.txt', 'Hola mundo', escribirArchivo);

fs.unlink('nuevoArchivo.txt', (err) => {
    err ? console.log("Error", err) : console.log("Archivo eliminado");
});

fs.mkdir('nuevaCarpeta', (err) => {
    err ? console.log("Error", err) : console.log("Carpeta creada");
});

fs.rmdir('nuevaCarpeta', (err) => {
    err ? console.log("Error", err) : console.log("Carpeta eliminada");
});

fs.readdir('Practicas', (err, files) => {
    err ? console.log("Error", err) : console.log(files);
});

//copiar un archivo
fs.copyFile('archivo.txt', 'copiaArchivo.txt', (err) => {
    err ? console.log("Error", err) : console.log("Archivo copiado");
});

//Mover archivo de carpetas
fs.rename('copiaArchivo.txt', 'Practicas/copiaArchivo.txt', (err) => {
    err ? console.log("Error", err) : console.log("Archivo movido");
});


//Leet todos los archivos y carpetas de nuestro directorio y vamos a crear un front-end que muestre los archivos y carpetas con iconos usando bootstrap icons.
const http = require('http');
const path = require('path');
const url = require('url');

const server = http.createServer((req, res) => {
    const ruta = url.parse(req.url, true);
    let rutaArchivo = path.join(__dirname, ruta.pathname);
    console.log(rutaArchivo);

    if (fs.existsSync(rutaArchivo)) {
        fs.readdir(rutaArchivo, (err, files) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('Internal Server Error');
                res.end();
            } else {
                let data = '';
                files.forEach(file => {
                    let icon = '<img src="https://img.icons8.com/ios/452/file.png" width="20" height="20">';
                    if (fs.lstatSync(path.join(rutaArchivo, file)).isDirectory()) {
                        icon = '<img src="https://img.icons8.com/ios/452/folder-invoices.png" width="20" height="20">';
                    }
                    data += `<li>${icon} ${file}</li>`;
                });
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('Not Found');
        res.end();
    }
});