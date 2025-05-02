export default function Home() {
  const questions = [
    {
      domain: "Threats and Attacks",
      question: "What is a common symptom of a phishing attack?",
      options: [
        "Slow internet connection",
        "Unusual login requests",
        "System overheating",
        "Increased power usage"
      ],
      answer: "Unusual login requests",
      explanation: "Phishing often leads to credential theft and suspicious login attempts."
    },
    {
      domain: "Risk Management",
      question: "Which document defines roles during a security incident?",
      options: [
        "Business Continuity Plan",
        "Disaster Recovery Plan",
        "Incident Response Plan",
        "Security Policy"
      ],
      answer: "Incident Response Plan",
      explanation: "The Incident Response Plan assigns roles and outlines how to handle incidents."
    }
  ];

  return (
    <main className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Security+ Practice Questions</h1>
      {questions.map((q, i) => (
        <div key={i} className="p-4 border rounded-md">
          <p className="font-semibold">{q.domain}: {q.question}</p>
          <ul className="mt-2 space-y-1">
            {q.options.map((opt, j) => (
              <li
                key={j}
                className={`p-2 rounded ${
                  opt === q.answer ? "bg-green-100 font-bold" : "bg-gray-100"
                }`}
              >
                {opt}
              </li>
            ))}
          </ul>
          <p className="mt-2 text-sm text-gray-700"><strong>Explanation:</strong> {q.explanation}</p>
        </div>
      ))}
    </main>
  );
              }

fix: remove pages/index.js to use app router
