"use client";

import "@/styles/components/pages/not-found.scss";
import PrimayBtn from "@/components/ui/buttons/PrimaryBtn";
import { useHooks } from "@/hooks/useHooks";

export default function NotFound() {
  const { useRoute } = useHooks();

  return (
    <div className="not-found-wrap">
      <div className="head">
        <h1>404</h1>
        <h3>Page not found</h3>
      </div>
      <p className="text">앗! 뭐든지 척척 잘해볼려고 했는데 잘 안됐네요.</p>
      <PrimayBtn label="홈으로 돌아가기" onClick={() => useRoute("/")} />
    </div>
  );
}
