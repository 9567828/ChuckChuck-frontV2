import { InputHTMLAttributes } from "react";
import style from "./check.module.scss";

interface ICheckBox extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "square" | "circle";
  children: React.ReactNode;
}

export default function CheckBox({ variant = "square", children, ...props }: ICheckBox) {
  return (
    <div className={style.container}>
      <input type="checkbox" className={style[variant]} {...props} />
      <label className={style.label} htmlFor={props.id}></label>
      {children}
    </div>
  );
}
