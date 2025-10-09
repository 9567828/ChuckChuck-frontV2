"use client";

import { usePathname, useRouter } from "next/navigation";

const paths = [
  { href: "/join", title: "이름 / 생년월일" },
  { href: "/join/verify-email", title: "아이디 생성" },
  { href: "/join/set-password", title: "비밀번호 생성" },
  { href: "/join/request-join", title: "가입요청 보내기" },
];

export const useHooks = () => {
  const route = useRouter();
  const path = usePathname();

  const useRoute = (url: string) => {
    route.push(url);
  };

  const useRouteBack = () => {
    route.back();
  };

  const getPageName = () => {
    for (const p of paths) {
      if (path.startsWith(p.href)) {
        return p.title;
      }
    }
  };

  const isLogin = path.startsWith("/login");

  return { useRoute, getPageName, isLogin, useRouteBack };
};
