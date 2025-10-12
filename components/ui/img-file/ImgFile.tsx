import ProfileImg from "@/components/layout/ProfileImg";
import style from "./img-file.module.scss";

interface IImg {
  title: string;
  isImg?: boolean;
  src?: string;
}

export default function ImgFile({ title, isImg = false, src }: IImg) {
  return (
    <ProfileImg title={title}>
      <div className={style["img-wrap"]}>
        <img src={isImg ? src : "/imgs/default-img.svg"} alt="프로필" className={style.img} />
      </div>
    </ProfileImg>
  );
}
