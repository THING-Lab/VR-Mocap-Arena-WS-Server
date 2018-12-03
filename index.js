const express = require('express');
const http = require('http');
const SocketIO = require('socket.io');
const path = require('path');

const qtmParser = require('./src/QualisysParser.js');

// Set up basic server stuff
const app = express();
const server = http.Server(app);
const io = SocketIO(server);

qtmParser(io);

// Serve our `index.html` file
app.get('*', (req, res) => {
  const pathToHtml = path.resolve(__dirname, './index.html')
  res.sendFile(pathToHtml);
});

// --- Start our server listening on port 3000 --- //

server.listen(8000, () => {
  console.log('Server listening on http://localhost:8000/');
});
