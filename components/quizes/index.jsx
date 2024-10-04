import Accessibility from "@/svgs/accessibility/page";
import Css from "@/svgs/css/page";
import Html from "@/svgs/html/page";
import Javascript from "@/svgs/javascript/page";
import Link from "next/link";

export default function QuizList() {
  return (
    <div className="quizSelectionContainer">
      <div className="title">
        <h1>Frontend Quiz Uygulamasına Başlayın!</h1>
        <p>Başlamak için bir konu seçin.</p>
      </div>
    <div className="quizSelections">
      <Link href={'/html'}> <Html /> HTML</Link>
      <Link href={'/css'}> <Css /> CSS</Link>
      <Link href={'/javascript'}> <Javascript /> JAVASCRİPT</Link>
      <Link href={'/erisebilirlik'}> <Accessibility />  Accessibility</Link>
    </div>
    </div>
  )
}