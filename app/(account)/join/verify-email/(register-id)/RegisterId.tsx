"use client";

import { FormEvent, useState } from "react";
import VerifyEmail from "@/components/verify-email/VerifyEmail";
import CheckEmail from "@/components/verify-email/(check-email)/CheckEmail";
import { handleRegex } from "@/utils/regex";
import { useHooks } from "@/hooks/useHooks";

const EXISTING_EMAILS = ["123@naver.com", "test@google.com"];

export default function RegisterId() {
  const [msg, setMsg] = useState("이메일을 입력하고 전송을 눌러주세요.");
  const [email, setEmail] = useState("");
  const { handleEmailRegex } = handleRegex();
  const { useRoute } = useHooks();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!handleEmailRegex(email)) {
      setMsg("유효한 이메일을 입력해 주세요.");
      return;
    }

    if (EXISTING_EMAILS.includes(email)) {
      setMsg("이미 존재하는 이메일 입니다.");
    } else {
      localStorage.setItem("email", email);
      useRoute(`/join/verify-email/code`);
    }
  };

  return (
    <>
      <VerifyEmail btnName="전송하기" isValid={email === ""} onSubmit={onSubmit}>
        <CheckEmail msg={msg} onChange={(e) => setEmail(e.target.value)} value={email} />
      </VerifyEmail>
    </>
  );
}
