"use client";

import style from "./password.module.scss";
import FormMessage from "../ui/form-message/FormMessage";
import PrimayBtn from "@/components/ui/primary-btn/PrimaryBtn";
import { FormEvent, useEffect, useState } from "react";
import { useHooks } from "@/hooks/useHooks";
import sha256 from "crypto-js/sha256";
import PasswordBox from "../ui/input-box/PasswordBox";

interface ISetPw {
  mode: "join" | "reset";
}

export default function SetPassword({ mode }: ISetPw) {
  const { useRoute } = useHooks();
  const [msg, setMsg] = useState("");
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [optionalAgree, setOptionalAgree] = useState(false);

  useEffect(() => {
    const name = localStorage.getItem("name");
    const mail = localStorage.getItem("email");
    const agree = localStorage.getItem("optionalAgree");
    if (name && mail) {
      setName(name);
      setEmail(mail);
    }
    if (agree) {
      setOptionalAgree(true);
    }
  }, []);

  const onSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (pw.trim() === "") {
      setMsg("비밀번호를 입력해 주세요.");
      return;
    }

    if (confirmPw.trim() !== pw.trim()) {
      setMsg("비밀번호가 일치하지 않습니다");
      return;
    }
    setMsg("");

    const hashedPw = sha256(pw).toString();

    if (mode === "join") {
      // 회원가입일때
      // 서버로 정보전달
      const joinInfo = {
        email,
        name,
        optionalAgree: optionalAgree ? true : false,
        password: hashedPw,
        // joinDate: Date.now()
      };
      useRoute("/join/request-join");
    }

    if (mode === "reset") {
      // 비밀번호 재설정일때
      useRoute("/login");
    }
  };

  return (
    <form onSubmit={onSumbit}>
      <div className={style["input-wrap"]}>
        <div>
          <PasswordBox id="inputPw" placeholder="비밀번호" value={pw} onChange={(e) => setPw(e.target.value)} />
          <FormMessage
            pdTop="8px"
            variant="info"
            text={`영문 대소문자, 숫자, 특수문자 3가지 이상으로 조합하여\n8자 이상 32자 이하로 입력해주세요.`}
          />
        </div>
        <div>
          <PasswordBox
            id="pwConfirm"
            placeholder="비밀번호 확인"
            value={confirmPw}
            onChange={(e) => setConfirmPw(e.target.value)}
          />
          <FormMessage pdTop="8px" variant="error" text={msg} />
        </div>
      </div>
      <PrimayBtn type="submit" label={mode === "reset" ? "완료" : "다음"} addClass="long" disabled={pw === ""} />
    </form>
  );
}
