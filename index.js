import http from 'http';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
const app = express();
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