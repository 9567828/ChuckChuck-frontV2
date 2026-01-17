"use client";

import { useHooks } from "@/hooks/useHooks";
import { useCookies } from "next-client-cookies";
import { getCookies } from "next-client-cookies/server";

const cookieList = ["autoLogin", "token"];

export const handleCookie = () => {
  const { useReplace } = useHooks();
  const cookieStore = useCookies();

  const getCookie = async (name: string) => {
    const cookies = await getCookies();
    const value = cookies.get(name);

    return value;
  };

  const handleLogout = () => {
    cookieList.forEach((v) => {
      cookieStore.remove(v);
    });
    useReplace("/");
  };

  return { getCookie, handleLogout };
};
