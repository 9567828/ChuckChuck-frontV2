"use client";

import style from "./result.module.scss";
import ResultBox from "@/components/ui/result-box/ResultBox";
import PrimayBtn from "@/components/ui/buttons/PrimaryBtn";
import { useHooks } from "@/hooks/useHooks";
import { QueryType } from "@/utils/props";

export default function ResultPage({ query }: { query: QueryType }) {
  const { useRoute } = useHooks();
  const { email, joinDate } = query;

  return (
    <div>
      <div className={style["result-wrap"]}>
        <ResultBox email={email} meta={joinDate} />
        <button type="button" className={style["find-btn"]} onClick={() => useRoute("/auth/find-pw")}>
          <p>비밀번호 찾기</p>
          <img src="/imgs/icons/ic_move_in.svg" alt="비밀번호찾기로이동" />
        </button>
      </div>
      <PrimayBtn type="button" label="로그인" addClass="long" onClick={() => useRoute("/auth/login")} />
    </div>
  );
}
