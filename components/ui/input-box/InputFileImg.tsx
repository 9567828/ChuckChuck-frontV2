import { InputHTMLAttributes } from "react";
import style from "./input.module.scss";

interface IImgFile extends InputHTMLAttributes<HTMLInputElement> {
  currImg?: string;
  addImg?: string;
  id: string;
}

export default function InputFileImg({ currImg, addImg, id, ...props }: IImgFile) {
  return (
    <label htmlFor={id} className={style["file-label"]}>
      {/* 파일을 추가하면 추가한 이미지를 보여주고 아니면 기존에 등록되어 있는 이미지 보여주기*/}
      <img src={addImg ? addImg : currImg ? currImg : "/imgs/default-img.svg"} alt="이미지미리보기" className={style.img} />
      <input type="file" id={id} {...props} className={style["input-file"]} accept=".png, .jpeg, .jpg" />
    </label>
  );
}
