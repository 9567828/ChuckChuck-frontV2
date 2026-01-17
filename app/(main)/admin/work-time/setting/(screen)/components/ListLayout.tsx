import style from "../work.module.scss";

interface ILayoutProps {
  isGrid: boolean;
  children: React.ReactNode;
}

export default function ListLayout({ isGrid, children }: ILayoutProps) {
  return (
    <div className={`${style.layout} ${isGrid ? style.grid : ""}`.trim()}>
      <>{children}</>
    </div>
  );
}
