"use client";

import style from "./state.module.scss";
import { useEffect, useState } from "react";
import { IEmpWorkTime } from "@/utils/tempUser";
import EditSummary from "./(EditSummary)/EditSummary";
import SummaryBox from "./SummaryBox";

interface IList {
  variant: "day" | "week" | "month";
  list: IEmpWorkTime[];
}

export default function StateList({ variant = "day", list }: IList) {
  const isCompact = variant === "week" || variant === "month";
  const isWeek = variant === "week";
  const isMonth = variant === "month";
  const [headList, setHeadList] = useState<string[]>([]);

  useEffect(() => {
    if (isCompact) {
      setHeadList(["날짜", "출근시간", "퇴근시간", "근무형태", "휴게시간", "연장근무시간", "근무시간", "야간근무시간"]);
    } else {
      setHeadList(["이름", "직책", "출근시간", "퇴근시간", "근무형태", "휴게시간", "연장근무시간", "근무시간", "야간근무시간"]);
    }
  }, [variant]);

  const handleNull = (value: string | null) => {
    return value === null ? "-" : value;
  };

  return (
    <div className={`${isCompact ? style.grid : ""}`.trim()}>
      {isWeek || isMonth ? <SummaryBox list={list} unit={isWeek ? "주" : isMonth ? "월" : undefined} /> : null}
      <div>
        <ul className={style["table-head"]} style={isCompact ? { gridTemplateColumns: "repeat(8, 70px)" } : undefined}>
          {headList.map((h, i) => (
            <li key={i}>
              <p>{h}</p>
            </li>
          ))}
        </ul>
        <div>
          {list.map((t) =>
            t.workLog.map((w, idx) => (
              <ul key={idx} className={style["table-content"]}>
                <li style={isCompact ? { gridTemplateColumns: "repeat(8, 70px)" } : undefined}>
                  {isCompact ? <p>{w.date}</p> : <p>{t.name}</p>}
                  {!isCompact ? <p className="eclips">{t.position}</p> : null}
                  <EditSummary text={handleNull(w.checkIn)} name={t.name} date={w.date === null ? "" : w.date!} />
                  <EditSummary text={handleNull(w.checkOut)} name={t.name} date="" />
                  <p style={w.status === "결근" || w.status === "지각" ? { color: "#FF5116" } : undefined}>{w.status}</p>
                  <p>{w.breakTime}</p>
                  <p>{handleNull(w.overtime)}</p>
                  <p>{handleNull(w.workTime)}</p>
                  <p>{handleNull(w.nightTime)}</p>
                </li>
              </ul>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
