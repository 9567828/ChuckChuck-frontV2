import InputBox from "@/components/ui/input-box/InputBox";
import style from "./login-form.module.scss";
import CheckBox from "@/components/ui/check-box/CheckBox";
import Link from "next/link";
import PrimayBtn from "@/components/ui/primary-btn/PrimaryBtn";
import TextWrap from "../../../../components/ui/text-wrap/TextWrap";

const findAccount = [
  { href: "/find-id", name: "아이디 찾기" },
  { href: "/find-pw", name: "비밀번호 찾기" },
];

export default function LoginForm() {
  return (
    <div>
      <form action="" id="loginForm" className={style.form}>
        <InputBox type="text" id="inputId" placeholder="chuckchuck@gmail.com" />
        <InputBox type="password" id="inputPw" placeholder="••••••••••" />
      </form>
      <TextWrap text="아이디를 확인해 주세요" />
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
