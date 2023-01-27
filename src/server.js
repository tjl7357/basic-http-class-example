const http = require("http");
const htmlResponse = require("./htmlResponse.js");

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
    switch (request.url){
        case "/":
            htmlResponse.serveIndexPage(request, response);
            break;
        default:
            htmlResponse.serveSecondPage(request, response);
    };
};

http.createServer(onRequest).listen(port, () => {
    //console.log(`Server running on port ${port}.`);
});