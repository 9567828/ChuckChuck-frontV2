import PageHead from "@/components/layout/PageHead";
import VerifyEmail from "@/components/verify-email/VerifyEmail";

export default function Page() {
  return (
    <>
      <PageHead pageName="비밀번호 찾기" />
      <VerifyEmail btnName="다음" defaultMsg="비밀번호를 찾으려는 이메일을 입력해주세요." mode="find-pw" />
    </>
  );
}
