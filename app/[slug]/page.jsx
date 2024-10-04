import Questions from "@/components/questions";
import Data from "@/data.json";

export default function SelectedQuiz({ params }) {
  const { slug } = params;
  console.log(Data.categories[slug]);

  return (
    <>
      <Questions data={Data.categories[slug]} />
    </>
  )
}