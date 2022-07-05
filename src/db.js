import mongoose from "mongoose";
import config from './config';

mongoose.connect(config.URI);

const db = mongoose.connection;

db.on('eror', (err) => {
  console.log(`${err} ERROR AL CONECTAR LA BD`);
})

db.once('open', () => {
  console.log('DATABASE IS CONECTED');
})