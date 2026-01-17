"use client";

import { usePeriodDateStore } from "@/hooks/zustand/usePeriodDateStore";
import style from "./state.module.scss";
import PeriodDatePicker from "@/components/ui/period-date-picker/PeriodDatePicker";
import SelectBox from "@/components/ui/select-box/SelectBox";
import InputBox from "@/components/ui/input-box/InputBox";
import StateList from "./StateList";
import { tempDepartmentList } from "@/utils/tempUser";
import { FormEvent, useEffect, useState } from "react";
import { useCurrentEmpWorkStore } from "@/hooks/zustand/useCurrentEmpWorkStore";

export default function State() {
  const { today, day, week, month } = usePeriodDateStore();
  const { workList, setData } = useCurrentEmpWorkStore();
  const [searchValue, setSearchValue] = useState("");
  const [selectItem, setSelectItem] = useState("");

  useEffect(() => {
    if (week || month) {
      const newSearchValue = "김성은";
      const newSelectItem = "개발팀";
      setSearchValue(newSearchValue);
      setSelectItem(newSelectItem);
      if (week) {
        setData(newSearchValue, newSelectItem, undefined, "2025-10-06", "2025-10-12", "주");
      }
      if (month) {
        setData(newSearchValue, newSelectItem, "2025-10", undefined, undefined, "월");
      }
    } else {
      setSearchValue("");
      setSelectItem("");
      setData();
    }
  }, [day, week, month]);

  useEffect(() => {
    if (day) {
      if (selectItem) {
        setData(undefined, selectItem, "2025-10-01", undefined, undefined, "일");
      }
      if (selectItem === "전체") {
        setData();
      }
    }
  }, [selectItem]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchValue.trim() === "") {
      setData();
      return alert("검색어를 입력해 주세요");
    }

    if (day) {
      if (searchValue) {
        setData(searchValue, undefined, "2025-10-01", undefined, undefined, "일");
      }

      if (searchValue && selectItem) {
        setData(searchValue, selectItem, "2025-10-01", undefined, undefined, "일");
      }
    }

    if (week) {
      setData(searchValue, selectItem, undefined, "2025-10-12", "2025-10-19", "주");
    }

    setData();
  };

  return (
    <div className={style["flex-col"]} style={{ gap: "40px" }}>
      <PeriodDatePicker />
      <form action="" onSubmit={onSubmit} className={style.flex} style={{ gap: "8px" }}>
        <SelectBox
          optionList={tempDepartmentList}
          defaultValue="부서선택"
          selectItem={selectItem}
          onChangeOption={(e) => setSelectItem(e.currentTarget.textContent)}
        />
        <InputBox variant="search" addClass="xsmall" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
      </form>
      <StateList list={workList} variant={day ? "day" : week ? "week" : month ? "month" : "day"} />
    </div>
  );
}
