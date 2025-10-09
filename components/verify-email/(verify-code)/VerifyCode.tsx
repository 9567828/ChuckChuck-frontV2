"use client";

import InputBox from "@/components/ui/input-box/InputBox";
import TextWrap from "@/components/ui/text-wrap/TextWrap";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import style from "./code.module.scss";
import PrimayBtn from "@/components/ui/primary-btn/PrimaryBtn";

export default function VerifyCode() {
  const [timeLeft, setTimeLeft] = useState(120);
  const [time, setTime] = useState("02:00");
  const [msg, setMsg] = useState("2분 내로 인증을 완료해주세요.");
  const [codeValue, setCodeValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  const onSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    const localEmail = localStorage.getItem("email");
    if (localEmail) {
      setEmailValue(localEmail);
    } else {
      setEmailValue("");
    }
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) return; // 0초면 타이머 종료
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          console.log(timer);
          return 0; // 00:00에서 멈춤
        }
        return prev - 1;
      });
    }, 1000);

    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const seconds = String(timeLeft % 60).padStart(2, "0");
    if (`${minutes}:${seconds}` === "00:01") {
      setTime(`${minutes}:00`);
      setMsg("입력시간이 초과 되었습니다.");
    } else {
      setTime(`${minutes}:${seconds}`);
    }

    // 언마운트나 timeLeft가 바뀔 때마다 정리
    return () => clearInterval(timer);
  }, [timeLeft]);

  const onResend = () => {
    setTimeLeft(120);
  };

  return (
    // <div className={`${style["code-wrap"]} ${isValid ? style.visible : ""}`.trim()}>
    <form onSubmit={onSumbit}>
      <InputBox type="text" value={emailValue} disabled />
      <InputBox type="text" value={codeValue} onChange={(e) => setCodeValue(e.target.value)} />
      <div className={style["time-wrap"]}>
        <TextWrap isShow={true} text={`${msg} ${time}`} />
        <button onClick={onResend} className={style["resend-btn"]}>
          재전송
        </button>
      </div>
      <PrimayBtn label="인증하기" addClass={"long"} />
    </form>
  );
}
