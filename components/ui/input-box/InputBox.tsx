import { InputHTMLAttributes } from "react";
import style from "./input.module.scss";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  isId?: boolean;
  birthContent?: string;
  variant?: "birth" | "search" | "nomal";
  addClass?: "small" | "xsmall";
}

export default function InputBox({ isId = false, birthContent, variant, addClass, ...props }: IInput) {
  return (
    <label
      id={props.id}
      className={`${variant === "birth" ? style["birth-label"] : style.label}`.trim()}
      data-content={birthContent}
    >
      <input
        {...props}
        className={`${style.input} ${variant === "birth" ? style["input-birth"] : variant ? style[variant] : ""} ${
          addClass ? style[addClass] : ""
        }`.trim()}
        style={birthContent === "년" ? { width: "160px" } : isId ? { width: "320px" } : undefined}
      />
      {variant === "search" ? (
        <img
          src="/imgs/icons/ic_search.svg"
          alt="검색아이콘"
          className={`${style.icon} ${addClass ? style[addClass] : ""}`.trim()}
        />
      ) : null}
    </label>
  );
}
