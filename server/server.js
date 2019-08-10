const _http = require('http');
const app = require('./app');

const port = process.env.port || 3000;
const server = _http.createServer(app);

server.listen(port);
