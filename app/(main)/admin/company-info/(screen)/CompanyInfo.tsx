"use client";

import EditImg from "@/components/edit-img/EditImg";
import style from "./company.module.scss";
import { useState } from "react";
import InputEditProfile from "@/components/ui/input-box/InputEditProfile";

export default function CompanyInfo() {
  const [nameValue, setNameValue] = useState("");
  const [infoValue, setInfoValue] = useState("");
  const [addrValue, setAdrValue] = useState("");
  const [telValue, setTelValue] = useState("");

  return (
    <div>
      <div className={style["img-wrap"]}>
        <EditImg title="회사 대표 이미지" id="symbol" />
        <EditImg title="회사 로고 이미지" id="logo" />
      </div>
      <div className={style["input-wrap"]}>
        <InputEditProfile
          id="companyName"
          type="text"
          label="회사명"
          placeholder="ex) ChuckChuck"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
        />
        <InputEditProfile
          id="companyInfo"
          type="text"
          label="회사 소개"
          placeholder="ex) Chuck Chuck은 무엇이든 척척"
          value={infoValue}
          onChange={(e) => setInfoValue(e.target.value)}
        />
        <InputEditProfile
          id="companyAddr"
          type="text"
          label="회사 주소"
          placeholder="시/구/동/길"
          value={addrValue}
          onChange={(e) => setAdrValue(e.target.value)}
        />
        <InputEditProfile
          id="companyTel"
          type="tel"
          label="회사 번호"
          placeholder="ex) 02-123-1234"
          value={telValue}
          onChange={(e) => setTelValue(e.target.value)}
        />
      </div>
    </div>
  );
}
