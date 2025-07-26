import express from 'express';
import { getRiasecQuestions, submitRiasecTest } from '../controllers/riasec.controller.js';

const router = express.Router();

router.get('/', getRiasecQuestions);
router.post('/submit', submitRiasecTest);

export default router;