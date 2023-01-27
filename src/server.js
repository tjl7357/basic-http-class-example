const http = require("http");
const fs = require("fs");

const port = process.env.PORT || process.env.NODE_PORT || 3000;
const index = fs.readFileSync(`${__dirname}/../client/client.html`);


const onRequest = (request, response) => {
    response.writeHead(200, {
        "Content-Type" : "audio/mpeg"
    });

    response.write(index);
    response.end();
};

http.createServer(onRequest).listen(port, () => {
    console.log(`Server running on port ${port}.`);
});