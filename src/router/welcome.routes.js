import {Router} from 'express';
const r = Router();

r.get('/', (req, res) => {
  res.send('hola');
})

export default r