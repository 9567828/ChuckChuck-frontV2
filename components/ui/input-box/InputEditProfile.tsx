import { ChangeEvent, InputHTMLAttributes } from "react";
import InputBox from "./InputBox";

interface IInputEdit {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
}

export default function InputEditProfile({ label, id, type, placeholder, value, onChange, maxLength }: IInputEdit) {
  return (
    <div>
      <p className="label-title">{label}</p>
      <InputBox
        type={type}
        addClass="small"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
      />
    </div>
  );
}
