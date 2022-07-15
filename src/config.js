import dotenv from 'dotenv';
dotenv.config();

const config = {
  URI: process.env.URI,
  PORT: process.env.PORT || 3001,
  SECRET: process.env.SECRET
}

export default config;