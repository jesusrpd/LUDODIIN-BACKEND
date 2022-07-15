import {Router} from 'express';
import * as controllers from '../controllers/auth.controller';
const r = Router();

r.post('/login', controllers.login);

r.post('/signup', controllers.signup);

export default r;