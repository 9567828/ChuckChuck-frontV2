import style from "./btn.module.scss";

export default function TimeEditBtn() {
  return (
    <button className={style["edit-btn"]}>
      <img src="/imgs/icons/ic_edit.svg" alt="수정하기" />
      <p>수정하기</p>
    </button>
  );
}
