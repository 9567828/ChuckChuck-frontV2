import PageHead from "@/components/layout/PageHead";
import JoinForm from "./(join-form)/JoinForm";

export default function JoinPage() {
  return (
    <>
      <PageHead pageName="이름 / 생년월일" />
      <JoinForm />
    </>
  );
}
