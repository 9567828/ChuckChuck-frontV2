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
}

export default function CardWrap({ children, bg = "gray", title, lenght = 0, allBtn = true, src, onClick }: IBoard) {
  return (
    <div className={`${style["card-wrap"]} ${style[bg]}`}>
      <div className={style["title-wrap"]}>
        <div className={style.flex}>
          <img src={`/imgs/main-icons/${src}`} alt={title} />
          <p className="bodyMd-b">{title}</p>
          {lenght ? <p className={style["info-txt"]}>확인하지 않은 결재 ({lenght})</p> : null}
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
