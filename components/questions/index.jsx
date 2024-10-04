"use client"
import { useState } from "react"

export default function Questions({data}) {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [sayac, setSayac] = useState(0);

  console.log(data.slice(currentQuestion-1, currentQuestion));

  return (
    <>
      <h2>{data.slice(currentQuestion-1, currentQuestion)[0].question}</h2>
      <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>Sonraki soru</button>
    </>
  )
}