const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write(req.url);
    res.write('<h1> Hola mundo </h1>');
    res.write('<h2> Hola mundo </h2>');
    res.write('<ul><li>Js</li><li>Python</li><li>Java</li></ul>')
    res
    res.end(req.method);
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});



