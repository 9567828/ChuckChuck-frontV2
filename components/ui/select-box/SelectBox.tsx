"use client";

import { MouseEvent, MouseEventHandler, useState } from "react";
import style from "./select.module.scss";

interface ISelect {
  variant?: "round" | "square";
  defaultValue: string;
  optionList: string[];
  onChangeOption: (e: MouseEvent<HTMLLIElement>) => void;
  selectItem: string;
}

export default function SelectBox({ variant = "round", defaultValue, optionList, onChangeOption, selectItem }: ISelect) {
  const [click, setClick] = useState(false);
  // const [selectItem, setSelectItem] = useState("");

  return (
    <div>
      <div
        className={`${style["select-wrap"]} ${variant === "square" ? style["square-wrap"] : ""} ${
          variant === "square" && click ? style.active : ""
        }`.trim()}
      >
        <div
          tabIndex={0}
          className={`${style.select} ${style[variant]} ${click ? style.on : ""}`.trim()}
          onClick={() => setClick((prev) => !prev)}
          onBlur={() => setClick(false)}
        >
          <p className={selectItem !== "" ? style.click : ""}>{selectItem !== "" ? selectItem : defaultValue}</p>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.175 5L8 8.825L11.825 5L13 6.18333L8 11.1833L3 6.18333L4.175 5Z"
              fill={variant === "round" ? "#BDBDBD" : variant === "square" ? "#616161" : ""}
            />
          </svg>
        </div>
        {click ? (
          <ul className={`${style.option} ${style[variant]}`}>
            {optionList.map((v, i) => {
              const isTrue = selectItem === v;

              return (
                <li
                  key={i}
                  id={v}
                  className={`${variant === "square" ? style["option-value"] : ""} ${isTrue ? style.active : ""}`.trim()}
                  onMouseDown={onChangeOption}
                >
                  {v}
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
      {variant === "square" && click && <div style={{ height: "33px" }}></div>}
    </div>
  );
}
