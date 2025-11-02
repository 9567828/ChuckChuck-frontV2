"use client";

import CardWrap from "@/components/layout/home/card-wrap/CardWrap";
import style from "./notice.module.scss";
import Link from "next/link";

const noticeList = [
  {
    title:
      "최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용",
    date: "2024.12.09(월) 09:42",
  },
  {
    title: "전재결재 서류 양식 배포",
    date: "2024.12.06(금) 15:28",
  },
  {
    title: "1층 화장실 임시 통제 안내",
    date: "2024.12.06(금) 14:00",
  },
];

export default function Notice({ userRole }: { userRole: string }) {
  const sliceNum = userRole === "true" ? 3 : noticeList.length;
  return (
    <CardWrap title="공지사항" src="ic_fill_notice.svg" bg="white">
      <div className={style["notice-wrap"]}>
        {noticeList.slice(0, sliceNum).map((n, i) => (
          <Link key={i} href={""} className={style["notice-list"]}>
            <p className="eclips">{n.title}</p>
            <p className="captionXs-r">{n.date}</p>
          </Link>
        ))}
      </div>
    </CardWrap>
  );
}
