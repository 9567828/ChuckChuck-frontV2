import style from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <ul className={style["terms-list"]}>
        <li>
          <a href="">이용약관</a>
        </li>
        <li className={style["middle-menu"]}>
          <a href="">개인정보처리방침</a>
        </li>
        <li>
          <a href="">수신동의</a>
        </li>
      </ul>
    </footer>
  );
}
