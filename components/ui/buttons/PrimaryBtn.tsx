"use client";

import { ButtonHTMLAttributes } from "react";
import "./btn.scss";

interface IBtn extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  isGoogle?: boolean;
  variant?: "primary" | "secondary" | "google";
  addClass?: "long" | "nomal" | "small" | "edit";
}

export default function PrimayBtn({ label, variant = "primary", addClass, isGoogle = false, ...props }: IBtn) {
  return (
    <button {...props} className={`${variant}-btn ${addClass ? addClass : ""}`.trim()}>
      {isGoogle ? <img src="/imgs/icons/google_icon.svg" alt="구글로그인" /> : null}
      <p>{label}</p>
    </button>
  );
}
