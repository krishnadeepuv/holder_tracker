//#region imports
const http = require('http');
const express = require('express');

//#endregion

const app = express();

//api to give out health status
app.get('/api/health', (req, res, next) => {
    res.status(200).send('Server is up and running');
});


// create http server
const server = http.createServer(app);
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
