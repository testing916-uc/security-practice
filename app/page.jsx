'use client'
import { useEffect, useState } from 'react'

export default function Page() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('/api/questions')
      .then(res => res.json())
      .then(data => setQuestions(data))
  }, [])

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Security+ Practice Questions</h1>
      {questions.length > 0 ? (
        questions.map((q, index) => (
          <div key={index} className="border p-4 rounded-lg shadow">
            <p className="font-semibold">{index + 1}. {q.question}</p>
            {q.choices?.map((choice, i) => (
              <p key={i} className="ml-4">- {choice}</p>
            ))}
            <p className="text-green-600">Answer: {q.answer}</p>
            <p className="text-gray-600 italic">Explanation: {q.explanation}</p>
          </div>
        ))
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  )
}
