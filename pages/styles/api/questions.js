import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'public', 'questions.json');
  try {
    const fileData = fs.readFileSync(filePath, 'utf8');
    const questions = JSON.parse(fileData);
    res.status(200).json(questions);
  } catch (error) {
    console.error('Error reading questions.json:', error);
    res.status(500).json({ error: 'Failed to load questions' });
  }
}
