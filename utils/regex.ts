export const handleRegex = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailRegex = (email: string) => {
    if (emailRegex.test(email)) {
      return true;
    } else {
      false;
    }
  };

  return { handleEmailRegex };
};
