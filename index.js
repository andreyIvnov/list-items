const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app
const port = 4200;                  //The port number where server will be listening
const json = require('./links.json')
//Idiomatic expression in express to route and respond to a client request (Routing)
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/test', function (req, res) {
    res.json({ res: json });
});
app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});