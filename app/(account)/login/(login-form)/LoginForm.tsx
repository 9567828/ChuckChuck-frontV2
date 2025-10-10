"use client";

import InputBox from "@/components/ui/input-box/InputBox";
import style from "./login-form.module.scss";
import CheckBox from "@/components/ui/check-box/CheckBox";
import Link from "next/link";
import PrimayBtn from "@/components/ui/primary-btn/PrimaryBtn";
import TextWrap from "@/components/ui/text-wrap/TextWrap";
import { FormEvent, useEffect, useState } from "react";
import { tempUser } from "@/utils/tempUser";
import { useHooks } from "@/hooks/useHooks";
import { handleRegex } from "@/utils/regex";

const findAccount = [
  { href: "/auth/find-id", name: "아이디 찾기" },
  { href: "/auth/find-pw", name: "비밀번호 찾기" },
];

export default function LoginForm() {
  const { useRoute } = useHooks();
  const { handleEmailRegex } = handleRegex();

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [msg, setMsg] = useState("");

  const onSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailRg = handleEmailRegex(email);

    if (!emailRg) {
      setMsg("유효한 이메일을 입력해 주세요.");
      return;
    }

    if (email.trim() === "") {
      setMsg("아이디를 입력해 주세요.");
      return;
    }

    if (pw.trim() === "") {
      setMsg("비밀번호를 입력해 주세요.");
      return;
    }

    const exist = tempUser.find((v) => v.email === email);

    if (exist === undefined || exist.password !== pw.trim()) {
      setMsg("아이디 또는 비밀번호를 확인해주세요.");
      return;
    }

    if (exist.email === email.trim() || exist.password === pw.trim()) {
      localStorage.setItem("isLogin", "true");
      const userObj = {
        email: exist.email,
        name: exist.name,
        empCode: exist.empCode,
        avartarURL: exist.avatarURL,
        admin: exist.admin,
        joinDate: exist.joinDate,
      };

      localStorage.setItem("userInfo", JSON.stringify(userObj));
      useRoute("/");
    }
  };

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");
    if (isLogin === "true") {
      useRoute("/");
    }
  }, []);

  return (
    <div>
      <form id="loginForm" className={style.form} onSubmit={onSumbit}>
        <InputBox
          type="text"
          id="inputId"
          placeholder="chuckchuck@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputBox type="password" id="inputPw" placeholder="••••••••••" value={pw} onChange={(e) => setPw(e.target.value)} />
      </form>
      <TextWrap pdTop="0" text={msg} />
      <div className={style["auto-wrap"]}>
        <CheckBox variant="circle" id="autoLogin">
          <label htmlFor="autoLogin" className={style.label}>
            자동 로그인
          </label>
        </CheckBox>
        <ul className={style["find-account"]}>
          {findAccount.map((f, i) => (
            <li key={i}>
              <Link href={f.href}>{f.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={style["btn-wrap"]}>
        <PrimayBtn type="submit" form="loginForm" label="로그인" addClass="long" />
        <PrimayBtn type="button" isGoogle={true} variant="google" label="구글 계정으로 로그인하기" />
      </div>
    </div>
  );
}
