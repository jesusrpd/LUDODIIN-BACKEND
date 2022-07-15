import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import authRoute from './router/auth.routes';
import helloRoute from './router/welcome.routes';
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan("dev"));

app.use('/auth', authRoute);
app.use('/welcome', helloRoute);

export default app;