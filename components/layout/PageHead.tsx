"use client";

import { useHooks } from "@/hooks/useHooks";

interface IPage {
  pageName?: string;
}

export default function PageHead({ pageName }: IPage) {
  const { isLogin } = useHooks();

  return isLogin ? (
    <img style={{ width: "200px", height: "27px", marginBottom: "38px" }} src="/imgs/logo_combination.svg" alt="logo" />
  ) : (
    <h1 className="titleXl-b" style={{ marginBottom: "24px" }}>
      {pageName}
    </h1>
  );
}
