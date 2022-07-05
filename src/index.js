import http from 'http';
import app from './app';
import './db';
const server = http.createServer(app);

const port = 3001;

server.listen( port, () => {
    console.log(`Server on port ${port}`);
} )