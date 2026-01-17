"use client";

import Link from "next/link";
import style from "./menu.module.scss";
import { usePathname } from "next/navigation";
import { useHooks } from "@/hooks/useHooks";
import { useLoginUserQuery } from "@/hooks/tanstack-query/useQuerys/useQuery";

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
  { href: "/admin", menu: "관리자", adminOnly: true },
];

export default function HeadMenuList({ variant = "menu-row", onClick }: IHeadMenu) {
  const path = usePathname();
  const { data: user, isLoading } = useLoginUserQuery();

  const isActive = (href: string) => {
    if (href === "/") {
      return path === "/";
    }
    return path.startsWith(href);
  };

  return (
    <ul className={style[variant]}>
      {headerMenuList
        .filter((m) => !(m.adminOnly && !user?.admin))
        .map((m, i) => (
          <li key={i} className={`${style.menu} ${isActive(m.href) ? style.active : ""}`.trim()}>
            <Link href={m.href} onClick={onClick}>
              {m.menu}
            </Link>
          </li>
        ))}
    </ul>
  );
}
