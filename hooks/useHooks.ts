"use client";

import { IUser, tempUser } from "@/utils/tempUser";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";
import { useUserQuery } from "./react-query/useQuery/useQuery";

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

  const useRouteBack = () => {
    if (path === "/join") {
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

  const queryToString = (paramName: string): string | null => {
    const raw = searchParams.get(paramName);
    if (!raw) return null; // null 또는 빈값 방어

    try {
      const decoded = decodeURIComponent(raw.trim()); // URL 인코딩 해제 + 공백 제거
      if (decoded === "") return null; // 공백만 있을 경우 무효 처리
      return decoded;
    } catch (err) {
      console.error(`Invalid query param: ${paramName}`, err);
      return null; // 디코딩 실패 시 안전하게 null 반환
    }
  };

  const isLoginPage = path.startsWith("/login");

  const useUserInfo = () => {
    const { data, isError } = useUserQuery();
    const [userInfo, setUserInfo] = useState<IUser | null>(null);

    useEffect(() => {
      if (!data) return;
      const existed = tempUser.find((v) => v.email === data);
      setUserInfo(existed ?? null);
    }, [data]);

    return userInfo;
  };

  return { useRoute, getPageName, isLoginPage, useRouteBack, queryToString, useUserInfo };
};
