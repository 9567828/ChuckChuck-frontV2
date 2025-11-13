import { IEmpWorkTime, tempAllEmpsLog, tempEmpWorkLogs } from "@/utils/tempUser";
import { create } from "zustand";
import { usePeriodDateStore } from "./usePeriodDateStore";

interface IState {
  workList: IEmpWorkTime[];
  setData: (
    name?: string,
    department?: string,
    date?: string,
    startDate?: string,
    endDate?: string,
    period?: "일" | "주" | "월"
  ) => void;
}

export const useCurrentEmpWorkStore = create<IState>((set) => ({
  workList: tempAllEmpsLog,
  setData: (name, department, date, startDate, endDate, period) => {
    // const { day, week, month } = usePeriodDateStore.getState();
    const day = period === "일";
    const week = period === "주";
    const month = period === "월";

    if (!name && !department && !date && !startDate && !endDate && !period) {
      set({ workList: tempAllEmpsLog });
      return;
    }

    if (week || month) {
      const allData = tempEmpWorkLogs;
      const targetEmployee = allData.find((v) => v.name === name && v.department === department);

      if (!targetEmployee) {
        set({ workList: [] });
        return;
      }

      const selectedLogs = targetEmployee.workLog.filter((d) => {
        if (!d.date) return false;

        if (month) return d.date.startsWith(date!);
        if (week) return d.date >= startDate! && d.date <= endDate!;

        return true;
      });
      const updatedEmployee = {
        ...targetEmployee,
        workLog: selectedLogs,
      };

      set({
        workList: [updatedEmployee],
      });
    }

    if (day) {
      const allData = tempAllEmpsLog;

      const targetEmp = allData.filter(
        (v) => v.name === name || (v.department === department && v.workLog.find((d) => d.date && d.date === date))
      );

      if (!targetEmp) {
        set({ workList: [] });
        return;
      }

      set({
        workList: targetEmp,
      });
    }
  },
}));
