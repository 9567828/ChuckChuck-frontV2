import { InputHTMLAttributes } from "react";
import style from "./input.module.scss";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  isId?: boolean;
  isBirth?: boolean;
  birthContent?: string;
  isSmall?: boolean;
  isSearch?: boolean;
}

export default function InputBox({
  isId = false,
  isSmall = false,
  isSearch = false,
  isBirth = false,
  birthContent,
  ...props
}: IInput) {
  return (
    <label id={props.id} className={`${isBirth ? style["birth-label"] : style.label}`.trim()} data-content={birthContent}>
      <input
        {...props}
        className={`${isSmall ? style.small : ""} ${isSearch ? style.search : ""} ${
          isBirth ? style["input-birth"] : style.input
        }`.trim()}
        style={birthContent === "년" ? { width: "160px" } : isId ? { width: "320px" } : undefined}
      />
      {isSearch ? (
        <img
          src="/imgs/icons/ic_search.svg"
          alt="검색아이콘"
          className={style.icon}
          style={isSmall ? { width: "24px", height: "24px" } : undefined}
        />
      ) : null}
    </label>
  );
}
