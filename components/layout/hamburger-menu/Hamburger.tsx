import HeadMenuList from "@/components/ui/menu-list/HeadMenuList";
import style from "./hamburger.module.scss";

interface IMenu {
  onClick: () => void;
  isOpen: boolean;
}

export default function Hamburger({ onClick, isOpen = false }: IMenu) {
  return (
    <div className={`${style.menu} ${isOpen ? style.open : ""}`.trim()}>
      <HeadMenuList variant="menu-col" />
      <button onClick={onClick}>
        <img src="/imgs/icons/ic_cancel.svg" alt="메뉴닫기" />
      </button>
    </div>
  );
}
