const https = require('https');
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
var compression = require('compression')
require('dotenv').config();
// const corsOptions = process.env.CORS_OPTION;
const Port = process.env.PORT




const privateKey = fs.readFileSync('server.key', 'utf8');
// console.log('private0------------>key------->',privateKey)
const certificate = fs.readFileSync('server.cert', 'utf8');
const credentials = { key: privateKey, cert: certificate };

const corsOptions = {
    origin: ['http://localhost:3000', 'https://192.168.1.10:5000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
};

app.use(cors(corsOptions));
app.use(compression())
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));


//Require routes
const routes = require('./src/routes')
//using as middleware
app.use('/api', routes);

// set port, listen for requests
const port = Port || 5000;
// const port = Port || 5000;
const ip = '192.168.1.8'

// app.listen(port, ip, () => {
//     // console.log(`Server is listening on port http://${port}/api/send-notification`);
//     console.log(`Server is listening on port https://${ip}:${port}/api/send-notification`);
// })

https.createServer(credentials, app).listen(port, ip, () => {
    console.log(`Server is listening on https://${ip}:${port}/api/send-notification`);
});
