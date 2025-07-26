import express from 'express';
import cors from 'cors';
import riasecRoutes from './api/routes/riasec.route.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/riasec', riasecRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

export default app;