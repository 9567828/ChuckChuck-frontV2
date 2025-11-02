import HeadMenuList from "@/components/ui/menu-list/HeadMenuList";
import style from "./hamburger.module.scss";

interface IMenu {
  onClick: () => void;
  isOpen: boolean;
  menuClose?: () => void;
}

export default function Hamburger({ onClick, menuClose, isOpen = false }: IMenu) {
  return (
    <aside className={`${style.menu} ${isOpen ? style.open : ""}`.trim()}>
      <HeadMenuList variant="menu-col" onClick={menuClose} />
      <button onClick={onClick}>
        <img src="/imgs/icons/ic_cancel.svg" alt="메뉴닫기" />
      </button>
    </aside>
  );
}
