import MainModalLayout from "../layout/main-modal/MainModal";

export default function AlarmModal({ onClose }: { onClose: () => void }) {
  return (
    <MainModalLayout title="알람" onClose={onClose} isScroll={true} variant="content-wrap" addClass="alarm">
      <div>알람</div>
    </MainModalLayout>
  );
}
