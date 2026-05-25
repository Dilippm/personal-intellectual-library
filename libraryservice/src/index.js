import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import config from './config/index.js';
import router from './routes/index.js';


const app = express();
const PORT = config.port || 4000;

app.use(cors());
app.use(bodyParser.json());

// routes middleware
app.use('/api',router);

app.listen(PORT, () => {
    console.log(`Library service running on http://localhost:${PORT}`);
});