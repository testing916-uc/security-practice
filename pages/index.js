import { useEffect, useState } from 'react';

export default function Home() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('/questions.json')
      .then((res) => res.json())
      .then((data) => setQuestions(data.questions))
      .catch((err) => console.error('Failed to load questions:', err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Security+ Practice Questions</h1>
      {questions.length === 0 ? (
        <p>Loading...</p>
      ) : (
        questions.map((q) => (
          <div key={q.id} className="mb-6 border-b pb-4">
            <p className="font-medium">{q.id}. {q.question}</p>
            <ul className="pl-4 list-disc">
              {Object.entries(q.options).map(([key, value]) => (
                <li key={key}><strong>{key}:</strong> {value}</li>
              ))}
            </ul>
            <p className="text-green-600 mt-2">Answer: {q.answer}</p>
            <p className="text-sm text-gray-600">{q.explanation}</p>
          </div>
        ))
      )}
    </div>
  );
}
