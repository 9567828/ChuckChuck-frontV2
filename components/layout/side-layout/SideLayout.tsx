import style from "./side.module.scss";

interface SideLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function SideLayout({ title, children }: SideLayoutProps) {
  return (
    <aside className={style.aside}>
      <nav className={style.nav}>
        <h1 className={style["menu-head"]}>{title}</h1>
        {children}
      </nav>
    </aside>
  );
}
