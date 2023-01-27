const fs = require("fs");

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const client2 = fs.readFileSync(`${__dirname}/../client/client2.html`);

const serveIndexPage = (request, response) => {
    response.writeHead(200, {
        "Content-Type" : "text/html"
    });

    response.write(index);
    response.end();
};

const serveSecondPage = (request, response) => {
    response.writeHead(200, {
        "Content-Type" : "text/html"
    });

    response.write(client2);
    response.end();
};

module.exports = {
    serveIndexPage,
    serveSecondPage
}