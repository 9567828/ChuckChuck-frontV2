import CheckBox from "@/components/ui/check-box/CheckBox";
import InputBox from "@/components/ui/input-box/InputBox";
import TextWrap from "../../../../components/ui/text-wrap/TextWrap";
import PrimayBtn from "@/components/ui/primary-btn/PrimaryBtn";
import style from "./join.module.scss";

const termsAgree = [
  { id: "private", text: "(필수) 개인정보 수집 이용 동의하기" },
  { id: "service", text: "(필수) 서비스 이용약관 동의하기" },
  { id: "marketing", text: "(선택) 메일, SNS 수신에 동의합니다." },
  { id: "all", text: "모든 약관 및 방침에 동의합니다." },
];

export default function JoinForm() {
  return (
    <>
      <form action="" className={style.form}>
        <div className={style["input-wrap"]}>
          <InputBox isId={true} type="text" id="inputId" placeholder="이름" />
        </div>
        <TextWrap text="이름을 확인해주세요" />
        <div className={style["birth-wrap"]}>
          <InputBox isBirth={true} type="text" id="inputYear" placeholder="YYYY" birthContent="년" />
          <InputBox isBirth={true} type="text" id="inputMonth" placeholder="MM" birthContent="월" />
          <InputBox isBirth={true} type="text" id="inputDate" placeholder="DD" birthContent="일" />
        </div>
        <div className={style["terms-wrap"]}>
          {termsAgree.map((t, i) => (
            <CheckBox id={t.id} key={i}>
              <label htmlFor={t.id}>{t.text}</label>
            </CheckBox>
          ))}
        </div>
        <PrimayBtn type="submit" label="다음" addClass="long" />
      </form>
    </>
  );
}
