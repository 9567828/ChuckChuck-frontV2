"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";

const paths = [
  { href: "/join", title: "이름 / 생년월일" },
  { href: "/join/verify-email", title: "아이디 생성" },
  { href: "/join/set-password", title: "비밀번호 생성" },
  { href: "/join/request-join", title: "가입요청 보내기" },
];

export const useHooks = () => {
  const route = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();

  const useRoute = (url: string) => {
    route.push(url);
  };

  const useReplace = (path: string) => {
    route.replace(path);
  };

  const useRouteBack = () => {
    if (path === "/auth/join") {
      localStorage.clear();
    }
    route.back();
  };

  const getPageName = () => {
    for (const p of paths) {
      if (path.startsWith(p.href)) {
        return p.title;
      }
    }
  };

  const isLoginPage = path.startsWith("/auth/login");

  return { useRoute, getPageName, isLoginPage, useRouteBack, useReplace };
};
