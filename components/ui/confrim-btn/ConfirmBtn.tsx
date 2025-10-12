import { ButtonHTMLAttributes } from "react";
import style from "./confirm-btn.module.scss";

interface Ibtn extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isCancel?: boolean;
  onCancel?: () => void;
  variant?: "modal-v1" | "modal-v2" | "action";
  gap?: "4px" | "8px";
  justy?: "center" | "flex-start";
  cancelBtnName?: "취소" | "거절";
}

export default function ConfirmBtn({
  label,
  isCancel = true,
  variant = "modal-v1",
  gap = "4px",
  justy,
  onCancel,
  cancelBtnName = "취소",
  ...props
}: Ibtn) {
  return (
    <div className={style["btn-wrap"]} style={gap ? { gap: `${gap}` } : justy ? { justifyContent: `${justy}` } : undefined}>
      <button {...props} className={style[variant]}>
        {label}
      </button>
      {isCancel ? (
        <button type="button" onClick={onCancel} className={`${style[variant]} ${style.cancel}`}>
          {cancelBtnName}
        </button>
      ) : null}
    </div>
  );
}
