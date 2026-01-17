import PageHead from "@/components/layout/PageHead";
import ResultPage from "./(result-page)/ResultPage";

export default async function Page(props: PageProps<"/auth/find-id/result">) {
  const params = await props.searchParams;

  const query = {
    email: String(params.email),
    joinDate: String(params["join-date"]),
  };

  return (
    <div>
      <PageHead pageName="아이디 찾기 결과" />
      <ResultPage query={query} />
    </div>
  );
}
