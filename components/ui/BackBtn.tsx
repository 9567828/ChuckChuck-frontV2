"use client";

import { useHooks } from "@/hooks/useHooks";
import { ButtonHTMLAttributes } from "react";

interface IBtn extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function BackBtn({ ...props }: IBtn) {
  const { isLoginPage, useRoute, useRouteBack } = useHooks();

  const pageRoute = () => {
    if (isLoginPage) {
      useRoute("/join");
    } else {
      useRouteBack();
    }
  };

  return (
    <button {...props} className="titleLg-r" style={{ color: "#616161", marginTop: "37px" }} onClick={pageRoute}>
      {isLoginPage ? "회원가입" : "돌아가기"}
    </button>
  );
}
