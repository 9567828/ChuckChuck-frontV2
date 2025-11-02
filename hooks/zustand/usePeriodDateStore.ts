import { create } from "zustand";

type date = "today" | "day" | "week" | "month";

interface IState {
  today: boolean;
  day: boolean;
  week: boolean;
  month: boolean;
  setDate: (date: date) => void;
}

export const usePeriodDateStore = create<IState>((set) => ({
  today: false,
  day: true,
  week: false,
  month: false,
  setDate: (date: date) =>
    set((prev) => {
      if (date === "today") {
        return { today: true, day: true, week: false, month: false };
      }
      return {
        today: false,
        day: false,
        week: false,
        month: false,
        [date]: true,
      };
    }),
}));
