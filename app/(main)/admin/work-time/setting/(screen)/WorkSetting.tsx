"use client";

import SelectBox from "@/components/ui/select-box/SelectBox";
import ListLayout from "./components/ListLayout";
import style from "./work.module.scss";
import { useState } from "react";
import WorkTimeRadio from "./components/WorkTimeRadio";
import Title from "./components/Title";
import EditBtn from "./components/EditBtn";

export default function WorkSetting() {
  const [select, setSelect] = useState("");

  return (
    <div>
      <ListLayout isGrid>
        <Title title="근무유형 선택" />
        <SelectBox
          optionList={["고정 출퇴근제", "탄력 출퇴근제", "출퇴근 사용 안함"]}
          defaultValue="고정 출퇴근제"
          variant="square"
          selectItem={select}
          onChangeOption={(e) => setSelect(e.currentTarget.id)}
        />
      </ListLayout>
      <>
        <ListLayout isGrid>
          <Title title="출근 시간 설정 기준" />
          <div className={style["raido-wrap"]}>
            <WorkTimeRadio id="startReal" variant="start" kind="real" />
            <WorkTimeRadio id="startSet" variant="start" kind="setUp" />
          </div>
        </ListLayout>
        <ListLayout isGrid>
          <Title title="퇴근 시간 설정 기준" />
          <div className={style["raido-wrap"]}>
            <WorkTimeRadio id="finishReal" variant="finish" kind="real" />
            <WorkTimeRadio id="finishSet" variant="finish" kind="setUp" />
          </div>
        </ListLayout>
        <ListLayout isGrid={false}>
          <div>
            <Title title="근무일" />
            <div>월, 화, 수, 목, 금 (주 5일)</div>
            <EditBtn />
          </div>
          <div>
            <Title title="근무 시간" />
            <div>
              <p>월 09:00~18:00</p>
              <p>화 09:00~18:00</p>
              <p>수 09:00~18:00</p>
              <p>목 09:00~18:00</p>
              <p>금 09:00~18:00</p>
            </div>
          </div>

          <div>
            <Title title="근무일" />
          </div>
        </ListLayout>
      </>
    </div>
  );
}
