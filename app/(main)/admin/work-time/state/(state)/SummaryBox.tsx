"use client";

import { IEmpWorkTime } from "@/utils/tempUser";
import style from "./state.module.scss";
import { useEffect, useState } from "react";
import { useCurrentEmpWorkStore } from "@/hooks/zustand/useCurrentEmpWorkStore";

interface ISummary {
  unit: "주" | "월" | undefined;
  // name: string;
  // position: string;
  list: IEmpWorkTime[];
}

export default function SummaryBox({ unit, list }: ISummary) {
  const { workList } = useCurrentEmpWorkStore();
  const [summary, setSummary] = useState([
    { title: "근무가능시간", time: "52" },
    { title: "필수근무시간", time: "40" },
    { title: "실근무시간", time: "40" },
    { title: "연장근무시간", time: "00" },
    { title: "야간근무시간", time: "00" },
  ]);

  const emp = list.find((v) => v.name);

  return (
    <div className={style["summary-box"]}>
      <div className={style.flex}>
        <h1 className="bodySm-b">{emp?.name}</h1>
        <p className="captionXxs-m">{emp?.department}</p>
      </div>
      <div className={style["summary-content"]}>
        <h4>{`단위: ${unit}`}</h4>
        <ul className={style["flex-col"]}>
          {summary.map((m, i) => (
            <li key={i} className={style.content}>
              <p>{m.title}</p>
              <p className={style["summary-time"]}>{`${m.time}시간`}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
