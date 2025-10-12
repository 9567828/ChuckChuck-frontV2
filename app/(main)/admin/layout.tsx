import AdminSide from "@/components/ui/side-menu/AdminSide";

export default function Layout({ childern }: { childern: React.ReactNode }) {
  return (
    <>
      <AdminSide />
      <div className="page-grid">
        <div></div>
        <main className="admin-inner">{childern}</main>
      </div>
    </>
  );
}
