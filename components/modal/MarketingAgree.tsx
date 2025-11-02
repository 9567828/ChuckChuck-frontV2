"use client";

import { FormEvent, useState } from "react";
import ModalLayout from "../layout/modal-layout/ModalLayout";
import CheckBox from "../ui/check-box/CheckBox";

export default function MarketingAgree({ onClose }: { onClose: () => void }) {
  const [checked, setChecked] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(checked);
    // 체크 완료 후 닫기
    onClose();
  };

  return (
    <ModalLayout title="마케팅 이용 • 수신 동의 변경하기" variant="profile" onSubmit={onSubmit} onClose={onClose}>
      <CheckBox id="checkAgree" variant="square" checked={checked} onChange={(e) => setChecked(e.target.checked)}>
        <label htmlFor="checkAgree" className="bodyMd-r">
          (선택) 메일, SNS 수신에 동의합니다.
        </label>
      </CheckBox>
    </ModalLayout>
  );
}
