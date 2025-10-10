import PageHead from "@/components/layout/PageHead";
import SetPassword from "@/components/set-password/SetPassword";

export default function Page() {
  return (
    <div>
      <PageHead pageName="비밀번호 생성" />
      <SetPassword mode="join" />
    </div>
  );
}
