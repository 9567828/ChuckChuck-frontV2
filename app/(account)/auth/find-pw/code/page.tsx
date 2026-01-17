import PageHead from "@/components/layout/PageHead";
import VerifyCode from "@/components/verify-email/(verify-code)/VerifyCode";

export default function Page() {
  return (
    <>
      <PageHead pageName="비밀번호 찾기" />
      <VerifyCode mode="find-pw" />
    </>
  );
}
