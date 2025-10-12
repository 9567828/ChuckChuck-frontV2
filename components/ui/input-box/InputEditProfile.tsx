import { ChangeEvent, InputHTMLAttributes } from "react";
import InputBox from "./InputBox";

interface IInputEdit {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputEditProfile({ label, id, type, placeholder, value, onChange }: IInputEdit) {
  return (
    <div>
      <p className="bodySm-b" style={{ padding: "0 4px", marginBottom: "6px" }}>
        {label}
      </p>
      <InputBox type={type} isSmall={true} id={id} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
}
