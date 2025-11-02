"use server";

import { cookies } from "next/headers";

export const getServerCookies = async () => {
  const cookieStore = await cookies();

  const getCookie = (name: string) => {
    const cookie = cookieStore.get(name);
    const value = cookie?.value;

    return value ? value : null;
  };

  return { getCookie };
};
