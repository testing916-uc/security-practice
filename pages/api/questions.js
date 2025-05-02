// pages/api/questions.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // Construct the path to the questions.json file
  const filePath = path.join(process.cwd(), 'public', 'questions.json');

  try {
    // Read the file synchronously
    const fileData = fs.readFileSync(filePath, 'utf8');

    // Parse the JSON data
    const questions = JSON.parse(fileData);

    // Send the data back as a JSON response
    res.status(200).json(questions);
  } catch (error) {
    // If something goes wrong, log the error and return 500
    console.error('Error reading questions.json:', error);
    res.status(500).json({ error: 'Failed to load questions' });
  }
}
