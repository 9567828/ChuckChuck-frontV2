"use client";

import { useState } from "react";
import style from "./edit.module.scss";
import EditTimemModal from "@/components/modal/EditTimeModal";

interface ISummary {
  text: string | null;
  date: string;
  name: string;
}

export default function EditSummary({ text, date, name }: ISummary) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={style["hover-wrap"]}>
        <p>{text}</p>
        <div className={style["btn-wrap"]}>
          <button className={style["edit-btn"]} onClick={() => setOpen((prev) => !prev)}>
            <img src="/imgs/icons/ic_edit.svg" alt="수정하기" />
            <p>수정하기</p>
          </button>
        </div>
      </div>
      {open && (
        <EditTimemModal name={name} date={date} time={text!} onClose={() => setOpen(false)} onSubmit={() => console.log()} />
      )}
    </>
  );
}
