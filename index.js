const http = require('http');
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const server = http.createServer(app);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send('hello world');
});

const port = 3001;

server.listen( port, () => {
    console.log(`Server on port ${port}`);
} )