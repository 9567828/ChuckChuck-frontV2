import style from "./electric.module.scss";
import CardWrap from "@/components/layout/home/card-wrap/CardWrap";
import AvatarWrap from "@/components/ui/avatar-wrap/AvatarWrap";
import Link from "next/link";

const electricLists = [
  {
    title:
      "최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용",
    date: "2024.12.24(금) 09:42",
    name: "김지훈",
    src: "",
  },
  {
    title: "24.12.14~24.12.14 휴가신청서 (연차 1개 사용)",
    date: "2024.12.06(금) 18:34",
    name: "정연수",
    src: "/imgs/202301261737390.jpg",
  },
  {
    title: "최종 촬영 기안서",
    date: "2024.12.06(금) 16:27",
    name: "최성훈",
    src: "/imgs/202301261737390.jpg",
  },
  {
    title: "척척 패키지 리뉴얼 건의 지출결의서",
    date: "2024.12.06(금) 14:42",
    name: "이석현",
    src: "",
  },
  {
    title: "경조금 지급 신청서",
    date: "2024.12.06(금) 08:10",
    name: "김현정",
    src: "",
  },
];

export default function Electric() {
  const cardTitle = "전자결재";
  return (
    <CardWrap src="ic_fill_electric.svg" alt={cardTitle} title={cardTitle} lenght={7}>
      <div className={style["list-wrap"]}>
        {electricLists.map((e, i) => (
          <Link href={""} key={i} className={style.grid}>
            <p className={style.eclips}>{e.title}</p>
            <div className={style.flex}>
              <p className={style.date}>{e.date}</p>
              <AvatarWrap name={e.name} isFullName={true} src={e.src} alt={e.name} />
            </div>
          </Link>
        ))}
      </div>
    </CardWrap>
  );
}
