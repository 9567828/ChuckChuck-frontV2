import { FormEvent, useState } from "react";
import ModalLayout from "../layout/modal-layout/ModalLayout";
import PasswordBox from "../ui/input-box/PasswordBox";
import FormMessage from "../ui/form-message/FormMessage";
import { tempUser } from "@/utils/tempUser";
import style from "./modal.module.scss";

export default function EditPassword({ userId, onClose }: { userId: string; onClose: () => void }) {
  const [inputPw, setInputPw] = useState("");
  const [inputNewPw, setInputNewPw] = useState("");
  const [confirmNewPw, setConfirmNewPw] = useState("");
  const [changeMode, setChangeMode] = useState(false);
  const [msg, setMsg] = useState("");
  const [confirmMsg, setConfirmMsg] = useState("");

  const userInfo = tempUser.find((v) => v.email === userId);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputPw.trim() === "") {
      setMsg("비밀번호를 입력하세요.");
      return;
    }

    if (inputPw.trim() !== userInfo?.password) {
      setMsg("비밀번호가 일치하지 않습니다.");
      return;
    } else {
      setMsg("");
      setChangeMode(true);
    }

    if (changeMode) {
      if (inputNewPw.trim() === "") {
        setMsg("비밀번호를 입력하세요.");
        return;
      }
      if (confirmNewPw.trim() === "") {
        setConfirmMsg("비밀번호 확인을 입력하세요.");
        return;
      }
      if (inputNewPw.trim() !== confirmNewPw.trim()) {
        setConfirmMsg("비밀번호가 일치하지 않습니다.");
        return;
      } else {
        // 비밀번호 변경 업데이트
        onClose();
      }
    }
  };

  return (
    <ModalLayout
      variant="profile"
      title="비밀번호 변경하기"
      btnName={changeMode ? "저장" : "다음"}
      onClose={onClose}
      onSubmit={onSubmit}
    >
      {!changeMode ? (
        <div>
          <PasswordBox
            id="inputPw"
            placeholder="현재 비밀번호"
            inModal="nomal"
            value={inputPw}
            onChange={(e) => setInputPw(e.target.value)}
          />
          <FormMessage pdTop="4px" variant="error" text={msg} />
        </div>
      ) : (
        <div className={style["pw-wrap"]}>
          <div>
            <PasswordBox
              id="inputPw"
              placeholder="변경할 비밀번호 입력"
              inModal="nomal"
              value={inputNewPw}
              onChange={(e) => setInputNewPw(e.target.value)}
            />
            <FormMessage
              pdTop="4px"
              variant={msg !== "" ? "error" : "info"}
              text={
                msg !== "" ? msg : `영문 대소문자, 숫자, 특수문자 3가지 이상으로 조합하여\n8자 이상 32자 이하로 입력해주세요.`
              }
            />
          </div>
          <div>
            <PasswordBox
              id="pwConfirm"
              placeholder="변경할 비밀번호 확인"
              inModal="nomal"
              value={confirmNewPw}
              onChange={(e) => setConfirmNewPw(e.target.value)}
            />
            <FormMessage pdTop="4px" variant="error" text={confirmMsg} />
          </div>
        </div>
      )}
    </ModalLayout>
  );
}
