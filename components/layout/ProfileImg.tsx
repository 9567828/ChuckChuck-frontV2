import style from "./profile.module.scss";

export default function ProfileImg({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div>
      <h1 className="bodySm-b" style={{ padding: "0 4px", marginBottom: "6px" }}>
        {title}
      </h1>
      {children}
    </div>
  );
}
