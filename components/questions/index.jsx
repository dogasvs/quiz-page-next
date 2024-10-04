"use client"
import { useState } from "react"

export default function Questions({data}) {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [sayac, setSayac] = useState(0);

  const currentQuestionData = data.slice(currentQuestion - 1, currentQuestion)[0];

  console.log(data.slice(currentQuestion-1, currentQuestion));

  return (
    <div className="quizPage">
      <div className='quizPageQuestions'>
        <h1>{currentQuestionData.question}</h1>
      </div>
      <div className="quizPageBtns">
        {currentQuestionData.options.map((option, index) => (
          <button key={index}>{option}</button>
        ))}
        <button className="submitBtn" onClick={() => setCurrentQuestion(currentQuestion + 1)}>Sonraki soru</button>
    </div>
    </div>
  )
}