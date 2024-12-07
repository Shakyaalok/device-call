const https = require('https');
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();


// const options = {
//   key: fs.readFileSync('/etc/letsencrypt/live/university.qvolv.com/privkey.pem'),
//   cert: fs.readFileSync('/etc/letsencrypt/live/university.qvolv.com/fullchain.pem'),
//  };

const server = https.createServer(app);

const path = require('path');
var compression = require('compression')
require('dotenv').config();
const corsOptions = process.env.CORS_OPTION;
const Port = process.env.PORT
app.use(cors(corsOptions));
const IP = process.env.IP; 
app.use(compression())
//parse requests of content-type - application/x-www-for-urlencoded
app.use(express.json());

// Serve static files from the 'public' directory-
app.use(express.static(path.join(__dirname, 'public')));


//Require routes
const routes = require('./src/routes')
//using as middleware
app.use('/api', routes);

// set port, listen for requests
const port = Port || 5000;
app.listen(port, IP,  () => {
    console.log(`Server is listening on port ${port} ${IP}`);
})
