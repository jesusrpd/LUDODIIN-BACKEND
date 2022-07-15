import {Schema, model} from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new Schema({
  name: {type: String},
  passwordEncrypt: {type: String},
  email: {type: String},
  img_path: {type: String},
  genre: {type: String},
  age: {type: Number},
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }]
});

// Metodos para encriptar la contraseña
userSchema.methods.encryptPassword = async (password) =>{
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

// Metodo para corroborar si la contraseña es correcta
userSchema.methods.comparePassword = async function(password){
  return await bcrypt.compare(password, this.passwordEncrypt);
}

export default model('User', userSchema);