import React from "react";
import style from "./period-date-picker.module.scss";
import { usePeriodDateStore } from "@/hooks/zustand/usePeriodDateStore";
import { formatDateToString } from "@/utils/formatDate";

export default function PeriodBtn() {
  const { today, day, week, month, setDate } = usePeriodDateStore();

  return (
    <div className={style["picker-wrap"]}>
      <button className={style["date-picker"]}>
        <p className="captionXs-m">{formatDateToString(new Date(), "yMd")}</p>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.175 5L8 8.825L11.825 5L13 6.18333L8 11.1833L3 6.18333L4.175 5Z" fill="#616161" />
        </svg>
      </button>
      <div className={style["btn-container"]}>
        <button className={style.btn} onClick={() => setDate("today")}>
          오늘
        </button>
        <div className={style["btn-wrap"]}>
          <button className={`${style.btn} ${style.day} ${day ? style.on : ""}`.trim()} onClick={() => setDate("day")}>
            일
          </button>
          <button className={`${style.btn} ${style.week} ${week ? style.on : ""}`.trim()} onClick={() => setDate("week")}>
            주
          </button>
          <button className={`${style.btn} ${style.month} ${month ? style.on : ""}`.trim()} onClick={() => setDate("month")}>
            월
          </button>
        </div>
      </div>
    </div>
  );
}
