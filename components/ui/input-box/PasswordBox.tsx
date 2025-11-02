import { InputHTMLAttributes, useState } from "react";
import style from "./input.module.scss";

interface IPw extends InputHTMLAttributes<HTMLInputElement> {
  inModal?: "nomal";
}

export default function PasswordBox({ inModal, ...props }: IPw) {
  const [open, setOpen] = useState(false);

  return (
    <label htmlFor={props.id} className={style.label}>
      <div
        className={style["eye-close"]}
        onClick={() => setOpen((prev) => !prev)}
        style={open ? { backgroundImage: "url(/imgs/icons/ic_OpenEye.svg)" } : undefined}
      ></div>
      <input type={open ? "text" : "password"} {...props} className={`${style.input} ${inModal ? style[inModal] : ""}`.trim()} />
    </label>
  );
}
