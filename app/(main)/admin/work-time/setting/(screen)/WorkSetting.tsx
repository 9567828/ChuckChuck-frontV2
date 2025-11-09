import SelectBox from "@/components/ui/select-box/SelectBox";
import ListLayout from "./(list-layout)/ListLayout";
import style from "./work.module.scss";

export default function WorkSetting() {
  return (
    <div>
      <ListLayout title="근무유형 선택">
        <SelectBox
          optionList={["고정 출퇴근제", "탄력 출퇴근제", "출퇴근 사용 안함"]}
          defaultValue="고정 출퇴근제"
          variant="square"
        />
      </ListLayout>
    </div>
  );
}
