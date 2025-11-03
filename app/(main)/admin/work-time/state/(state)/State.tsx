"use client";

import { usePeriodDateStore } from "@/hooks/zustand/usePeriodDateStore";
import style from "./state.module.scss";
import PeriodDatePicker from "@/components/ui/period-date-picker/PeriodDatePicker";
import SelectBox from "@/components/ui/select-box/SelectBox";
import InputBox from "@/components/ui/input-box/InputBox";

export default function State() {
  const { today, day, week, month } = usePeriodDateStore();

  return (
    <div>
      <PeriodDatePicker />
      <div>
        <SelectBox />
        <InputBox variant="search" addClass="xsmall" />
      </div>
    </div>
  );
}
