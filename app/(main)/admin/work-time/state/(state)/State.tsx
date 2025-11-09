"use client";

import { usePeriodDateStore } from "@/hooks/zustand/usePeriodDateStore";
import style from "./state.module.scss";
import PeriodDatePicker from "@/components/ui/period-date-picker/PeriodDatePicker";
import SelectBox from "@/components/ui/select-box/SelectBox";
import InputBox from "@/components/ui/input-box/InputBox";
import SummaryBox from "./SummaryBox";
import StateList from "./StateList";
import { tempEmpWorkTime } from "@/utils/tempUser";

export default function State() {
  const { today, day, week, month } = usePeriodDateStore();

  return (
    <div className={style["flex-col"]} style={{ gap: "40px" }}>
      <PeriodDatePicker />
      <div className={style.flex} style={{ gap: "8px" }}>
        <SelectBox />
        <InputBox variant="search" addClass="xsmall" />
      </div>
      <div className={`${week || month ? style.grid : ""}`.trim()}>
        {week || month ? <SummaryBox name="김영식" duty="CEO" unit={week ? "주" : month ? "월" : ""} /> : null}
        <StateList list={tempEmpWorkTime} variant={day ? "day" : week ? "week" : month ? "month" : "day"} />
      </div>
    </div>
  );
}
