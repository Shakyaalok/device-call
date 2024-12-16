// const https = require('https');
const http = require('http');
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const helmet = require('helmet') // to hide headers
const compression = require('compression') // to reduce the size of the response
require('dotenv').config();
const Port = process.env.PORT

app.use(helmet());
app.use(compression(
    {
        level:6, // compression level,
        threshold:0
    }
))

const privateKey = fs.readFileSync('server-key.pem', 'utf8');
const certificate = fs.readFileSync('server-cert.pem', 'utf8');
const credentials = { key: privateKey, cert: certificate };


const server = http.createServer(credentials, app)
  

const corsOptions = {
    origin: ['http://localhost:3000', 'https://192.168.1.11:5000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
};



app.use(cors(corsOptions));
app.use(compression())
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));


//Require routes
const routes = require('./src/routes')

//using as middleware
app.get('/',(req,res)=>{
    res.send('this is working')
})
app.use('/api', routes);


const port = 5500;
// const port = Port || 5000;
const ip = '192.168.1.12'


server.listen(port, ip, () => {
    console.log(`Server is listening on https://${ip}:${port}/api/send-notification`);
});
