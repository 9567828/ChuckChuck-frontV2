"use client";

import { useHooks } from "@/hooks/useHooks";
import { useCookies } from "next-client-cookies";
import { getCookies } from "next-client-cookies/server";

const cookieList = ["userId", "isLogin", "autoLogin", "role"];

export const handleCookie = () => {
  const { useRoute } = useHooks();
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
    useRoute("/");
  };

  return { getCookie, handleLogout };
};
