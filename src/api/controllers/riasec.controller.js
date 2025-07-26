import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rawData = fs.readFileSync(path.join(__dirname, '..', '..', 'data', 'riasec.json'));
const riasecData = JSON.parse(rawData);

export const getRiasecQuestions = (req, res) => {
  const shuffledData = [...riasecData].sort(() => Math.random() - 0.5);

  res.status(200).json({
    success: true,
    message: 'riasec questions retrieved successfully',
    data: shuffledData
  });
};

export const submitRiasecTest = (req, res) => {
  const { answers, metadata } = req.body;

  if (!answers || !Array.isArray(answers)) {
    return res.status(400).json({
      success: false,
      message: 'Bad Request: "answers" must be an array.'
    });
  }

  const categories = ['R', 'I', 'A', 'S', 'E', 'C'];
  const normalizedData = [];

  categories.forEach(code => {
    const filtered = answers.filter(a => a.code === code);
    const totalValue = filtered.reduce((sum, a) => sum + a.value, 0);
    const normalized = ((totalValue - filtered.length) / ((filtered.length * 5) - (filtered.length * 1)) * 100).toFixed(2);
    normalizedData.push({ code, value: parseFloat(normalized) });
  });

  res.status(200).json({
    success: true,
    message: 'Answers submitted successfully',
    data: {
      normalizedScores: normalizedData,
      metadata: metadata || null
    }
  });
};