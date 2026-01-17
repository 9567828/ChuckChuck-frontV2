import { InputHTMLAttributes } from "react";
import style from "../work.module.scss";

interface IWorkTimeProps extends InputHTMLAttributes<HTMLInputElement> {
  variant: "start" | "finish";
  kind: "real" | "setUp";
  id: "startReal" | "startSet" | "finishReal" | "finishSet";
}

export default function WorkTimeRadio({ variant, kind, id, ...props }: IWorkTimeProps) {
  const title =
    kind === "real"
      ? `실제 업무 시간으로 ${variant === "start" ? "출근" : "퇴근"}시간을 기록`
      : `설정된 근무 스케줄에 맞춰 ${variant === "start" ? "출근" : "퇴근"} 시간을 기록`;

  const subReal = `${variant === "start" ? "출근" : "퇴근"} 버튼을 클릭한 시간으로 기록합니다.`;
  const subSetUp =
    variant === "start"
      ? `출근 시간보다 일찍 출근하면 설정된 출근 시간에 올림처리 되어 기록됩니다.`
      : `퇴근 시간보다 늦게 퇴근하면 설정된 퇴근 시간에 내림처리 되어 기록됩니다.`;

  return (
    <div className={style["radio-box"]}>
      <input {...props} type="radio" id={id} name={variant} />
      <div>
        <label htmlFor={id} className="captionXs-m">
          {title}
        </label>
        <p className={style["sub-txt"]}>{kind === "real" ? subReal : subSetUp}</p>
      </div>
    </div>
  );
}
