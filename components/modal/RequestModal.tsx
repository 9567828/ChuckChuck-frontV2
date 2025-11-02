import MainModalLayout from "../layout/main-modal/MainModalLayout";
import ConfirmBtn from "../ui/confrim-btn/ConfirmBtn";
import style from "./modal.module.scss";

export default function RequestModal({ onClose }: { onClose: () => void }) {
  return (
    <MainModalLayout title="요청" onClose={onClose} isScroll={true} variant="content-wrap" addClass="request">
      <div className={style["content-wrap"]}>
        <div>
          <p className="captionXs-r">새로운 가입요청이 있어요.</p>
          <div className={style.meta}>
            <p>이름: 김지호</p>
            <p>아이디 : rlawlgh486@naver.com</p>
          </div>
        </div>
        <ConfirmBtn label="수락" cancelBtnName="거절" variant="modal-v1" />
      </div>
    </MainModalLayout>
  );
}
