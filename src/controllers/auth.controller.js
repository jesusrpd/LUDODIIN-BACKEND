import User from '../models/user';
import jwt from 'jsonwebtoken';
import config from '../config';

// Inicio de sesión de un usuario
export const login = async (req, res) => {
  const {email, password} = req.body;

  // Buscamos al usuario en la BD 
  const user = await User.findOne({email});
  const passwordIsValid = await user.comparePassword(password);

  if(!(user && passwordIsValid)){
    return res.status(401).json({
      error: 'email o contraseña invalidos'
    });
  }
  
  // Generamos token de autenticación si la contraseña es correcta
  const token = jwt.sign({id: user._id}, config.SECRET,{
    expiresIn: 86400
  })

  res.status(200).json({success: true, data: {token, user}});
}

// Registro de usuario
export const signup = async (req, res) => {
  const {name, email, password, genre, age, img_path} = req.body;
  const newUser = new User({ name, email, passwordEncrypt: password, genre, age, img_path });

  // Encriptamos la contraseña
  newUser.passwordEncrypt = await newUser.encryptPassword(password);
  const user = await newUser.save();

  // Generamos un token
  const token = jwt.sign({id: user._id}, config.SECRET, {
    expiresIn: 86400
  });

  res.status(200).json({success: true, data: {token, user}});
}