"use client";

import VerifyEmail from "@/components/verify-email/VerifyEmail";

export default function RegisterId() {
  return (
    <>
      <VerifyEmail btnName="전송하기" defaultMsg="이메일을 입력하고 전송을 눌러주세요." mode="join" />
    </>
  );
}
