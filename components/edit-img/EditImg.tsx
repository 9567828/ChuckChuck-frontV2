"use client";

import ProfileImg from "@/components/layout/ProfileImg";
import ConfirmBtn from "@/components/ui/confrim-btn/ConfirmBtn";
import InputFileImg from "@/components/ui/input-box/InputFileImg";
import { ChangeEvent, useState } from "react";

interface IEditImg {
  title: string;
  id: string;
}

export default function EditImg({ title, id }: IEditImg) {
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [curImg, setCurImg] = useState("");
  const [addImg, setAddImg] = useState<string | null>("");

  const handlePreview = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    console.log(files);

    if (files && files.length === 1) {
      const file = files[0];
      setImgFile(file);

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setAddImg(reader.result as string);
      };
    } else {
      setImgFile(null);
      setAddImg("");
    }
  };

  const handleReset = () => {
    setImgFile(null);
    setAddImg("");
  };

  return (
    <ProfileImg title={title}>
      <form>
        <div style={{ marginBottom: "12px" }}>
          <InputFileImg id={id} onChange={handlePreview} addImg={addImg!} />
        </div>
        <ConfirmBtn type="submit" label="수정하기" onCancel={handleReset} />
      </form>
    </ProfileImg>
  );
}
