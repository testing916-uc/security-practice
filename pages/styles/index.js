import { useEffect, useState } from 'react';

export default function HomePage() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('/questions.json')
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((err) => console.error('Error loading questions:', err));
  }, []);

  return (
    <div>
      <h1>Security+ Practice Questions</h1>
      {questions.length === 0 && <p>Loading...</p>}
      {questions.map((q, index) => (
        <div key={index} style={{ marginBottom: '1rem' }}>
          <p><strong>Q{index + 1}:</strong> {q.question}</p>
          <ul>
            {q.choices.map((choice, i) => (
              <li key={i}>{choice}</li>
            ))}
          </ul>
          <p><em>Answer: {q.answer}</em></p>
        </div>
      ))}
    </div>
  );
}
