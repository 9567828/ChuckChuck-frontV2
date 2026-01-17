import { ButtonHTMLAttributes } from "react";
import style from "../work.module.scss";

interface IBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function EditBtn({ ...props }: IBtnProps) {
  return (
    <button {...props} type="button" className={style["edit-btn"]}>
      <span>수정하기</span>
    </button>
  );
}
