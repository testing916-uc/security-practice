// pages/index.js
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the questions from the API route
    fetch('/api/questions')
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching questions:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading questions...</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Security+ Practice Questions</h1>
      {questions.map((q, index) => (
        <div key={index} className="my-4 border p-3 rounded">
          <p>{q.question}</p>
          <ul className="list-disc ml-5">
            {q.choices.map((choice, i) => (
              <li key={i}>{choice}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
