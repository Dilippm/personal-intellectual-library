import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT || 3000,

  postgres:{
    host: process.env.DB_HOST ,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    DatabaseUrl: process.env.DATABASE_URL,
  }
};

export default config;