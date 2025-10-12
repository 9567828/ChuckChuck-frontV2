"use client";

import SideLayout from "@/components/layout/side-layout/SideLayout";
import style from "./side.module.scss";
import { usePathname } from "next/navigation";

export default function MyPageSide() {
  const path = usePathname();

  return (
    <SideLayout title="마이페이지">
      <div className={`${style.menu} ${path === "/mypage" ? style.active : ""}`.trim()}>프로필 변경</div>
    </SideLayout>
  );
}
