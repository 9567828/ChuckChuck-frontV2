"use client";

import EditImg from "@/components/edit-img/EditImg";
import InputEditProfile from "@/components/ui/input-box/InputEditProfile";
import { useState } from "react";
import style from "./edit.module.scss";
import { useSearchParams } from "next/navigation";
import { tempUser } from "@/utils/tempUser";
import ConfirmBtn from "@/components/ui/confrim-btn/ConfirmBtn";
import { useHooks } from "@/hooks/useHooks";

export default function EditProfile() {
  const params = useSearchParams();
  const userId = params.get("userId");
  const { useRoute } = useHooks();
  const [inputName, setInputName] = useState("");
  const [inputTel, setInputTel] = useState("");
  const [inputPhone, setInputPhone] = useState("");

  const userInfo = tempUser.find((v) => v.email === userId);

  const handleCancel = () => {
    setInputName("");
    setInputTel("");
    setInputPhone("");
    useRoute("/mypage");
  };

  return (
    <div className={style.container}>
      <EditImg title="프로필 이미지" id="symbol" />

      <div className={style["input-wrap"]}>
        <InputEditProfile
          id="empName"
          type="text"
          label="이름"
          placeholder={userInfo?.name!}
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <InputEditProfile
          id="empTel"
          type="tel"
          label="전화번호"
          placeholder={userInfo?.tel!}
          value={inputTel}
          onChange={(e) => setInputTel(e.target.value)}
          maxLength={13}
        />
        <InputEditProfile
          id="empPhone"
          type="tel"
          label="핸드폰 번호"
          placeholder={userInfo?.phone!}
          value={inputPhone}
          onChange={(e) => setInputPhone(e.target.value)}
          maxLength={13}
        />
      </div>
      <ConfirmBtn label="저장하기" variant="action" gap="8px" onCancel={handleCancel} />
    </div>
  );
}
