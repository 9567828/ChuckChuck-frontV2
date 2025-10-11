import CardWrap from "@/components/layout/home/card-wrap/CardWrap";

export default function Notice() {
  const cardTitle = "공지사항";
  return (
    <CardWrap title={cardTitle} src="ic_fill_notice.svg" alt={cardTitle} bg="white">
      <h1>공지사항</h1>
    </CardWrap>
  );
}
