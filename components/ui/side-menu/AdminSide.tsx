"use client";

import Link from "next/link";
import style from "./side.module.scss";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SideLayout from "@/components/layout/side-layout/SideLayout";

const menuItems = [
  { name: "회사정보", href: "/admin/company-info" },
  {
    name: "출퇴근 관리",
    eng: "attend",
    submenu: [
      { name: "출퇴근 관리", href: "/admin/work-time/state" },
      { name: "출퇴근 설정", href: "/admin/work-time/setting" },
    ],
  },
  {
    name: "근무/휴가 관리",
    eng: "work",
    submenu: [
      { name: "하위메뉴", href: "/empty" },
      { name: "하위메뉴", href: "/empty" },
    ],
  },
  {
    name: "조직원 관리",
    eng: "organize",
    submenu: [
      { name: "하위메뉴", href: "/empty" },
      { name: "하위메뉴", href: "/empty" },
    ],
  },
  { name: "환경설정", href: "/empty" },
];

export default function AdminSide() {
  const path = usePathname();
  const [subOpen, setSubOpen] = useState<Record<string, boolean>>({});

  const toggleMenu = (id: number) => {
    setSubOpen((prevState) => {
      const newState = {
        ...prevState,
        [id]: !prevState[id],
      };
      return newState;
    });
  };

  // 메뉴 상태 복원
  useEffect(() => {
    const savedState = sessionStorage.getItem("activeMenu");
    if (savedState) {
      setSubOpen(JSON.parse(savedState));
    }
  }, []);

  // 메뉴 상태 저장
  useEffect(() => {
    sessionStorage.setItem("activeMenu", JSON.stringify(subOpen));
  }, [subOpen]);

  return (
    <SideLayout title="관리자">
      <ul className={style["menu-list"]}>
        {menuItems.map((item, id) => (
          <li key={id}>
            {item.href ? (
              <Link
                href={item.href}
                className={`${style.menu} ${path === item.href && path.startsWith(item.href) ? style.active : ""}`.trim()}
              >
                {item.name}
              </Link>
            ) : null}
            {item.submenu ? (
              <>
                <button onClick={() => toggleMenu(id)} className={`${style.flex} ${style.menu}`.trim()}>
                  <p>{item.name}</p>
                  <img src="/imgs/icons/ic_move_in.svg" alt="메뉴화살표" className={style.img} />
                </button>
                {subOpen[id] ? (
                  <ul>
                    {item.submenu.map((sub, i) => (
                      <li key={i}>
                        <Link
                          href={sub.href}
                          className={`${style["sub-menu"]} ${
                            path === sub.href && path.startsWith(sub.href) ? style.active : ""
                          }`.trim()}
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </>
            ) : null}
          </li>
        ))}
      </ul>
    </SideLayout>
  );
}
