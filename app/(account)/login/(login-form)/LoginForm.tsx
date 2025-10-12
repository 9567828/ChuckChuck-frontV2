"use client";

import InputBox from "@/components/ui/input-box/InputBox";
import style from "./login-form.module.scss";
import CheckBox from "@/components/ui/check-box/CheckBox";
import Link from "next/link";
import PrimayBtn from "@/components/ui/primary-btn/PrimaryBtn";
import FormMessage from "@/components/ui/form-message/FormMessage";
import { FormEvent, useState } from "react";
import { tempUser } from "@/utils/tempUser";
import { useHooks } from "@/hooks/useHooks";
import { handleRegex } from "@/utils/regex";
import { useCreateMutation } from "@/hooks/react-query/useMutation";
import { useQueryClient } from "@tanstack/react-query";
import PasswordBox from "@/components/ui/input-box/PasswordBox";

const findAccount = [
  { href: "/auth/find-id", name: "아이디 찾기" },
  { href: "/auth/find-pw", name: "비밀번호 찾기" },
];

export default function LoginForm() {
  const { useRoute } = useHooks();
  const { handleEmailRegex } = handleRegex();
  const { mutate } = useCreateMutation();
  const queryClient = useQueryClient();

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [msg, setMsg] = useState("");
  const [checkedAuto, setCheckedAuto] = useState(false);

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

    // 로그인 성공
    if (exist.email === email.trim() || exist.password === pw.trim()) {
      const { password, ...data } = exist;
      const userObj = {
        data,
        // data: {
        //   email: exist.email,
        //   name: exist.name,
        //   empCode: exist.empCode,
        //   avatarURL: exist.avatarURL,
        //   admin: exist.admin,
        //   joinDate: exist.joinDate,
        //   startWorkTime: exist.startWorkTime,
        //   finishWorkTime: exist.finishWorkTime,
        // },
      };
      mutate(userObj, {
        onSuccess: () => {
          queryClient.setQueryData(["user"], userObj);
          if (checkedAuto) {
            document.cookie = `isLogin=true; path=/; max-age=${60 * 60 * 24 * 7}`;
            document.cookie = `userId=${exist.email}; path=/; max-age=${60 * 60 * 24 * 7}`;
            document.cookie = `autoLogin=true; path=/; max-age=${60 * 60 * 24 * 7}`;
          } else {
            document.cookie = `isLogin=true; path=/;`;
            document.cookie = `userId=${exist.email}; path=/;`;
          }
          useRoute("/");
        },
        onError: (error) => {
          console.log(error);
        },
      });
    }
  };

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
        <PasswordBox id="inputPw" placeholder="••••••••••" value={pw} onChange={(e) => setPw(e.target.value)} />
      </form>
      <FormMessage pdTop="0" text={msg} />
      <div className={style["auto-wrap"]}>
        <CheckBox variant="circle" id="autoLogin" checked={checkedAuto} onChange={() => setCheckedAuto((prev) => !prev)}>
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
