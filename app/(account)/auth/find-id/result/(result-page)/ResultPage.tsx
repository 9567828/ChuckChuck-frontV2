"use client";

import style from "./result.module.scss";
import ResultBox from "@/components/ui/result-box/ResultBox";
import PrimayBtn from "@/components/ui/primary-btn/PrimaryBtn";
import { useHooks } from "@/hooks/useHooks";
import { useSearchParams } from "next/navigation";

export default function ResultPage() {
  const { queryToString, useRoute } = useHooks();

  const mail = queryToString("email");
  const date = queryToString("join-date");

  return (
    <div>
      <div className={style["result-wrap"]}>
        <ResultBox email={mail!} meta={date!} />
        <button type="button" className={style["find-btn"]} onClick={() => useRoute("/auth/find-pw")}>
          <p>비밀번호 찾기</p>
          <img src="/imgs/icons/ic_move_in.svg" alt="비밀번호찾기로이동" />
        </button>
      </div>
      <PrimayBtn type="button" label="로그인" addClass="long" onClick={() => useRoute("/login")} />
    </div>
  );
}
