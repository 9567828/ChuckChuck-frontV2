import style from "./text.module.scss";

interface IText {
  text: string;
  variant?: "error" | "info";
  pdTop?: "8px" | "16px" | "0";
}

export default function TextWrap({ pdTop = "8px", text, variant = "error" }: IText) {
  return (
    <p
      style={pdTop === "0" ? undefined : { paddingTop: `${pdTop}` }}
      className={`${style[variant]} ${text.trim() !== "" || variant === "info" ? style.show : ""}`.trim()}
    >
      {text}
    </p>
  );
}
