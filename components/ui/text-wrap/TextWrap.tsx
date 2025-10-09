import style from "./text.module.scss";

interface IText {
  text: string;
  isShow?: boolean;
  variant?: "error" | "info";
}

export default function TextWrap({ text, isShow = false, variant = "error" }: IText) {
  return <p className={`${style[variant]} ${isShow ? style.show : ""}`.trim()}>{text}</p>;
}
