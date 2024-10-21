const express = require('express');
const app = express();
 

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    const blogs = [
        {titulo: 'Yoshi finds eggs', autor: 'Jesus Almanza', contenido: 'Lorem ipsum dolor sit amet consectetur'},
        {titulo: 'Mario finds stars', autor: 'Jesus Almanza', contenido: 'Lorem ipsum dolor sit amet consectetur'},
        {titulo: 'How to defeat bow bow', autor: 'Jesus Almanza', contenido: 'Lorem ipsum dolor sit amet consectetur'},
        {titulo: 'Zelda final level', autor: 'Jesus Almanza', contenido: 'Lorem ipsum dolor sit amet consectetur'},
        {titulo: 'Why princess is in another castle', autor: 'Jesus Almnaza ', contenido: 'Lorem ipsum dolor sit amet consectetur'}


        
    ];
    //res.sendFile( __dirname + '/views/inicio.ejs', { title: 'Inicio', blogs });
    res.render('inicio', { titulo: 'Hola Mundo', blogs });
});
 
app.get('/nosotros', (req, res) => {
    res.sendFile(__dirname + '/views/nosotros.html');
}   );
 
app.get('/productos', (req, res) => {
    res.sendFile(__dirname + '/views/productos.html');
});
 
app.get('/contacto', (req, res) => {
    res.redirect('/nosotros');
});
 
 
// Middleware para manejar errores 404
app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/views/404.html');
});
 
 
app.listen(3000, () => {
    console.log("Servidor activo en el puerto 3000")
});