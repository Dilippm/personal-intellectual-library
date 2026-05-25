import jwt from 'jsonwebtoken';
import config from '../config/index.js';


export const generateToken = (userId) => {
  return jwt.sign(
    { userId },
    config.jwt.secretKey,
    { expiresIn: config.jwt.expiresIn }
  );
};




