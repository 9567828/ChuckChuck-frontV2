"use client";

import Link from "next/link";
import MainModalLayout from "../layout/main-modal/MainModalLayout";
import style from "./modal.module.scss";
import { useHooks } from "@/hooks/useHooks";
import { useEffect, useState } from "react";
import { getCookie } from "@/utils/cookieUitls";

export default function ProfileModal({ onClose }: { onClose: () => void }) {
  const { useRoute } = useHooks();
  const [isCookie, setIsCookie] = useState(false);

  useEffect(() => {
    const isLogin = getCookie("isLogin");
    const userId = getCookie("userId");

    if (isLogin && userId) {
      setIsCookie(true);
    }
  }, []);

  const hadleLogout = () => {
    if (isCookie) {
      document.cookie = "isLogin=; path=/; max-age=0";
      document.cookie = "userId=; path=/; max-age=0";
      useRoute("/login");
    }
  };

  return (
    <MainModalLayout title="프로필" onClose={onClose} variant="content-wrap" addClass="profile">
      <div className={`${style["content-wrap"]} ${style.profile}`}>
        <Link href={"/mypage"} className={style["txt-pad"]}>
          프로필 변경
        </Link>
        <button className={style["txt-pad"]} style={{ color: "#FF5116" }} onClick={hadleLogout}>
          로그아웃
        </button>
      </div>
    </MainModalLayout>
  );
}
