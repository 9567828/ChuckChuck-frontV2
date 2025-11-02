import PageHead from "@/components/layout/PageHead";
import ResultPage from "./(result-page)/ResultPage";

export default function Page() {
  return (
    <div>
      <PageHead pageName="아이디 찾기 결과" />
      <ResultPage />
    </div>
  );
}
