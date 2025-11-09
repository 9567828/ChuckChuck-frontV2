"use client";

import Link from "next/link";
import MainModalLayout from "../layout/main-modal-layout/MainModalLayout";
import style from "./modal.module.scss";
import { handleCookie } from "@/utils/cookieUitls";

export default function ProfileModal({ onClose }: { onClose: () => void }) {
  const { handleLogout } = handleCookie();

  return (
    <MainModalLayout title="프로필" onClose={onClose} variant="content-wrap" addClass="profile">
      <div className={`${style["content-wrap"]} ${style.profile}`} onClick={onClose}>
        <Link href={"/mypage"} className={style["txt-pad"]}>
          프로필 변경
        </Link>
        <button className={style["txt-pad"]} style={{ color: "#FF5116" }} onClick={handleLogout}>
          로그아웃
        </button>
      </div>
    </MainModalLayout>
  );
}
