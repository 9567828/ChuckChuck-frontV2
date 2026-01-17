"use client";

import PrimayBtn from "@/components/ui/buttons/PrimaryBtn";
import { FormEvent, useEffect, useState } from "react";
import InputBox from "../ui/input-box/InputBox";
import FormMessage from "../ui/form-message/FormMessage";
import { handleRegex } from "@/utils/regex";
import { tempUser } from "@/utils/tempUser";
import { useHooks } from "@/hooks/useHooks";
import VerifyCode from "./(verify-code)/VerifyCode";

interface IValid {
  defaultMsg: string;
  btnName: string;
  isValid?: boolean;
  mode: "join" | "find-pw";
}

export default function VerifyEmail({ defaultMsg, btnName, mode }: IValid) {
  const { handleEmailRegex } = handleRegex();
  const { useRoute } = useHooks();

  const [isErr, setIsErr] = useState(false);
  const [msg, setMsg] = useState(defaultMsg);
  const [email, setEmail] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsErr(false);
    setMsg("");

    if (!handleEmailRegex(email)) {
      setIsErr(true);
      setMsg("유효한 이메일을 입력해 주세요.");
      return;
    }

    const existed = tempUser.find((v) => v.email === email);

    if (mode === "join") {
      if (existed) {
        setIsErr(true);
        setMsg("이미 존재하는 이메일 입니다.");
        return;
      }

      // ✅ 성공
      localStorage.setItem("email", email);
      useRoute(`/auth/join/verify-email/code`);
    } else {
      if (!existed) {
        setIsErr(true);
        setMsg("존재하지 않는 이메일 입니다.");
        return;
      }

      // ✅ 성공
      localStorage.setItem("email", email);
      useRoute(`/auth/find-pw/code`);
    }
  };

  useEffect(() => {
    const localEmail = localStorage.getItem("email");
    if (localEmail) {
      setEmail(localEmail);
    } else {
      setEmail("");
    }
  }, []);

  return (
    <>
      <form onSubmit={onSubmit}>
        <div style={{ marginBottom: "144px" }}>
          <div style={{ padding: "16px 0" }}>
            <InputBox
              id="inputEmail"
              type="email"
              placeholder="이메일 ex) chuckchuck@naver.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <FormMessage pdTop="0" variant={isErr ? "error" : "info"} text={msg} />
        </div>

        <PrimayBtn type="submit" label={btnName} addClass="long" />
      </form>
    </>
  );
}
