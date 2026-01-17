import PageHead from "@/components/layout/PageHead";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHead pageName="아이디 생성" />
      {children}
    </>
  );
}
