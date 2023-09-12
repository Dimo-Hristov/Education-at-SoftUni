const http = require('http');
const homeHtml = require('./views/home/index');



const server = http.createServer((req, res) => {
    console.log(req.url);

    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(homeHtml)
    } else if (res.url == '/content/styles/site.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(homeHtml)
    }

    res.end();
})

server.listen(5000, () => console.log('Server is running on port 5000...'));