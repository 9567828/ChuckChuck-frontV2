"use client";

import CardWrap from "@/components/layout/home/card-wrap/CardWrap";
import style from "./attendance.module.scss";
import PrimayBtn from "@/components/ui/buttons/PrimaryBtn";
import { useEffect, useState } from "react";
import { formatDateToString, formatTimeToString, formatGetHour } from "@/utils/formatDate";
import { useHooks } from "@/hooks/useHooks";
import { getHours, getMinutes, hoursToMinutes } from "date-fns";
import { useLoginUserQuery } from "@/hooks/tanstack-query/useQuerys/useQuery";

export default function Attendance() {
  const { data: user, isLoading } = useLoginUserQuery();
  const [mounted, setMounted] = useState(false);

  const [today] = useState(() => formatDateToString(new Date(), "yMd(a)"));
  const [time, setTime] = useState(() => formatTimeToString(new Date(), "hh:ss:ss"));
  const [workState, setWorkState] = useState("출근 전");

  const [btnName, setBtnName] = useState("출근하기");
  const [isDisable, setIsDisable] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTime(formatTimeToString(new Date(), "hh:ss:ss"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 출퇴근 시간에 따라 버튼상태 변경
  useEffect(() => {
    const startHour = formatGetHour(user?.startWorkTime!);
    const finishHour = formatGetHour(user?.finishWorkTime!);
    const curHour = getHours(new Date());

    if (startHour === null || finishHour === null) return;

    const isOnWork = localStorage.getItem("onWork");
    const finishTime = localStorage.getItem("finishTime");

    if (finishTime) {
      setIsDisable(true);
      setWorkState("퇴근 완료");
      return;
    }

    if (isOnWork === "true") {
      setWorkState("출근 완료");
      if (curHour >= finishHour) {
        // 퇴근 시간 도달 → 퇴근 버튼 활성화
        setIsDisable(false);
        setBtnName("퇴근하기");
      } else {
        // 근무 중 (아직 퇴근 전)
        setIsDisable(true);
        setWorkState("출근 완료");
      }
      return;
    }

    if (isOnWork !== "true") {
      setWorkState("결근");
      if (curHour < startHour) {
        // 출근 전
        setIsDisable(true);
        setBtnName("출근하기");
      } else if (curHour >= startHour && curHour < finishHour) {
        // 출근 가능 시간
        setIsDisable(false);
        setBtnName("출근하기");
      } else {
        setIsDisable(true);
        setBtnName("퇴근하기");
      }
      return;
    }
  }, [user]);

  // 출퇴근 클릭
  const handleWorkState = () => {
    const isOnWork = localStorage.getItem("onWork");

    if (!isOnWork) {
      localStorage.setItem("onWork", "true");
      localStorage.setItem("attendTime", `${new Date()}`);
      setWorkState("출근 완료");
      setIsDisable(true);
    } else {
      if (workState === "출근 완료") {
        localStorage.removeItem("onWork");
        localStorage.setItem("finishTime", `${new Date()}`);
        setWorkState("퇴근 완료");
        setIsDisable(true);
      }
    }
  };

  if (!mounted) return null;
  return (
    <CardWrap title="출퇴근 관리" src="/ic_attendance.svg" bg="white" allBtn={false}>
      <div className={style["date-wrap"]}>
        <p className="captionXs-m">{today}</p>
        <p className="displayXxl-b">{time}</p>
        <p className={style.text}>{workState}</p>
      </div>
      <PrimayBtn label={btnName} addClass="small" disabled={isDisable} onClick={handleWorkState} />
    </CardWrap>
  );
}
