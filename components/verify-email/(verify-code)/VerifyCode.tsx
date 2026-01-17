"use client";

import InputBox from "@/components/ui/input-box/InputBox";
import FormMessage from "@/components/ui/form-message/FormMessage";
import { FormEvent, useEffect, useState } from "react";
import style from "./code.module.scss";
import PrimayBtn from "@/components/ui/buttons/PrimaryBtn";
import { useHooks } from "@/hooks/useHooks";

interface ICode {
  mode: "join" | "find-pw";
}

export default function VerifyCode({ mode }: ICode) {
  const { useRoute } = useHooks();
  const [timeLeft, setTimeLeft] = useState(120);
  const [time, setTime] = useState("02:00");
  const [msg, setMsg] = useState("2분 내로 인증을 완료해주세요.");
  const [codeValue, setCodeValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [tempCode, setTempCode] = useState("456789");

  const onSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (codeValue.trim() === "") {
      setMsg("인증번호를 입력해 주세요.");
      return;
    }

    if (!codeValue.trim().includes(tempCode)) {
      setMsg("인증번호가 일치하지 않습니다.");
    } else {
      if (mode === "join") {
        useRoute("/auth/join/password");
      } else {
        useRoute("/auth/find-pw/reset-pw");
      }
    }
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
    setTempCode("789456");
  };

  return (
    <form onSubmit={onSumbit}>
      <div className={style["input-wrap"]}>
        <InputBox type="text" id="email" value={emailValue} disabled />
        <InputBox type="text" id="code" value={codeValue} onChange={(e) => setCodeValue(e.target.value)} />
      </div>
      <div className={style["time-wrap"]}>
        <FormMessage pdTop="0" text={`${msg} ${time}`} />
        <button type="button" onClick={onResend} className={style["resend-btn"]}>
          재전송
        </button>
      </div>
      <PrimayBtn label="인증하기" addClass="long" />
    </form>
  );
}
