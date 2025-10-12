"use client";

import Link from "next/link";
import style from "./menu.module.scss";
import { usePathname } from "next/navigation";
import { useHooks } from "@/hooks/useHooks";

interface IHeadMenu {
  variant?: "menu-row" | "menu-col";
  onClick?: () => void;
}

export const headerMenuList = [
  { href: "/", menu: "홈" },
  { href: "/electric", menu: "전자결재" },
  { href: "/attendance", menu: "근태관리" },
  { href: "/schedule", menu: "일정관리" },
  { href: "/boards", menu: "게시판" },
  { href: "/organization", menu: "조직도" },
  { href: "/admin/company-info", menu: "관리자", adminOnly: true },
];

export default function HeadMenuList({ variant = "menu-row", onClick }: IHeadMenu) {
  const path = usePathname();
  const { useUserInfo } = useHooks();
  const user = useUserInfo();

  return (
    <ul className={style[variant]}>
      {headerMenuList
        .filter((m) => !(m.adminOnly && !user?.admin))
        .map((m, i) => (
          <li key={i} className={`${style.menu} ${path === m.href && path.startsWith(m.href) ? style.active : ""}`.trim()}>
            <Link href={m.href} onClick={onClick}>
              {m.menu}
            </Link>
          </li>
        ))}
    </ul>
  );
}
