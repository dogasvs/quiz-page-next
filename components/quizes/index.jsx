import Link from "next/link";

export default function QuizList() {
  return (
    <> 
      <Link href={'/html'}>HTML</Link>
      <Link href={'/css'}>CSS</Link>
      <Link href={'/javascript'}>JAVASCRİPT</Link>
      <Link href={'/erisebilirlik'}>erisebilirlik</Link>
    </>
  )
}