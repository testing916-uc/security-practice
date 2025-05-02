// pages/index.js
import { useState, useEffect } from "react";

export default function Home() {
  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 10;

  useEffect(() => {
    fetch("/questions.json")
      .then((res) => res.json())
      .then((data) => setQuestions(data.questions))
      .catch((error) => console.error("Error loading questions:", error));
  }, []);

  const indexOfLast = currentPage * questionsPerPage;
  const indexOfFirst = indexOfLast - questionsPerPage;
  const currentQuestions = questions.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(questions.length / questionsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Security+ Practice Questions</h1>

      {currentQuestions.map((q) => (
        <div key={q.id} className="mb-6 p-4 border rounded-lg shadow-sm">
          <p className="font-semibold">{q.id}. {q.question}</p>
          <ul className="mt-2 space-y-1">
            {Object.entries(q.options).map(([key, option]) => (
              <li key={key}><strong>{key.toUpperCase()}.</strong> {option}</li>
            ))}
          </ul>
          <p className="mt-2 text-green-600">Answer: {q.answer.toUpperCase()}</p>
          <p className="text-sm text-gray-600">Explanation: {q.explanation}</p>
        </div>
      ))}

      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <p className="text-sm text-gray-700">Page {currentPage} of {totalPages}</p>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
