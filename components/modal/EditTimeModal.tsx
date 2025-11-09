import { FormEvent } from "react";
import ModalLayout from "../layout/modal-layout/ModalLayout";
import style from "./modal.module.scss";

interface IEditModal {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onClose: () => void;
  name: string;
  date: string;
  time: string;
}

export default function EditTimemModal({ name, date, time, onSubmit, onClose }: IEditModal) {
  return (
    <ModalLayout variant="set-work-small" title={name} date={date} onSubmit={onSubmit} onClose={onClose}>
      <div>
        <div className={style.container}>
          <div className={style["time-wrapper"]}>
            <p className="captionXxs-r">변경 전</p>
            <div className={style["time-box"]}>
              <p>{time}</p>
            </div>
          </div>
          <img src="/imgs/icons/ic_move_in.svg" alt="화살표" className={style.arrow} />
          <div className={style["time-wrapper"]}>
            <p className="captionXxs-r">변경 후</p>
            <input type="text" name="" id="" className={style["input-time"]} />
          </div>
        </div>
        <p className={style["info-text"]}>변경하실 시간을 입력해주세요.</p>
      </div>
    </ModalLayout>
  );
}
