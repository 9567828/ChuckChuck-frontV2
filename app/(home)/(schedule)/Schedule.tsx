import CardWrap from "@/components/layout/home/card-wrap/CardWrap";

export default function Schedule() {
  const cardTitle = "스케줄";
  return (
    <CardWrap title={cardTitle} alt={cardTitle} src="/ic_fill_calender.svg">
      <h1>일정</h1>
    </CardWrap>
  );
}
