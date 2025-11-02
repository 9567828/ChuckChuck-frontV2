import MyPageSide from "@/components/ui/side-menu/MyPageSide";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MyPageSide />
      <div className="page-grid">
        <div></div>
        <main className="admin-inner">{children}</main>
      </div>
    </>
  );
}
