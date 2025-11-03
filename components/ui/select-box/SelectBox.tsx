"use client";

import { useState } from "react";
import style from "./select.module.scss";

export default function SelectBox() {
  const [click, setClick] = useState(false);
  const [selcetItem, setSelectItem] = useState("");

  return (
    <div
      tabIndex={0}
      className={`${style.select} ${click ? style.on : ""}`.trim()}
      onClick={() => setClick((prev) => !prev)}
      onBlur={() => setClick(false)}
    >
      <p className={selcetItem !== "" ? style.click : ""}>{selcetItem !== "" ? selcetItem : "부서선택"}</p>
      {click ? (
        <ul className={style.options}>
          <li onClick={(e) => setSelectItem(e.currentTarget.textContent)}>경영팀</li>
          <li onClick={(e) => setSelectItem(e.currentTarget.textContent)}>디자인팀</li>
          <li onClick={(e) => setSelectItem(e.currentTarget.textContent)}>개발팀</li>
          <li onClick={(e) => setSelectItem(e.currentTarget.textContent)}>영업팀</li>
          <li onClick={(e) => setSelectItem(e.currentTarget.textContent)}>마케팅팀</li>
          <li onClick={(e) => setSelectItem(e.currentTarget.textContent)}>부서선택</li>
          <li onClick={(e) => setSelectItem(e.currentTarget.textContent)}>부서선택</li>
        </ul>
      ) : null}
    </div>
  );
}
