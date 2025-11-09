import ConfirmBtn from "@/components/ui/confrim-btn/ConfirmBtn";
import style from "./modal-layout.module.scss";
import { FormEvent } from "react";

interface IModal {
  children: React.ReactNode;
  variant: "profile" | "set-work-big" | "set-work-small";
  title: string;
  date?: string;
  onClose: () => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  btnName?: "확인" | "저장" | "다음";
}

export default function ModalLayout({ title, date, variant, btnName = "확인", children, onSubmit, onClose }: IModal) {
  return (
    <div className={style.dim}>
      <form className={`${style["modal-content"]} ${style[variant]}`} onSubmit={onSubmit}>
        {variant === "set-work-small" ? (
          <div className={style["title-flex"]}>
            <h4>{title}</h4>
            <h5>{date}</h5>
          </div>
        ) : (
          <h1 className="bodyMd-b">{title}</h1>
        )}
        {children}
        <ConfirmBtn label={btnName} variant="modal-v2" justy="flex-end" onCancel={onClose} />
      </form>
    </div>
  );
}
