"use client";

import InputBox from "@/components/ui/input-box/InputBox";
import TextWrap from "@/components/ui/text-wrap/TextWrap";
import PrimayBtn from "@/components/ui/primary-btn/PrimaryBtn";
import { FormEvent, useState } from "react";
import { tempUser } from "@/utils/tempUser";
import { useHooks } from "@/hooks/useHooks";

export default function FindId() {
  const { useRoute } = useHooks();
  const [msg, setMsg] = useState("소속된 회사의 사번을 입력해주세요.");
  const [isErr, setIsErr] = useState(false);
  const [inputEmpCode, setInputEmpCode] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const exist = tempUser.find((v) => v.empCode === inputEmpCode);

    if (exist !== undefined) {
      useRoute(`/auth/find-id/result?email=${exist.email}&join-date=${exist.joinDate}`);
    } else {
      setIsErr(true);
      setMsg("입력하신 사번과 일치하는 정보가 존재하지 않습니다.");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div style={{ padding: "16px 0", marginBottom: "136px" }}>
        <InputBox placeholder="사번" onChange={(e) => setInputEmpCode(e.target.value)} />
        <TextWrap text={msg} variant={isErr ? "error" : "info"} />
      </div>
      <PrimayBtn label="다음" addClass="long" />
    </form>
  );
}
