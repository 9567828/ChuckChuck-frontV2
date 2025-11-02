import AdminSide from "@/components/ui/side-menu/AdminSide";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AdminSide />
      <div className="page-grid">
        <div></div>
        <main className="admin-inner">{children}</main>
      </div>
    </>
  );
}
