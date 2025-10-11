import CardWrap from "@/components/layout/home/card-wrap/CardWrap";

export default function Vacation() {
  const cardTitle = "휴가현황";
  return (
    <CardWrap title={cardTitle} alt={cardTitle} src="/ic_vacation.svg">
      <h1>휴가</h1>
    </CardWrap>
  );
}
