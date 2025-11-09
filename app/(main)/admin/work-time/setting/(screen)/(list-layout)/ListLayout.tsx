export default function ListLayout({ children, title }: { title: string; children: React.ReactNode }) {
  return (
    <div className="setting-work-grid">
      <h3 className="bodySm-b">{title}</h3>
      <div>{children}</div>
    </div>
  );
}
