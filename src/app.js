import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rawData = fs.readFileSync(path.join(__dirname, 'data', 'riasec.json'));
const riasecData = JSON.parse(rawData);

const app = express();
app.use(express.json());
app.use(cors());

app.get('/api/riasec', (req, res) => {
    const shuffledData = riasecData.sort(() => Math.random() - 0.5);

    res.json({
        success: true,
        message: 'riasec questions retrieved successfully',
        data: shuffledData
    });
});

app.post('/api/riasec/submit', (req, res) => {

});

export default app;
