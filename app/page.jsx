'use client';
import { useEffect, useState } from 'react';

export default function Page() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('/questions.json')
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((err) => console.error('Failed to load questions:', err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Security+ Practice Questions</h1>
      {questions.length === 0 ? (
        <p>Loading questions...</p>
      ) : (
        questions.map((q, index) => (
          <div key={index} className="mb-6 p-4 border rounded shadow">
            <p className="font-semibold">{index + 1}. {q.question}</p>
            <ul className="list-disc pl-5 mt-2">
              {q.choices.map((choice, i) => (
                <li key={i}>{choice}</li>
              ))}
            </ul>
            <p className="text-green-600 mt-2">Answer: {q.answer}</p>
            <p className="text-sm text-gray-500">Explanation: {q.explanation}</p>
          </div>
        ))
      )}
    </div>
  );
}
