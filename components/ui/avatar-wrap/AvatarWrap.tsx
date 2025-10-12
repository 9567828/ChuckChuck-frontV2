import style from "./avatar.module.scss";

interface IAvatar {
  /** 헤더에서 프로필로 이동시 */
  isProfile?: boolean;
  name: string;
  /** 전체이름표시 */
  isFullName?: boolean;
  /** 크기 작게 */
  isSmall?: boolean;
  src?: string;
  alt?: string;
  onClick?: () => void;
}

export default function AvatarWrap({ name, src, alt, isFullName = false, isSmall = false, isProfile = false, onClick }: IAvatar) {
  return (
    <div className={style.flex}>
      <button
        className={`${style["avatar-wrap"]} ${isProfile ? style.border : ""} ${isSmall ? style.small : ""}`.trim()}
        onClick={onClick}
      >
        {src !== "" ? (
          <img src={src} alt={alt} className={style.avatar} />
        ) : (
          <span className={`${style["first-name"]} ${isSmall ? style["font-small"] : ""}`.trim()}>{name.slice(0, 1)}</span>
        )}
      </button>
      {isFullName ? <p className={isSmall ? "captionXxs-m" : "bodySm-m"}>{name}</p> : null}
    </div>
  );
}
