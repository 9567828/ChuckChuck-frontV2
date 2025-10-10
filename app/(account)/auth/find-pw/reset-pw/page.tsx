import PageHead from "@/components/layout/PageHead";
import SetPassword from "@/components/set-password/SetPassword";

export default function Page() {
  return (
    <div>
      <PageHead pageName="비밀번호 재설정" />
      <SetPassword mode="reset" />
    </div>
  );
}
