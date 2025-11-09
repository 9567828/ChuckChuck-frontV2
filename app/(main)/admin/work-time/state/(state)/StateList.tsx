"use client";

import style from "./state.module.scss";
import { useEffect, useState } from "react";
import { IEmpWorkTime } from "@/utils/tempUser";
import EditSummary from "./(EditSummary)/EditSummary";

interface IList {
  variant: "day" | "week" | "month";
  list: IEmpWorkTime[];
}

export default function StateList({ variant = "day", list }: IList) {
  const isCompact = variant === "week" || variant === "month";
  const [headList, setHeadList] = useState<string[]>([]);

  useEffect(() => {
    if (isCompact) {
      setHeadList(["날짜", "출근시간", "퇴근시간", "근무형태", "휴게시간", "연장근무시간", "근무시간", "야간근무시간"]);
    } else {
      setHeadList(["이름", "직책", "출근시간", "퇴근시간", "근무형태", "휴게시간", "연장근무시간", "근무시간", "야간근무시간"]);
    }
  }, [variant]);

  const handleNull = (value: string | null) => {
    if (value === null) {
      return "-";
    } else {
      return value;
    }
  };

  return (
    <div>
      <ul className={style["table-head"]} style={isCompact ? { gridTemplateColumns: "repeat(8, 70px)" } : undefined}>
        {headList.map((h, i) => (
          <li key={i}>
            <p>{h}</p>
          </li>
        ))}
      </ul>
      <div>
        {list.map((t, i) => (
          <ul key={i} className={style["table-content"]}>
            <li style={isCompact ? { gridTemplateColumns: "repeat(8, 70px)" } : undefined}>
              {isCompact ? <p>{t.date}</p> : <p>{t.name}</p>}
              {!isCompact ? <p className="eclips">{t.position}</p> : null}
              <EditSummary text={handleNull(t.checkIn)} name={t.name} date="" />
              <EditSummary text={handleNull(t.checkOut)} name={t.name} date="" />
              <p style={t.status === "결근" || t.status === "지각" ? { color: "#FF5116" } : undefined}>{t.status}</p>
              <p>{t.breakTime}</p>
              <p>{handleNull(t.overtime)}</p>
              <p>{handleNull(t.workTime)}</p>
              <p>{handleNull(t.etc)}</p>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
