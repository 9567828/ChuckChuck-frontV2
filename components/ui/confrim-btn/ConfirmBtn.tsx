import { ButtonHTMLAttributes } from "react";
import style from "./confirm-btn.module.scss";

interface Ibtn extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isCancel?: boolean;
  onCancel?: () => void;
  variant?: "modal-v1" | "modal-v2" | "action";
  gap?: "4px" | "8px";
  justy?: "center" | "flex-start" | "flex-end";
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
    <div
      className={style["btn-wrap"]}
      style={{
        gap: gap ? gap : undefined,
        justifyContent: justy ? justy : undefined,
      }}
    >
      <button {...props} className={style[variant]}>
        <p>{label}</p>
      </button>
      {isCancel ? (
        <button type="button" onClick={onCancel} className={`${style[variant]} ${style.cancel}`}>
          <p>{cancelBtnName}</p>
        </button>
      ) : null}
    </div>
  );
}
