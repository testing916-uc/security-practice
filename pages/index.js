import { useEffect, useState } from 'react';

export default function Home() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/questions.json')
      .then(res => res.json())
      .then(data => {
        setQuestions(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load questions:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading questions...</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Security+ Practice Questions</h1>
      {questions.map((q, index) => (
        <div key={index} style={{ marginBottom: '1rem' }}>
          <p><strong>Q{index + 1}:</strong> {q.question}</p>
          <ul>
            {q.choices.map((choice, i) => (
              <li key={i}>{choice}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
