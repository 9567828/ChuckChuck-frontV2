import MainModalLayout from "../layout/main-modal/MainModalLayout";
import style from "./modal.module.scss";

export default function AlarmModal({ onClose }: { onClose: () => void }) {
  return (
    <MainModalLayout title="알람" onClose={onClose} isScroll={true} variant="content-wrap" addClass="alarm">
      <div className={style["content-wrap"]}>
        <div className={style["flex-wrap"]}>
          <div>카테고리</div>
          <div className="alarm-dot"></div>
        </div>
        <div>
          <p className={`captionXs-r ${style.eclips}`}>
            글자는 최대 2줄 까지 노출됩니다. 글자는 최대 2줄 까지 노출됩니다.글자는 최대 2줄 까지 노출됩니다.
          </p>
          <p className={style.meta}>1달 전</p>
        </div>
      </div>
    </MainModalLayout>
  );
}
