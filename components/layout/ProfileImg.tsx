import style from "./profile.module.scss";

export default function ProfileImg({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div>
      <h1 className="label-title">{title}</h1>
      {children}
    </div>
  );
}
