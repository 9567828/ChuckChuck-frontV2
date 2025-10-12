import MainModalLayout from "../layout/main-modal/MainModal";
import ConfirmBtn from "../ui/confrim-btn/ConfirmBtn";
import style from "./modal.module.scss";

export default function RequestModal({ onClose }: { onClose: () => void }) {
  return (
    <MainModalLayout title="요청" onClose={onClose} isScroll={true} variant="content-wrap" addClass="request">
      <div className={style["request-content"]}>
        <div style={{ width: "216px" }}>
          <p className="captionXxs-r">새로운 가입요청이 있어요.</p>
          <div className={style["person-meta"]}>
            <p>이름: 김지호</p>
            <p>아이디 : rlawlgh486@naver.com</p>
          </div>
        </div>
        <ConfirmBtn label="수락" cancelBtnName="거절" variant="modal-v1" />
      </div>
    </MainModalLayout>
  );
}
