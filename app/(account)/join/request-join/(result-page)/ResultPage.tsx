"use client";

import style from "./result.module.scss";
import ResultBox from "@/components/ui/result-box/ResultBox";
import FormMessage from "@/components/ui/form-message/FormMessage";
import PrimayBtn from "@/components/ui/primary-btn/PrimaryBtn";
import { useHooks } from "@/hooks/useHooks";
import { useEffect, useState } from "react";

export default function ResultPage() {
  const { useRoute } = useHooks();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("name");
    const mail = localStorage.getItem("email");
    if (name && mail) {
      setName(name);
      setEmail(mail);
    }
  }, []);

  const goToLogin = () => {
    localStorage.clear();
    useRoute("/login");
  };

  return (
    <div>
      <p className={style.info}>해당 정보로 회사에 가입요청을 보내시겠습니까?</p>
      <div className={style["meta-wrap"]}>
        <ResultBox email={email} meta={name} />
        <FormMessage
          pdTop="0"
          variant="info"
          text="가입 요청이 성공적으로 전송되었습니다. 관리자가 승인하면 로그인할 수 있습니다."
        />
      </div>
      <PrimayBtn type="button" label="로그인하러가기" addClass="long" onClick={goToLogin} />
    </div>
  );
}
