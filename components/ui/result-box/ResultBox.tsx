import style from "./result.module.scss";

export default function ResultBox({ email, meta }: { email: string; meta: string }) {
  return (
    <div className={style["box-wrap"]}>
      <p className={style.email}>{email}</p>
      <p className={style.meta}>{meta}</p>
    </div>
  );
}
