"use client";

import PeriodDatePicker from "@/components/ui/period-date-picker/PeriodDatePicker";
import style from "./state.module.scss";
import { usePeriodDateStore } from "@/hooks/zustand/usePeriodDateStore";

export default function State() {
  const { today, day, week, month } = usePeriodDateStore();

  return (
    <div>
      <PeriodDatePicker />
    </div>
  );
}
