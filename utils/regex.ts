import { Dispatch, SetStateAction } from "react";

export const handleRegex = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailRegex = (email: string) => {
    if (emailRegex.test(email)) {
      return true;
    } else {
      false;
    }
  };

  const handleOtherRegex = (regex: RegExp, value: string) => {
    if (regex.test(value)) {
      return true;
    } else {
      false;
    }
  };

  return { handleEmailRegex, handleOtherRegex };
};
