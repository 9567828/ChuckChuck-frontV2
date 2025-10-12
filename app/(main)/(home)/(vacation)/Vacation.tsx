"use client";

import CardWrap from "@/components/layout/home/card-wrap/CardWrap";
import style from "./vacation.module.scss";
import AvatarWrap from "@/components/ui/avatar-wrap/AvatarWrap";
import Link from "next/link";

const vacationList = [
  { herf: "", name: "최수종", src: "", alt: "", date: "24.12.14~24.12.17" },
  { herf: "", name: "정연수", src: "", alt: "", date: "24.12.14~24.12.14" },
  { herf: "", name: "이상호", src: "", alt: "", date: "24.12.13~24.12.20" },
  { herf: "", name: "김여정", src: "", alt: "", date: "24.12.11~24.12.17" },
  { herf: "", name: "박민우", src: "", alt: "", date: "24.12.11~24.12.17" },
  { herf: "", name: "최수종", src: "", alt: "", date: "24.12.14~24.12.17" },
];

export default function Vacation() {
  return (
    <CardWrap title="휴가현황" src="/ic_vacation.svg" bg="white">
      <div className={style["list-wrap"]}>
        {vacationList.slice(0, 5).map((v, i) => (
          <Link href={""} key={i} className={style.content}>
            <AvatarWrap isFullName={true} name={v.name} src={v.src} alt={v.alt} />
            <p className={style["date-text"]}>{v.date}</p>
          </Link>
        ))}
      </div>
    </CardWrap>
  );
}
