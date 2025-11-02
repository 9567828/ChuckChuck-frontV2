"use client";

import HeadMenuList from "@/components/ui/menu-list/HeadMenuList";
import style from "./header.module.scss";
import AvatarWrap from "@/components/ui/avatar-wrap/AvatarWrap";
import { useHooks } from "@/hooks/useHooks";
import Hamburger from "../hamburger-menu/Hamburger";
import { useState } from "react";
import RequestModal from "@/components/modal/RequestModal";
import AlarmModal from "@/components/modal/AlarmModal";
import ProfileModal from "@/components/modal/ProfileModal";

const iconList = [
  { src: "/imgs/gnb/ic_invite.svg", alt: "요청", id: 1, name: "request" },
  { src: "/imgs/gnb/ic_alarm.svg", alt: "알람", id: 2, name: "alarm" },
];

export default function Header() {
  const { useUserInfo, useRoute } = useHooks();
  const user = useUserInfo();
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState<Record<string, boolean>>({
    request: false,
    alarm: false,
    profile: false,
  });

  const handleModal = (modal: string) => {
    setOpenModal((prev) => ({
      [modal]: !prev[modal],
    }));
  };

  return (
    <div>
      <div className={`${isOpen ? style.bg : ""}`.trim()}></div>
      <Hamburger isOpen={isOpen} onClick={() => setIsOpen(false)} menuClose={() => setIsOpen(false)} />
      <header className={style.header}>
        <nav className={style.nav}>
          <button className={`${style.icon} ${style["menu-btn"]}`} onClick={() => setIsOpen(true)}>
            <img src="/imgs/gnb/ic_tab-menu.svg" alt="메뉴버튼" />
          </button>
          <div className={style["flex-center"]}>
            <h1 onClick={() => useRoute("/")}>
              <img src="/imgs/logo_combination.svg" alt="로고" />
            </h1>
            <HeadMenuList />
          </div>
          <div className={`${style["flex-center"]} ${style["modal-wrap"]}`}>
            {iconList.map((a, i) => (
              <button
                key={i}
                className={`${style.icon} ${a.alt === "요청" ? style.hidden : ""}`.trim()}
                onClick={() => handleModal(a.name)}
              >
                <img src={a.src} alt={a.alt} />
              </button>
            ))}
            <AvatarWrap
              name={user?.name!}
              src={user?.avatarURL!}
              alt={user?.name!}
              isProfile={true}
              onClick={() => handleModal("profile")}
            />
          </div>
        </nav>
        {openModal.request ? <RequestModal onClose={() => handleModal("request")} /> : null}
        {openModal.alarm ? <AlarmModal onClose={() => handleModal("alarm")} /> : null}
        {openModal.profile ? <ProfileModal onClose={() => handleModal("profile")} /> : null}
      </header>
    </div>
  );
}
