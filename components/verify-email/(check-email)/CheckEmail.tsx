import { ChangeEvent, useState } from "react";
import style from "./email.module.scss";
import InputBox from "@/components/ui/input-box/InputBox";
import TextWrap from "@/components/ui/text-wrap/TextWrap";

interface IEmail {
  value: string;
  msg: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function CheckEmail({ value, msg, onChange }: IEmail) {
  return (
    <>
      <InputBox id="inputEmail" type="email" placeholder="이메일 ex) chuckchuck@naver.com" value={value} onChange={onChange} />
      <div>
        <TextWrap variant="info" text={msg} isShow={true} />
      </div>
    </>
  );
}
