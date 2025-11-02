"use client";

import ProfileImg from "@/components/layout/ProfileImg";
import { tempUser } from "@/utils/tempUser";
import style from "./myprofile.module.scss";
import PrimayBtn from "@/components/ui/primary-btn/PrimaryBtn";
import { useHooks } from "@/hooks/useHooks";
import MarketingAgree from "@/components/modal/MarketingAgree";
import { useState } from "react";
import EditPassword from "@/components/modal/EditPassword";

type modal = "marketing" | "password";

export default function MyProfile({ userId }: { userId: string }) {
  const { useRoute } = useHooks();
  const [openModal, setOpenModal] = useState<Record<string, boolean>>({
    marketing: false,
    password: false,
  });

  const handleModal = (modal: modal) => {
    setOpenModal((prev) => ({
      [modal]: !prev[modal],
    }));
  };
  const getUserInfo = tempUser.find((u) => u.email === userId);

  const metaList = [
    {
      title: "개인정보",
      value: [
        { title: "이름", value: getUserInfo?.name },
        { title: "이메일", value: getUserInfo?.email },
        { title: "핸드폰번호", value: getUserInfo?.phone },
        { title: "생일", value: getUserInfo?.birthDate },
      ],
    },
    {
      title: "조직",
      value: [
        { title: "부서", value: getUserInfo?.ogarnization },
        { title: "직무", value: getUserInfo?.duty },
        { title: "직급", value: getUserInfo?.level },
      ],
    },
  ];

  return (
    <>
      <div>
        <div className={style.container}>
          <ProfileImg title="프로필 이미지">
            <img src={"/imgs/default-img.svg"} alt="이미지미리보기" />
          </ProfileImg>
          {metaList.map((m, i) => (
            <div key={i} className={style["info-wrap"]}>
              <h1 className="bodySm-b">{m.title}</h1>
              <ul className={style["meta-wrap"]}>
                {m.value.map((v, idx) => (
                  <li key={idx} className={style.meta}>
                    <p>{v.title}</p>
                    <p>{v.value}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <PrimayBtn addClass="edit" label="수정하기" onClick={() => useRoute(`/mypage/edit?userId=${userId}`)} />
        </div>

        <div className={style["terms-wrap"]}>
          <button onClick={() => handleModal("marketing")}>마케팅 이용 • 수신 동의 변경하기</button>
          <button onClick={() => handleModal("password")}>비밀번호 변경하기</button>
          <button className={style.leave}>회원 탈퇴하기</button>
        </div>
      </div>
      {openModal.marketing && <MarketingAgree onClose={() => handleModal("marketing")} />}
      {openModal.password && <EditPassword userId={userId} onClose={() => handleModal("password")} />}
    </>
  );
}
