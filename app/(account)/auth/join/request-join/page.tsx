import PageHead from "@/components/layout/PageHead";
import ResultPage from "./(result-page)/ResultPage";

export default function Page() {
  return (
    <div>
      <PageHead pageName="가입요청 보내기" />
      <ResultPage />
    </div>
  );
}
