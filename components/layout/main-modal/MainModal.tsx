import style from "./main-modal.module.scss";

interface IModal {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
  isScroll?: boolean;
  variant?: "content-wrap" | "";
  addClass?: "request" | "alarm" | "profile";
}

export default function MainModalLayout({ title, children, variant = "", addClass, isScroll = false, onClose }: IModal) {
  return (
    <div className={`${style["modal-container"]} ${addClass ? style[addClass] : ""}`.trim()}>
      <div className={style.flex}>
        <p className="captionXs-b">{title}</p>
        <button onClick={onClose} className={style["close-btn"]}>
          <img src="/imgs/icons/ic_cancel.svg" alt="닫기버튼" />
        </button>
      </div>
      <div className={`${style[variant]} ${addClass ? style[addClass] : ""}`.trim()}>{children}</div>
      {isScroll ? <div className={style.bottom}></div> : null}
    </div>
  );
}
