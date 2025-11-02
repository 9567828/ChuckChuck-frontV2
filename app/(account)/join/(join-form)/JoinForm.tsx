"use client";

import CheckBox from "@/components/ui/check-box/CheckBox";
import InputBox from "@/components/ui/input-box/InputBox";
import FormMessage from "@/components/ui/form-message/FormMessage";
import PrimayBtn from "@/components/ui/primary-btn/PrimaryBtn";
import style from "./join.module.scss";
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useEffect, useState } from "react";
import { handleRegex } from "@/utils/regex";
import { useHooks } from "@/hooks/useHooks";

const termsAgree = [
  { id: "private", text: "(필수) 개인정보 수집 이용 동의하기", isRequired: true },
  { id: "service", text: "(필수) 서비스 이용약관 동의하기", isRequired: true },
  { id: "optional", text: "(선택) 메일, SNS 수신에 동의합니다.", isRequired: false },
  { id: "all", text: "모든 약관 및 방침에 동의합니다.", isRequired: false },
];

export default function JoinForm() {
  const { handleOtherRegex } = handleRegex();
  const { useRoute } = useHooks();
  const trimRegex = /\s/;
  const [inputName, setInputName] = useState("");
  const [inputYear, setInputYear] = useState("");
  const [inputMonth, setInputMonth] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [isChecked, setIsChecked] = useState({
    private: true,
    service: true,
    optional: false,
    all: false,
  });
  const [msg, setMsg] = useState("");

  const onChangeAgree = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    if (id === "all") {
      setIsChecked({
        private: checked,
        service: checked,
        optional: checked,
        all: checked,
      });
    } else {
      setIsChecked((prev) => {
        const updated = {
          ...prev,
          [id]: checked,
        };

        // ✅ 모든 항목이 true이면 all도 true로, 하나라도 false면 all은 false로
        const allChecked = updated.private && updated.service && updated.optional;
        return { ...updated, all: allChecked };
      });
    }
  };

  const handleBirth = (e: ChangeEvent<HTMLInputElement>, max: number, setState: Dispatch<SetStateAction<string>>) => {
    let value = e.target.value;

    value = value.replace(/\D/g, "");

    if (parseInt(value) > max) {
      value = value.slice(0, 1);
    }
    setState(value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 특수문자
    const scRegex = /[!@#$%^&*]/;
    const sc = handleOtherRegex(scRegex, inputName);

    if (inputName.trim() === "") {
      setMsg("이름을 입력해주세요.");
      return;
    }

    if (sc) {
      setMsg("사용할 수 없는 이름입니다.");
      return;
    }

    setMsg("");

    if (inputYear.trim() === "" || inputMonth.trim() === "" || inputDate.trim() === "") {
      return;
    }

    if (isChecked.optional) {
      localStorage.setItem("optionalAgree", "true");
    } else {
      localStorage.removeItem("optionalAgree");
    }

    // 검증완료
    const month = inputMonth.padStart(2, "0");
    const date = inputDate.padStart(2, "0");
    const birthDay = `${inputYear.trim()}-${month}-${date}`;
    localStorage.setItem("name", inputName);
    localStorage.setItem("birth", birthDay);

    useRoute("/join/verify-email");
  };

  useEffect(() => {
    const name = localStorage.getItem("name");
    const birth = localStorage.getItem("birth");
    const optionalAgree = localStorage.getItem("optionalAgree");
    if (name && birth) {
      setInputName(name);
      const year = birth.slice(0, 4);
      const month = birth.slice(5, 7);
      const date = birth.slice(8, 10);
      setInputYear(year);
      setInputMonth(month);
      setInputDate(date);
    }

    if (optionalAgree) {
      setIsChecked((prev) => ({
        ...prev,
        optional: true,
        all: true,
      }));
    }
  }, []);

  return (
    <>
      <form onSubmit={onSubmit} className={style.form}>
        <div className={style["input-wrap"]}>
          <InputBox
            isId={true}
            type="text"
            id="inputId"
            placeholder="이름"
            value={inputName}
            onChange={(e) => setInputName(e.target.value.replace(trimRegex, ""))}
          />
        </div>
        <FormMessage pdTop="0" text={msg} />
        <div className={style["birth-wrap"]}>
          <InputBox
            isBirth={true}
            type="tel"
            id="inputYear"
            placeholder="YYYY"
            birthContent="년"
            maxLength={4}
            value={inputYear}
            onChange={(e) => setInputYear(e.target.value)}
          />
          <InputBox
            isBirth={true}
            type="text"
            id="inputMonth"
            placeholder="MM"
            birthContent="월"
            maxLength={2}
            value={inputMonth}
            onChange={(e) => handleBirth(e, 12, setInputMonth)}
          />
          <InputBox
            isBirth={true}
            type="text"
            id="inputDate"
            placeholder="DD"
            birthContent="일"
            maxLength={2}
            value={inputDate}
            onChange={(e) => handleBirth(e, 31, setInputDate)}
          />
        </div>
        <div className={style["terms-wrap"]}>
          {termsAgree.map((t, i) => (
            <CheckBox id={t.id} key={i} checked={isChecked[t.id as keyof typeof isChecked]} onChange={onChangeAgree}>
              <label htmlFor={t.id}>{t.text}</label>
            </CheckBox>
          ))}
        </div>
        <PrimayBtn
          type="submit"
          label="다음"
          addClass="long"
          disabled={isChecked.private === false || isChecked.service === false}
        />
      </form>
    </>
  );
}
