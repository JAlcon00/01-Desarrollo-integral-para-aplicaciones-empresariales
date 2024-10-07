const express = require('express');
const app = express();

const port = 3000;


app.get('/', (req, res) => {
    
    res.send('Hola mundo');
}
);

app.get('/saludo', (req, res) => {
    res.send('Hola, como estas?');
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});