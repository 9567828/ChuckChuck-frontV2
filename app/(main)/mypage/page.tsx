import MyPageSide from "@/components/ui/side-menu/MyPageSide";

export default function Page({ childern }: { childern: React.ReactNode }) {
  return (
    <>
      <MyPageSide />
      <div className="page-grid">
        <div></div>
        <main className="admin-inner">{childern}</main>
      </div>
    </>
  );
}
