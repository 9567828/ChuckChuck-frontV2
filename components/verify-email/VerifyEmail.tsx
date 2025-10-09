// "use client";

// import PrimayBtn from "@/components/ui/primary-btn/PrimaryBtn";
// import { ChangeEvent, FormEvent, useEffect, useState } from "react";
// import CheckEmail from "@/components/verify-email/(check-email)/CheckEmail";
// import VerifyCode from "@/components/verify-email/(verify-code)/VerifyCode";
// import style from "./verify.module.scss";
// import InputBox from "@/components/ui/input-box/InputBox";
// import TextWrap from "@/components/ui/text-wrap/TextWrap";

// interface IValid {
//   onSubmit: (email: string) => boolean;
//   infoMsg: string;
// }

// const codeNum = "456789";

// export default function VerifyEmail({ onSubmit, infoMsg }: IValid) {
//   const [isValid, setIsValid] = useState(false);
//   const [btnName, setBtnName] = useState("전송하기");
//   const [email, setEmail] = useState("");
//   const [code, setCode] = useState("");
//   const [time, setTime] = useState("");
//   const [timeLeft, setTimeLeft] = useState(120);
//   const [errMsg, setErrMsg] = useState("2분 내로 인증을 완료해주세요");

//   const checkEmail = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const result = onSubmit(email);
//     if (result) {
//       setIsValid(false);
//     } else {
//       setIsValid(true);
//       setBtnName("인증하기");
//     }
//   };

//   const sendCodeHandler = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (timeLeft <= 0) {
//       setErrMsg("입력시간이 초과되었습니다.");
//       return;
//     }

//     if (!codeNum.includes(code)) {
//       setErrMsg("인증번호가 일치하지 않습니다.");
//       return;
//     } else {
//       alert("일치");
//     }
//   };

//   useEffect(() => {
//     if (timeLeft <= 0) return; // 0초면 타이머 종료
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => {
//         if (prev <= 1) {
//           clearInterval(timer);
//           console.log(timer);
//           return 0; // 00:00에서 멈춤
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
//     const seconds = String(timeLeft % 60).padStart(2, "0");
//     if (`${minutes}:${seconds}` === "00:01") {
//       setTime(`${minutes}:00`);
//       setErrMsg("입력시간이 초과 되었습니다.");
//     } else {
//       setTime(`${minutes}:${seconds}`);
//     }

//     // 언마운트나 timeLeft가 바뀔 때마다 정리
//     return () => clearInterval(timer);
//   }, [isValid, timeLeft]);

//   const onResend = () => {
//     console.log("클릭");
//   };

//   return (
//     <>
//       <form onSubmit={isValid ? sendCodeHandler : checkEmail}>
//         <div className={style["input-wrap"]}>
//           <InputBox
//             id="inputEmail"
//             type="email"
//             placeholder="이메일 ex) chuckchuck@naver.com"
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             disabled={isValid}
//           />
//           <div>
//             <TextWrap variant="info" text={infoMsg} isShow={true} />
//           </div>
//           {/* <CheckEmail onChange={(e) => setEmail(e.target.value)} value={email} isShow={true} text={infoMsg} isAble={isValid} /> */}
//           <VerifyCode
//             isValid={isValid}
//             value={code}
//             onChange={(e) => setCode(e.target.value)}
//             text={errMsg}
//             time={time}
//             onClick={onResend}
//           />
//         </div>
//         <PrimayBtn type="submit" label={btnName} addClass={"long"} disabled={email === ""} />
//       </form>
//     </>
//   );
// }
"use client";

import PrimayBtn from "@/components/ui/primary-btn/PrimaryBtn";
import React, { FormHTMLAttributes } from "react";

interface IValid extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  btnName: string;
  isValid?: boolean;
}

export default function VerifyEmail({ onSubmit, children, btnName, isValid = false }: IValid) {
  return (
    <>
      <form onSubmit={onSubmit}>
        <div style={{ marginBottom: "144px" }}>{children}</div>
        <PrimayBtn type="submit" label={btnName} addClass={"long"} disabled={isValid} />
      </form>
    </>
  );
}
