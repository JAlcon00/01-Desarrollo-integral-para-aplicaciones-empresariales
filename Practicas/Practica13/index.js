const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hola practica 12');
});

app.get('/saludo', (req, res) => {
    res.send('Hola, ¿cómo estás?');
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
