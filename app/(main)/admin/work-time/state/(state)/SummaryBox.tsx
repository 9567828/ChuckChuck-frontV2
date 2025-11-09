import style from "./state.module.scss";

interface ISummary {
  name: string;
  duty: string;
  unit: string;
}

const list = [
  { title: "근무가능시간", time: "52" },
  { title: "필수근무시간", time: "40" },
  { title: "실근무시간", time: "40" },
  { title: "연장근무시간", time: "00" },
  { title: "야간근무시간", time: "00" },
];

export default function SummaryBox({ name, duty, unit }: ISummary) {
  return (
    <div className={style["summary-box"]}>
      <div className={style.flex}>
        <h1 className="bodySm-b">{name}</h1>
        <p className="captionXxs-m">{duty}</p>
      </div>
      <div className={style["summary-content"]}>
        <h4>{`단위: ${unit}`}</h4>
        <ul className={style["flex-col"]}>
          {list.map((m, i) => (
            <li key={i} className={style.content}>
              <p>{m.title}</p>
              <p className={style["summary-time"]}>{`${m.time}시간`}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
