import PageHead from "@/components/layout/PageHead";
import FindId from "./(screen)/FindID";

export default function Page() {
  return (
    <div>
      <PageHead pageName="아이디 찾기" />
      <FindId />
    </div>
  );
}
