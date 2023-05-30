let http = require('http');
const path = require('path');
const fs = require('fs');

http.createServer(function (req, res) {
    sendResponse(req.url, res);
  }).listen(8080);


function sendResponse(pageName, res) {
    const pathToFile = path.join(__dirname, `pages${pageName}.html`);
    fs.readFile(pathToFile, 'utf8' , (err, data) => {
        if (err) {
            fs.readFile(path.join(__dirname, `pages/404.html`), 'utf8', (err, data) => {
                if (err) {
                    console.error(err);
                    res.writeHead(500, {'Content-Type': 'text/plain'});
                    res.end("An error occurred while trying to load the page");
                    return;
                } else {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(data);
                }
            });
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
}