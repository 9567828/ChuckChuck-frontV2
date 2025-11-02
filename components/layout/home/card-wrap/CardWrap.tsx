import React, { Suspense } from "react";
import style from "./card.module.scss";
import Loading from "@/app/loading";

interface IBoard {
  children: React.ReactNode;
  bg?: "gray" | "white";
  title: string;
  lenght?: number;
  /** 아이콘 이미지 */
  src: string;
  onClick?: () => void;
  allBtn?: boolean;
  isAdmin?: boolean;
}

export default function CardWrap({
  children,
  bg = "gray",
  title,
  lenght = 0,
  allBtn = true,
  isAdmin = false,
  src,
  onClick,
}: IBoard) {
  return (
    <div className={`${style["card-wrap"]} ${style[bg]}`}>
      <div className={`${style["title-wrap"]} ${isAdmin ? style.admin : ""}`.trim()}>
        <div className={style.flex}>
          {src !== "" ? <img src={`/imgs/main-icons/${src}`} alt={title} /> : null}
          <p className="bodyMd-b">{title}</p>
          {lenght ? (
            <p className={style["info-txt"]}>{`${
              title === "전자결재" ? `확인하지 않은 결재 (${lenght})` : title === "출퇴근 누락" ? `결근 ${lenght}명` : ""
            }`}</p>
          ) : null}
        </div>
        {allBtn ? (
          <button type="button" onClick={onClick} className={style["goAll-btn"]}>
            전체보기
          </button>
        ) : null}
      </div>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}
